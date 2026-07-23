const PORTFOLIO_EXACT_ROUTES = new Set(['/', '/contact', '/mvp', '/demos']);

export function isPortfolioRoute(pathname) {
  return PORTFOLIO_EXACT_ROUTES.has(pathname);
}
