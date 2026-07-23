import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import BrandMark from './BrandMark';

const navItems = [
  { label: 'Solutions', to: '/demos' },
  { label: 'Industries', to: '/demos' },
  { label: 'Demos', to: '/demos' },
  { label: 'Contact', to: '/contact' },
];

export default function TopNav({ showCta = true, backLink }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 h-12 bg-canvas border-b border-hairline">
        <div className="max-w-[1584px] mx-auto h-full flex items-center justify-between px-4 lg:px-8 gap-3">
          <div className="flex items-center gap-4 lg:gap-8 min-w-0">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
              <BrandMark />
              <span className="text-sm font-semibold tracking-tight text-ink truncate max-w-[7rem] sm:max-w-none">
                Precision Studios
              </span>
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

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {backLink ? (
              <>
                <ThemeToggle />
                <Link
                  to={backLink.to}
                  className="flex items-center gap-1.5 sm:gap-2 text-ink-muted hover:text-ink text-xs sm:text-sm transition-colors"
                >
                  {backLink.icon}
                  <span className="hidden sm:inline">{backLink.label}</span>
                  <span className="sm:hidden">Back</span>
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
                    className="carbon-btn carbon-btn-primary text-xs px-3 sm:px-4 hidden sm:inline-flex"
                    style={{ height: '2rem' }}
                  >
                    Get Started
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="md:hidden h-10 w-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-surface-1 transition-colors"
                  aria-label="Open menu"
                  aria-expanded={menuOpen}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && !backLink && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-ink/40 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.24, ease: [0.2, 0, 0.38, 0.9] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-xs bg-canvas border-l border-hairline md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between h-12 px-4 border-b border-hairline">
                <span className="text-sm font-semibold text-ink">Menu</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="h-10 w-10 flex items-center justify-center text-ink-muted hover:text-ink"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-1">
                {navItems.map(item => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-base text-ink hover:bg-surface-1 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {showCta && (
                <div className="mt-auto p-4 border-t border-hairline">
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="carbon-btn carbon-btn-primary w-full"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
