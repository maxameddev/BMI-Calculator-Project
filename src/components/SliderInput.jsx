import NumberInputWithUnit from './NumberInputWithUnit';

export default function SliderInput({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
  error,
}) {
  const numValue = Math.min(max, Math.max(min, Number(value) || min));

  const handleSliderChange = (e) => {
    onChange(e.target.value);
  };

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label} <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          {value || '—'} {unit}
        </span>
      </div>

      <input
        type="range"
        id={`${id}-slider`}
        min={min}
        max={max}
        step={step}
        value={numValue}
        onChange={handleSliderChange}
        aria-label={`${label} slider`}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={numValue}
        className="mb-3"
      />

      <NumberInputWithUnit
        id={id}
        value={value}
        onChange={handleInputChange}
        min={1}
        step={step}
        unit={unit}
        placeholder={`Geli ${label.toLowerCase()}`}
        error={error}
        describedBy={error ? `${id}-error` : undefined}
      />

      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
