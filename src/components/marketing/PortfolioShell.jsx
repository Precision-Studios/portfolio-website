import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function PortfolioShell({ children }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('portfolio-theme');
    root.classList.toggle('dark', isDark);
    root.classList.remove('portfolio-dark-pending');
    root.style.colorScheme = isDark ? 'dark' : 'light';

    return () => {
      root.classList.remove('portfolio-theme', 'dark', 'portfolio-dark-pending');
      root.style.colorScheme = '';
    };
  }, [isDark]);

  return (
    <div className="min-h-screen bg-canvas text-ink font-plex selection:bg-primary/20">
      {children}
    </div>
  );
}
