/**
 * Script per generare automaticamente sitemap.xml
 * dai dati di prodotti e articoli
 * 
 * Esegui con: npx tsx scripts/generate-sitemap.ts
 */

import { writeFileSync } from 'fs';
import { products } from '../src/data/products';
import { articles } from '../src/data/articles';

const BASE_URL = 'https://iprofili.it';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
}

function generateSitemap(): void {
  const today = new Date().toISOString().split('T')[0];
  
  // Pagine statiche
  const staticUrls: SitemapUrl[] = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/prodotti', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/chi-siamo', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/garanzie', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/contatti', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/articoli', lastmod: today, changefreq: 'weekly', priority: '0.9' },
  ];
  
  // URL Prodotti (da products.ts)
  const productUrls: SitemapUrl[] = Object.keys(products).map(id => ({
    loc: `/prodotti/${id}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: (products as Record<string, { category: string }>)[id].category === 'infissi' ? '0.8' : '0.7',
  }));
  
  // URL Articoli (da articles.ts)
  const articleUrls: SitemapUrl[] = articles.map(article => ({
    loc: `/articoli/${article.slug}`,
    lastmod: article.dateISO,
    changefreq: 'monthly' as const,
    priority: '0.7',
  }));
  
  // Combina tutti gli URL
  const allUrls = [...staticUrls, ...productUrls, ...articleUrls];
  
  // Genera XML
  const xml = generateXML(allUrls);
  
  // Salva file
  writeFileSync('public/sitemap.xml', xml);
  console.log(`✅ Sitemap generata con ${allUrls.length} URL`);
  console.log(`   - ${staticUrls.length} pagine statiche`);
  console.log(`   - ${productUrls.length} prodotti`);
  console.log(`   - ${articleUrls.length} articoli`);
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
