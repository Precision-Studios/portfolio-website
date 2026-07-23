import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import BrandMark from './BrandMark';

export default function SiteFooter() {
  return (
    <footer className="bg-inverse-canvas text-inverse-ink-muted">
      <div className="max-w-[1584px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BrandMark className="w-8 h-8" />
              <span className="text-base font-semibold tracking-tight text-inverse-ink">Precision Studios</span>
            </div>
            <p className="text-sm text-inverse-ink-muted leading-relaxed mb-6 max-w-sm">
              Enterprise-grade digital solutions for Australian businesses. We digitise, automate, and scale your operations.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:mail@precisionstudios.tech" className="text-sm text-inverse-ink-muted hover:text-inverse-ink transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                mail@precisionstudios.tech
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm text-inverse-ink-muted mb-4 font-medium">Solutions</p>
            <div className="space-y-2">
              {['Websites & Web Apps', 'Mobile Applications', 'Backend & APIs', 'SEO & Marketing', 'E-Commerce', 'Digitalisation'].map(item => (
                <Link key={item} to="/demos" className="block text-sm text-inverse-ink-muted hover:text-inverse-ink transition-colors">{item}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-inverse-ink-muted mb-4 font-medium">Company</p>
            <div className="space-y-2">
              <Link to="/demos" className="block text-sm text-inverse-ink-muted hover:text-inverse-ink transition-colors">Live Demos</Link>
              <Link to="/mvp" className="block text-sm text-inverse-ink-muted hover:text-inverse-ink transition-colors">Projects</Link>
              <Link to="/contact" className="block text-sm text-inverse-ink-muted hover:text-inverse-ink transition-colors">Contact</Link>
              <a href="https://github.com/Precision-Studios" target="_blank" rel="noopener noreferrer" className="block text-sm text-inverse-ink-muted hover:text-inverse-ink transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-footer-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-inverse-ink-muted tracking-wider">
            © {new Date().getFullYear()} Precision Studios. All rights reserved. ABN: 89 198 004 110
          </p>
          <p className="text-xs text-inverse-ink-muted tracking-wider flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Serving businesses across Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
