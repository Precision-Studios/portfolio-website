import { products } from '../data/products.js';

const DEMO_ROUTES = [
  { path: '/demos', changefreq: 'weekly', priority: 0.9 },
  { path: '/demos/cafe', changefreq: 'monthly', priority: 0.8 },
  { path: '/demos/cafe/menu', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/cafe/order', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/cafe/dashboard', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/medical', changefreq: 'monthly', priority: 0.8 },
  { path: '/demos/medical/doctors', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/medical/booking', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/medical/dashboard', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/marketing', changefreq: 'monthly', priority: 0.8 },
  { path: '/demos/marketing/audits', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/marketing/keywords', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/marketing/dashboard', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/education', changefreq: 'monthly', priority: 0.8 },
  { path: '/demos/education/tutors', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/education/enroll', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/education/dashboard', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/pets', changefreq: 'monthly', priority: 0.8 },
  { path: '/demos/pets/profiles', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/pets/booking', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/pets/dashboard', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/flowers', changefreq: 'monthly', priority: 0.8 },
  { path: '/demos/flowers/catalog', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/flowers/order', changefreq: 'monthly', priority: 0.7 },
  { path: '/demos/flowers/dashboard', changefreq: 'monthly', priority: 0.7 },
];

const MVP_ROUTES = [
  { path: '/mvp', changefreq: 'weekly', priority: 0.9 },
  { path: '/mvp/tshirt', changefreq: 'monthly', priority: 0.8 },
  { path: '/mvp/tshirt/browse', changefreq: 'monthly', priority: 0.7 },
  ...products.map((product) => ({
    path: `/mvp/tshirt/product/${product.id}`,
    changefreq: 'monthly',
    priority: 0.6,
  })),
];

const CORE_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },
];

/** Routes excluded from indexing (auth, cart, errors). Kept in sync with App.jsx. */
export const NON_INDEXABLE_PATH_PREFIXES = [
  '/error/',
  '/mvp/tshirt/login',
  '/mvp/tshirt/signup',
  '/mvp/tshirt/cart',
];

/**
 * Canonical list of indexable paths for sitemap and robots rules.
 * Update this file when adding or removing public routes in App.jsx.
 */
export function getIndexableRoutes() {
  return [...CORE_ROUTES, ...MVP_ROUTES, ...DEMO_ROUTES];
}
