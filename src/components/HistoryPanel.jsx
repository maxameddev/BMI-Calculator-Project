import { History, X } from 'lucide-react';

function formatDate(isoString) {
  try {
    return new Intl.DateTimeFormat('so-SO', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(isoString));
  } catch {
    return isoString;
  }
}

export default function HistoryPanel({ history, onSelect, onDelete, onClearAll }) {
  if (history.length === 0) {
    return (
      <section className="card p-6 md:p-8" aria-labelledby="history-heading">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
            <History className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 id="history-heading" className="text-xl font-semibold text-gray-900 dark:text-white">
            Taariikhda
          </h2>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-6">
          Weli ma jirto taariikh. Xisaabi BMI si aad u aragto natiijooyinka hore.
        </p>
      </section>
    );
  }

  return (
    <section className="card p-6 md:p-8" aria-labelledby="history-heading">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
            <History className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h2 id="history-heading" className="text-xl font-semibold text-gray-900 dark:text-white">
              Taariikhda
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {history.length} {history.length === 1 ? 'natiijo' : 'natiijooyin'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClearAll}
          className="text-sm text-red-500 hover:text-red-600 dark:hover:text-red-400 font-medium
                     transition-colors duration-200 focus:outline-none focus:underline"
          aria-label="Tirtir dhammaan taariikhda"
        >
          Tirtir dhammaan
        </button>
      </div>

      <ul className="space-y-3 max-h-80 overflow-y-auto" role="list">
        {history.map((entry) => (
          <li key={entry.id}>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 group">
              <button
                type="button"
                onClick={() => onSelect(entry)}
                className="flex-1 text-left min-w-0 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1 -m-1"
                aria-label={`Soo rar natiijada BMI ${entry.bmi} ee ${formatDate(entry.timestamp)}`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: entry.category?.color || '#3b82f6' }}
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    BMI {entry.bmi}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {entry.category?.labelSomali}
                  </span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 truncate">
                  {entry.weight} kg · {entry.height} cm · {formatDate(entry.timestamp)}
                </p>
              </button>
              <button
                type="button"
                onClick={() => onDelete(entry.id)}
                className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50
                           dark:hover:bg-red-950/30 transition-colors duration-200
                           focus:outline-none focus:ring-2 focus:ring-red-500 shrink-0"
                aria-label={`Tirtir natiijada BMI ${entry.bmi}`}
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
