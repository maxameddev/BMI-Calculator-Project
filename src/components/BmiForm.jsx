import { Calculator } from 'lucide-react';
import GenderSelector from './GenderSelector';
import SliderInput from './SliderInput';
import { HEIGHT_MIN, HEIGHT_MAX, WEIGHT_MIN, WEIGHT_MAX } from '../utils/bmi';

export default function BmiForm({ formData, errors, onFieldChange, onCalculate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <section className="card p-6 md:p-8" aria-labelledby="calculator-heading">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
          <Calculator className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h2 id="calculator-heading" className="text-xl font-semibold text-gray-900 dark:text-white">
            Xisaabi BMI-gaaga
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Buuxi dhammaan goobaha hoose
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <GenderSelector
          value={formData.gender}
          onChange={(val) => onFieldChange('gender', val)}
          error={errors.gender}
        />

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Da&apos;da (sano) <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={(e) => onFieldChange('age', e.target.value)}
            min={1}
            placeholder="Geli da'daada"
            aria-invalid={Boolean(errors.age)}
            aria-describedby={errors.age ? 'age-error' : undefined}
            className={`input-field ${errors.age ? 'border-red-400 dark:border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.age && (
            <p id="age-error" className="mt-2 text-sm text-red-500" role="alert">
              {errors.age}
            </p>
          )}
        </div>

        <SliderInput
          id="height"
          label="Dhererka"
          value={formData.height}
          onChange={(val) => onFieldChange('height', val)}
          min={HEIGHT_MIN}
          max={HEIGHT_MAX}
          step={1}
          unit="cm"
          error={errors.height}
        />

        <SliderInput
          id="weight"
          label="Miisaanka"
          value={formData.weight}
          onChange={(val) => onFieldChange('weight', val)}
          min={WEIGHT_MIN}
          max={WEIGHT_MAX}
          step={0.5}
          unit="kg"
          error={errors.weight}
        />

        <button type="submit" className="btn-primary w-full text-base">
          <Calculator className="w-5 h-5" aria-hidden="true" />
          Xisaabi BMI
        </button>
      </form>
    </section>
  );
}
