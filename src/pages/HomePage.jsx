import BmiForm from '../components/BmiForm';
import BmiResult from '../components/BmiResult';
import BmiChart from '../components/BmiChart';
import HealthAdvice from '../components/HealthAdvice';
import ActionButtons from '../components/ActionButtons';
import HistoryPanel from '../components/HistoryPanel';
import EducationSection from '../components/EducationSection';
import { useBmiCalculator } from '../hooks/useBmiCalculator';
import { useBmiHistory } from '../hooks/useBmiHistory';

export default function HomePage() {
  const {
    formData,
    errors,
    result,
    hasCalculated,
    updateField,
    calculate,
    reset,
    loadFromHistory,
  } = useBmiCalculator();

  const { history, addEntry, deleteEntry, clearHistory } = useBmiHistory();

  const handleCalculate = () => {
    const calculated = calculate();
    if (calculated) {
      addEntry({
        gender: formData.gender,
        age: Number(formData.age),
        height: Number(formData.height),
        weight: Number(formData.weight),
        bmi: calculated.bmi,
        category: calculated.category,
        healthyRange: calculated.healthyRange,
      });
    }
  };

  const handleReset = () => {
    reset();
  };

  const handleHistorySelect = (entry) => {
    loadFromHistory(entry);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
          Ogaada Miisaankaaga Caafimaadka Leh
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed">
          Xisaabi BMI-gaaga oo hel talooyin caafimaad oo Soomaali ah. Fudud, degdeg, oo sax ah.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <BmiForm
            formData={formData}
            errors={errors}
            onFieldChange={updateField}
            onCalculate={handleCalculate}
          />
          <HistoryPanel
            history={history}
            onSelect={handleHistorySelect}
            onDelete={deleteEntry}
            onClearAll={clearHistory}
          />
        </div>

        <div className="lg:col-span-3 space-y-6">
          {hasCalculated && result ? (
            <>
              <BmiResult result={result} />
              <ActionButtons result={result} onReset={handleReset} />
              <BmiChart bmi={result.bmi} />
              <HealthAdvice advice={result.advice} categoryId={result.category.id} />
            </>
          ) : (
            <div className="card p-8 md:p-12 text-center">
              <div className="max-w-sm mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Natiijadaadu halkan ayay ka muuqan doontaa
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Buuxi foomka bidix si aad u xisaabiso BMI-gaaga oo aad u hesho talooyin caafimaad oo ku habboon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <EducationSection height={formData.height} />
    </div>
  );
}
