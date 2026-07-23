import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const MODES = [
  { id: 'system', label: 'System theme', icon: Monitor },
  { id: 'light', label: 'Light mode', icon: Sun },
  { id: 'dark', label: 'Dark mode', icon: Moon },
];

export default function ThemeToggle() {
  const { preference, setThemePreference } = useTheme();

  return (
    <div
      className="flex items-center border border-hairline"
      role="group"
      aria-label="Theme"
    >
      {MODES.map(({ id, label, icon: Icon }) => {
        const active = preference === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setThemePreference(id)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`h-8 w-8 flex items-center justify-center transition-colors ${
              active
                ? 'bg-surface-1 text-ink'
                : 'text-ink-muted hover:text-ink hover:bg-surface-1/60'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
          </button>
        );
      })}
    </div>
  );
}
