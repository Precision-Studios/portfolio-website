import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function DemoWhitelabelNav({
  backTo = '/demos',
  backLabel = 'All Demos',
  brandIcon,
  brandName,
  brandSubtitle,
  accentLinkClass = 'text-primary hover:text-primary-hover',
  mutedClass = 'text-ink-muted',
  borderClass = 'border-hairline',
  bgClass = 'bg-canvas/90',
}) {
  return (
    <nav className={`sticky top-0 z-50 ${bgClass} backdrop-blur-md border-b ${borderClass}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 px-4 sm:px-6 h-14 min-w-0">
        <Link
          to={backTo}
          className={`flex items-center gap-1.5 sm:gap-2 ${mutedClass} hover:text-ink text-xs sm:text-sm transition-colors shrink-0`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{backLabel}</span>
          <span className="sm:hidden">Back</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 justify-center px-2">
          {brandIcon}
          <div className="min-w-0 text-center sm:text-left">
            <span className="text-sm sm:text-base font-semibold tracking-tight block truncate">
              {brandName}
            </span>
            {brandSubtitle && (
              <span className={`text-[10px] ${mutedClass} hidden sm:block`}>{brandSubtitle}</span>
            )}
          </div>
        </div>

        <div className={`flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs ${mutedClass} shrink-0`}>
          <span className="hidden sm:inline">Built by</span>
          <Link to="/" className={`font-semibold ${accentLinkClass} transition-colors whitespace-nowrap`}>
            Precision Studios
          </Link>
        </div>
      </div>
    </nav>
  );
}
