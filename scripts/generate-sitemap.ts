/**
 * Genera sitemap.xml da prodotti, articoli e città (tutto statico).
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

function generateSitemap(): void {
  const today = new Date().toISOString().split('T')[0];

  const staticUrls: SitemapUrl[] = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/prodotti', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/chi-siamo', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/garanzie', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/contatti', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/posa-qualificata', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/articoli', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/privacy-policy', lastmod: today, changefreq: 'yearly', priority: '0.3' },
    { loc: '/cookie-policy', lastmod: today, changefreq: 'yearly', priority: '0.3' },
    { loc: '/termini-condizioni', lastmod: today, changefreq: 'yearly', priority: '0.3' },
  ];

  const productUrls: SitemapUrl[] = Object.keys(products).map(id => ({
    loc: `/prodotti/${id}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: (products as Record<string, { category: string }>)[id].category === 'infissi' ? '0.8' : '0.7',
  }));

  const articleUrls: SitemapUrl[] = articles.map(article => ({
    loc: `/articoli/${article.slug}`,
    lastmod: article.dateISO,
    changefreq: 'monthly' as const,
    priority: '0.7',
  }));

  const cityUrls: SitemapUrl[] = cities.map(city => ({
    loc: `/serramenti/${city.slug}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: '0.8',
  }));

  const allUrls = [...staticUrls, ...productUrls, ...articleUrls, ...cityUrls];

  writeFileSync('public/sitemap.xml', generateXML(allUrls));
  console.log(`sitemap.xml generata: ${allUrls.length} URL`);
  console.log(`  - ${staticUrls.length} pagine statiche`);
  console.log(`  - ${productUrls.length} prodotti`);
  console.log(`  - ${articleUrls.length} articoli`);
  console.log(`  - ${cityUrls.length} landing città`);
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

generateSitemap();
