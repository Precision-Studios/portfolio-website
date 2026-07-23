/**
 * Site-wide SEO and localization settings.
 * Add locales here when translated routes are introduced in the router.
 */
export const DEFAULT_SITE_URL = 'https://precisionstudios.tech';

export const SUPPORTED_LOCALES = [
  {
    code: 'en',
    hreflang: 'en',
    pathPrefix: '',
    isDefault: true,
  },
];

export const DEFAULT_LOCALE =
  SUPPORTED_LOCALES.find((locale) => locale.isDefault) ?? SUPPORTED_LOCALES[0];

export function resolveSiteUrl(env = {}) {
  const raw = env.SITE_URL || env.VITE_SITE_URL || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, '');
}

export function localizedPath(locale, path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;

  if (!locale.pathPrefix) {
    return normalized;
  }

  if (normalized === '/') {
    return locale.pathPrefix;
  }

  return `${locale.pathPrefix}${normalized}`;
}

export function localizedUrl(siteUrl, locale, path) {
  return `${siteUrl}${localizedPath(locale, path)}`;
}
