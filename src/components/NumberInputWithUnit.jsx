export default function NumberInputWithUnit({
  id,
  value,
  onChange,
  unit,
  min = 1,
  step = 1,
  placeholder,
  error,
  describedBy,
}) {
  return (
    <div
      className={`number-input-group ${error ? 'number-input-group-error' : ''}`}
    >
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        min={min}
        step={step}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className="number-input-field"
      />
      <span className="number-input-unit" aria-hidden="true">
        {unit}
      </span>
    </div>
  );
}
