/**
 * Script per generare automaticamente sitemap.xml
 * dai dati di prodotti, articoli e città
 * 
 * Esegui con: npx tsx scripts/generate-sitemap.ts
 */

import { writeFileSync } from 'fs';
import { products } from '../src/data/products';
import { articles } from '../src/data/articles';
import { cities } from '../src/data/cities';

const BASE_URL = 'https://iprofili.it';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
}

// Articoli pubblicati nel database Supabase (aggiornato manualmente o via script)
const dbArticles: { slug: string; dateISO: string }[] = [
  { slug: 'infissi-varese-guida-locale', dateISO: '2026-02-06' },
  { slug: 'infissi-cremona-guida-locale', dateISO: '2026-02-06' },
  { slug: 'infissi-lecco-guida-locale', dateISO: '2026-02-06' },
  { slug: 'infissi-pavia-guida-locale', dateISO: '2026-02-06' },
  { slug: 'infissi-brescia-guida-locale', dateISO: '2026-02-06' },
  { slug: 'infissi-monza-brianza-guida-locale', dateISO: '2026-02-06' },
  { slug: 'infissi-como-guida-locale', dateISO: '2026-02-06' },
  { slug: 'infissi-lodi-guida-locale', dateISO: '2026-02-06' },
  { slug: 'infissi-milano-guida-completa-2026', dateISO: '2026-02-03' },
  { slug: 'serramenti-lombardia-come-scegliere-2026', dateISO: '2026-02-01' },
  { slug: 'preventivo-infissi-cosa-controllare', dateISO: '2026-01-28' },
  { slug: 'prezzi-infissi-pvc-2026-listino', dateISO: '2026-01-25' },
  { slug: 'sostituzione-finestre-costi-2026', dateISO: '2026-01-22' },
  { slug: 'bonus-infissi-50-2026-guida', dateISO: '2026-01-20' },
  { slug: 'infissi-bergamo-guida-locale', dateISO: '2026-01-18' },
  { slug: 'come-scegliere-infissi-guida', dateISO: '2026-01-15' },
  { slug: 'pvc-alluminio-confronto', dateISO: '2026-01-12' },
  { slug: 'direttiva-case-green-2024', dateISO: '2026-01-10' },
  { slug: 'errori-sostituzione-infissi', dateISO: '2026-01-05' },
  { slug: 'risparmio-energetico-infissi', dateISO: '2026-01-01' },
];

function generateSitemap(): void {
  const today = new Date().toISOString().split('T')[0];
  
  // Pagine statiche
  const staticUrls: SitemapUrl[] = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/prodotti', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/chi-siamo', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/garanzie', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/contatti', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/posa-qualificata', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/articoli', lastmod: today, changefreq: 'weekly', priority: '0.9' },
  ];
  
  // URL Prodotti (da products.ts)
  const productUrls: SitemapUrl[] = Object.keys(products).map(id => ({
    loc: `/prodotti/${id}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: (products as Record<string, { category: string }>)[id].category === 'infissi' ? '0.8' : '0.7',
  }));
  
  // URL Articoli statici (da articles.ts) - fallback
  const staticArticleUrls: SitemapUrl[] = articles.map(article => ({
    loc: `/articoli/${article.slug}`,
    lastmod: article.dateISO,
    changefreq: 'monthly' as const,
    priority: '0.7',
  }));

  // URL Articoli dal database
  const dbArticleUrls: SitemapUrl[] = dbArticles.map(article => ({
    loc: `/articoli/${article.slug}`,
    lastmod: article.dateISO,
    changefreq: 'monthly' as const,
    priority: '0.7',
  }));

  // Combina articoli statici e DB, rimuovendo duplicati per slug
  const allArticleSlugs = new Set<string>();
  const articleUrls: SitemapUrl[] = [];
  
  // Prima aggiungi articoli DB (più recenti)
  for (const url of dbArticleUrls) {
    const slug = url.loc.replace('/articoli/', '');
    if (!allArticleSlugs.has(slug)) {
      allArticleSlugs.add(slug);
      articleUrls.push(url);
    }
  }
  
  // Poi aggiungi articoli statici non duplicati
  for (const url of staticArticleUrls) {
    const slug = url.loc.replace('/articoli/', '');
    if (!allArticleSlugs.has(slug)) {
      allArticleSlugs.add(slug);
      articleUrls.push(url);
    }
  }

  // URL Città SEO Landing Pages (da cities.ts)
  const cityUrls: SitemapUrl[] = cities.map(city => ({
    loc: `/serramenti/${city.slug}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: '0.8',
  }));
  
  // Combina tutti gli URL
  const allUrls = [...staticUrls, ...productUrls, ...articleUrls, ...cityUrls];
  
  // Genera XML
  const xml = generateXML(allUrls);
  
  // Salva file
  writeFileSync('public/sitemap.xml', xml);
  console.log(`✅ Sitemap generata con ${allUrls.length} URL`);
  console.log(`   - ${staticUrls.length} pagine statiche`);
  console.log(`   - ${productUrls.length} prodotti`);
  console.log(`   - ${articleUrls.length} articoli (${dbArticleUrls.length} da DB + ${staticArticleUrls.length - (staticArticleUrls.length - articleUrls.length + dbArticleUrls.length)} statici)`);
  console.log(`   - ${cityUrls.length} landing page città`);
}

function generateXML(urls: SitemapUrl[]): string {
  const urlEntries = urls.map(url => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Esegui
generateSitemap();
