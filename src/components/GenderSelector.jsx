import { User, Users } from 'lucide-react';

const OPTIONS = [
  { value: 'male', label: 'Lab', icon: User },
  { value: 'female', label: 'Dhedig', icon: Users },
];

export default function GenderSelector({ value, onChange, error }) {
  return (
    <fieldset className="border-0 p-0 m-0 min-w-0">
      <legend className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Jinsiga <span className="text-red-500" aria-hidden="true">*</span>
      </legend>
      <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Dooro jinsiga">
        {OPTIONS.map(({ value: optValue, label, icon: Icon }) => {
          const isSelected = value === optValue;
          return (
            <button
              key={optValue}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(optValue)}
              className={[
                'flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium',
                'border shadow-none transition-colors duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                'dark:focus-visible:ring-offset-gray-900',
                isSelected
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/80',
              ].join(' ')}
            >
              <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
              {label}
            </button>
          );
        })}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
