import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import BrandMark from './BrandMark';

const navItems = [
  { label: 'Solutions', to: '/demos' },
  { label: 'Industries', to: '/demos' },
  { label: 'Demos', to: '/demos' },
  { label: 'Contact', to: '/contact' },
];

export default function TopNav({ showCta = true, backLink }) {
  return (
    <nav className="sticky top-0 z-50 h-12 bg-canvas border-b border-hairline">
      <div className="max-w-[1584px] mx-auto h-full flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
              <BrandMark />
              <span className="text-sm font-semibold tracking-tight text-ink">Precision Studios</span>
            </Link>
          {!backLink && (
            <div className="hidden md:flex items-center gap-0">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="px-4 h-12 flex items-center text-sm text-ink-muted hover:text-ink hover:bg-surface-1 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          {backLink ? (
            <>
              <ThemeToggle />
              <Link to={backLink.to} className="flex items-center gap-2 text-ink-muted hover:text-ink text-sm transition-colors">
                {backLink.icon}
                <span>{backLink.label}</span>
              </Link>
            </>
          ) : (
            <>
              <span className="hidden lg:flex items-center gap-1.5 text-xs text-ink-subtle mr-1">
                <MapPin className="w-3 h-3" />
                Serving businesses across Australia
              </span>
              <ThemeToggle />
              {showCta && (
                <Link
                  to="/contact"
                  className="carbon-btn carbon-btn-primary text-xs px-4"
                  style={{ height: '2rem' }}
                >
                  Get Started
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
