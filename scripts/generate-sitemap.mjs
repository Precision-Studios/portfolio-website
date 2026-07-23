import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  localizedUrl,
  resolveSiteUrl,
} from '../src/lib/siteConfig.js';
import { getIndexableRoutes, NON_INDEXABLE_PATH_PREFIXES } from '../src/lib/sitemapRoutes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const siteUrl = resolveSiteUrl(process.env);
const lastmod = new Date().toISOString().slice(0, 10);
const routes = getIndexableRoutes();

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function renderHreflangLinks(path) {
  const links = SUPPORTED_LOCALES.map((locale) => {
    const href = localizedUrl(siteUrl, locale, path);
    return `    <xhtml:link rel="alternate" hreflang="${escapeXml(locale.hreflang)}" href="${escapeXml(href)}" />`;
  });

  const defaultHref = localizedUrl(siteUrl, DEFAULT_LOCALE, path);
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(defaultHref)}" />`,
  );

  return links.join('\n');
}

function renderSitemap() {
  const urlEntries = routes
    .map((route) => {
      const loc = localizedUrl(siteUrl, DEFAULT_LOCALE, route.path);

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
${renderHreflangLinks(route.path)}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;
}

function renderRobotsTxt() {
  const disallowRules = NON_INDEXABLE_PATH_PREFIXES.map(
    (path) => `Disallow: ${path}`,
  );

  return `User-agent: *
Allow: /

${disallowRules.join('\n')}

Sitemap: ${siteUrl}/sitemap.xml
`;
}

const sitemapPath = join(publicDir, 'sitemap.xml');
const robotsPath = join(publicDir, 'robots.txt');

writeFileSync(sitemapPath, renderSitemap(), 'utf8');
writeFileSync(robotsPath, renderRobotsTxt(), 'utf8');

console.log(`Generated sitemap.xml (${routes.length} URLs, ${SUPPORTED_LOCALES.length} locale(s))`);
console.log('Generated robots.txt');
