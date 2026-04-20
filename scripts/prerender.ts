/**
 * Prerendering statico post-build.
 * Avvia un server locale su dist/, apre ogni URL con Chromium headless,
 * attende che la SPA sia renderizzata (incluso SEOHead che imposta title/meta),
 * e salva HTML puro in dist/{route}/index.html.
 *
 * Usa: npx tsx scripts/prerender.ts
 */
import puppeteer, { Browser, Page } from "puppeteer";
import sirv from "sirv";
import http from "http";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";

const PORT = 4999;
const DIST = path.resolve("dist");
const CONCURRENCY = 4; // parallel pages (evita timeout)
const PAGE_TIMEOUT = 25000;

function extractUrls(): string[] {
  const sitemap = readFileSync("public/sitemap.xml", "utf-8");
  const urls = [...sitemap.matchAll(/<loc>https:\/\/www\.i-profili\.it([^<]*)<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => u && !u.startsWith("http"))
    .map((u) => (u === "" ? "/" : u));
  return Array.from(new Set(urls));
}

async function renderUrl(browser: Browser, url: string): Promise<{ ok: boolean; error?: string }> {
  let page: Page | null = null;
  try {
    page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    // Blocca script di terze parti (reCAPTCHA, Meta, analytics) che rallentano il prerender
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const u = req.url();
      if (
        u.includes("google.com/recaptcha") ||
        u.includes("gstatic.com/recaptcha") ||
        u.includes("leadconnectorhq.com") ||
        u.includes("connect.facebook.net") ||
        u.includes("googletagmanager.com") ||
        u.includes("google-analytics.com")
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(`http://localhost:${PORT}${url}`, {
      waitUntil: "domcontentloaded",
      timeout: PAGE_TIMEOUT,
    });

    // Attendi che React monti e SEOHead imposti il title
    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        if (!root || root.children.length === 0 || root.innerHTML.length < 500) return false;
        return !!document.querySelector("h1") || !!document.querySelector("main");
      },
      { timeout: 15000, polling: 200 }
    );

    // Piccola pausa per SEOHead (title/meta)
    await new Promise((r) => setTimeout(r, 200));

    const html = await page.content();

    // Percorso output: /articoli/xxx -> dist/articoli/xxx/index.html
    const relativePath = url === "/" ? "index.html" : path.join(url.replace(/^\//, ""), "index.html");
    const outPath = path.join(DIST, relativePath);
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");

    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: msg };
  } finally {
    if (page) await page.close().catch(() => {});
  }
}

async function processPool<T, R>(items: T[], concurrency: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

async function main() {
  const urls = extractUrls();
  console.log(`\n🚀 Prerendering ${urls.length} URLs with concurrency ${CONCURRENCY}...\n`);

  // Avvia server statico su dist
  const serve = sirv(DIST, { single: true, dev: false });
  const server = http.createServer((req, res) => {
    serve(req, res, () => {
      res.statusCode = 404;
      res.end("Not found");
    });
  });
  await new Promise<void>((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const start = Date.now();
  let done = 0;
  let failed = 0;

  const results = await processPool(urls, CONCURRENCY, async (url) => {
    const res = await renderUrl(browser, url);
    done++;
    if (!res.ok) {
      failed++;
      process.stdout.write(`✗ ${url} — ${res.error}\n`);
    } else if (done % 25 === 0 || done === urls.length) {
      process.stdout.write(`  [${done}/${urls.length}] ${Math.round(((Date.now() - start) / 1000))}s\n`);
    }
    return res;
  });

  await browser.close();
  server.close();

  const ok = results.filter((r) => r.ok).length;
  const elapsed = Math.round((Date.now() - start) / 1000);
  console.log(`\n✅ Prerender completato: ${ok}/${urls.length} OK (${failed} falliti) in ${elapsed}s\n`);
  if (failed > urls.length * 0.1) {
    console.error(`⚠  Più del 10% fallito. Controlla gli errori sopra.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Errore fatale:", err);
  process.exit(1);
});
