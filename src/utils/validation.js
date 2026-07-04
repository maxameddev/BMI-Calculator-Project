const FIELD_LABELS = {
  gender: 'Jinsiga',
  age: 'Da\'da',
  height: 'Dhererka',
  weight: 'Miisaanka',
};

function parseNumber(value) {
  if (value === '' || value === null || value === undefined) return null;
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function validatePositiveField(value, label) {
  const num = parseNumber(value);

  if (value === '' || value === null || value === undefined) {
    return `${label} waa lagama maarmaan.`;
  }

  if (num === null) {
    return `${label} waa inuu noqdaa tiro sax ah.`;
  }

  if (num <= 0) {
    return `${label} ma noqon karo eber ama tiro taban.`;
  }

  return null;
}

export function validateForm(formData) {
  const errors = {};

  if (!formData.gender) {
    errors.gender = `${FIELD_LABELS.gender} waa lagama maarmaan.`;
  }

  const ageError = validatePositiveField(formData.age, FIELD_LABELS.age);
  if (ageError) errors.age = ageError;

  const heightError = validatePositiveField(formData.height, FIELD_LABELS.height);
  if (heightError) errors.height = heightError;

  const weightError = validatePositiveField(formData.weight, FIELD_LABELS.weight);
  if (weightError) errors.weight = weightError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function hasFieldError(errors, field) {
  return Boolean(errors[field]);
}
