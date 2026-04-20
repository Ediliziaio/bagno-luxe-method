import puppeteer from "puppeteer";
import sirv from "sirv";
import http from "http";

const PORT = 4998;
const DIST = "dist";

async function main() {
  const serve = sirv(DIST, { single: true, dev: false });
  const server = http.createServer((req, res) => {
    serve(req, res, () => {
      res.statusCode = 404;
      res.end("Not found");
    });
  });
  await new Promise<void>((r) => server.listen(PORT, r));

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();

  page.on("console", (msg) => console.log("  [console]", msg.type(), msg.text()));
  page.on("pageerror", (err) => console.log("  [pageerror]", err.message));
  page.on("requestfailed", (req) => console.log("  [reqfail]", req.url()));

  const url = process.argv[2] || "/articoli/detrazioni-fiscali-infissi-2026-50-65-75-ecobonus";
  console.log(`Visiting http://localhost:${PORT}${url}`);
  await page.goto(`http://localhost:${PORT}${url}`, { waitUntil: "networkidle2", timeout: 30000 });

  for (let i = 1; i <= 6; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    const stats = await page.evaluate(() => {
      const root = document.getElementById("root");
      return {
        rootChildren: root?.children.length || 0,
        rootHtmlLen: root?.innerHTML.length || 0,
        title: document.title,
        h1: document.querySelector("h1")?.textContent?.slice(0, 80) || null,
      };
    });
    console.log(`t=${i}s`, stats);
  }

  await browser.close();
  server.close();
}

main().catch(console.error);
