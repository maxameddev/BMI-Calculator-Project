import { Heart, AlertTriangle, CheckCircle2, Lightbulb } from 'lucide-react';

export default function HealthAdvice({ advice, categoryId }) {
  if (!advice) return null;

  const isNormal = categoryId === 'normal';
  const isObese = categoryId === 'obese';

  return (
    <section className="card p-6 md:p-8" aria-labelledby="advice-heading">
      <div className="flex items-center gap-3 mb-6">
        <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${
          isNormal
            ? 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400'
            : isObese
              ? 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400'
              : 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400'
        }`}>
          {isNormal ? (
            <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
          ) : isObese ? (
            <AlertTriangle className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Heart className="w-5 h-5" aria-hidden="true" />
          )}
        </div>
        <div>
          <h2 id="advice-heading" className="text-xl font-semibold text-gray-900 dark:text-white">
            {advice.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Talooyin caafimaad oo ku habboon natiijadaada
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            <Lightbulb className="w-4 h-4 text-amber-500" aria-hidden="true" />
            Talooyin
          </h3>
          <ul className="space-y-2.5" role="list">
            {advice.tips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" aria-hidden="true" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {advice.risks.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-500" aria-hidden="true" />
              Dhibaatooyinka La Xiriira
            </h3>
            <ul className="space-y-2.5" role="list">
              {advice.risks.map((risk) => (
                <li
                  key={risk}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
