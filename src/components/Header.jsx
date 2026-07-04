import { Activity } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-600 text-white shadow-sm"
              aria-hidden="true"
            >
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                Xisaabiyaha BMI
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                BMI Calculator — Caafimaadkaaga
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
