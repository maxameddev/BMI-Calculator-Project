import { Scale, Target, Info } from 'lucide-react';

export default function BmiResult({ result }) {
  if (!result) return null;

  const { bmi, category, healthyRange, advice } = result;

  return (
    <section
      className={`card p-6 md:p-8 border-2 ${category.borderClass}`}
      aria-labelledby="result-heading"
      aria-live="polite"
    >
      <div className="text-center mb-6">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">BMI-gaaga</p>
        <div className="flex items-center justify-center gap-3">
          <span
            className={`inline-block w-4 h-4 rounded-full ${category.bgClass}`}
            aria-hidden="true"
          />
          <span id="result-heading" className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            {bmi}
          </span>
        </div>
        <p className={`mt-2 text-lg font-semibold ${category.textClass}`}>
          {category.labelSomali}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{category.label}</p>
      </div>

      <div className={`rounded-xl p-4 mb-6 ${category.bgLightClass}`}>
        <div className="flex items-start gap-3">
          <Info className={`w-5 h-5 mt-0.5 shrink-0 ${category.textClass}`} aria-hidden="true" />
          <div>
            <p className={`font-medium ${category.textClass}`}>{advice.statusMessage}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {advice.explanation}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 shrink-0">
            <Scale className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Miisaanka Hadda</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {result.formData.weight} kg
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 shrink-0">
            <Target className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Miisaanka Caafimaadka Leh</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {healthyRange.min} — {healthyRange.max} kg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
