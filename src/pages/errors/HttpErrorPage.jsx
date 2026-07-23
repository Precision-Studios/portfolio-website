import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  ShieldOff,
  FileQuestion,
  ServerCrash,
  Unplug,
  Wrench,
  Clock,
} from 'lucide-react';
import TopNav from '../../components/marketing/TopNav';
import SiteFooter from '../../components/marketing/SiteFooter';
import PortfolioShell from '../../components/marketing/PortfolioShell';
import { getHttpError } from '../../lib/httpErrors';

const ICONS = {
  403: ShieldOff,
  404: FileQuestion,
  500: ServerCrash,
  502: Unplug,
  503: Wrench,
  504: Clock,
};

export default function HttpErrorPage({ code: codeProp }) {
  const { code: codeParam } = useParams();
  const error = getHttpError(codeProp ?? codeParam);
  const Icon = ICONS[error.code] ?? FileQuestion;

  return (
    <PortfolioShell>
      <TopNav
        showCta={false}
        backLink={{
          to: '/',
          label: 'Back to Home',
          icon: <ArrowLeft className="w-4 h-4" />,
        }}
      />

      <main className="max-w-[1584px] mx-auto px-4 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-primary mb-4 font-mono tracking-wider">{error.code}</p>

          <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-primary/8 text-primary">
            <Icon className="w-7 h-7" aria-hidden />
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-tight text-ink mb-3">
            {error.title}
          </h1>

          <p className="text-body-lg text-ink font-medium mb-4">{error.headline}</p>

          <p className="text-body-sm text-ink-muted leading-relaxed mb-10">{error.description}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="carbon-btn carbon-btn-primary inline-flex items-center justify-center gap-2 px-8 w-full sm:w-auto"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/demos"
              className="carbon-btn carbon-btn-secondary inline-flex items-center justify-center gap-2 px-8 w-full sm:w-auto"
            >
              <span>View Live Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-10 text-body-sm text-ink-muted">
            Still stuck?{' '}
            <Link to="/contact" className="text-primary hover:text-primary-hover transition-colors">
              Contact Precision Studios
            </Link>
          </p>
        </div>
      </main>

      <SiteFooter />
    </PortfolioShell>
  );
}
