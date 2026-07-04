export const BMI_CATEGORIES = {
  underweight: {
    id: 'underweight',
    label: 'Underweight',
    labelSomali: 'Miisaan Yar',
    min: 0,
    max: 18.4,
    color: '#3b82f6',
    bgClass: 'bg-blue-500',
    textClass: 'text-blue-600 dark:text-blue-400',
    bgLightClass: 'bg-blue-50 dark:bg-blue-950/40',
    borderClass: 'border-blue-200 dark:border-blue-800',
  },
  normal: {
    id: 'normal',
    label: 'Normal Weight',
    labelSomali: 'Miisaan Caadi ah',
    min: 18.5,
    max: 24.9,
    color: '#22c55e',
    bgClass: 'bg-green-500',
    textClass: 'text-green-600 dark:text-green-400',
    bgLightClass: 'bg-green-50 dark:bg-green-950/40',
    borderClass: 'border-green-200 dark:border-green-800',
  },
  overweight: {
    id: 'overweight',
    label: 'Overweight',
    labelSomali: 'Miisaan Badan',
    min: 25,
    max: 29.9,
    color: '#f59e0b',
    bgClass: 'bg-amber-500',
    textClass: 'text-amber-600 dark:text-amber-400',
    bgLightClass: 'bg-amber-50 dark:bg-amber-950/40',
    borderClass: 'border-amber-200 dark:border-amber-800',
  },
  obese: {
    id: 'obese',
    label: 'Obese',
    labelSomali: 'Buurnaan',
    min: 30,
    max: 50,
    color: '#ef4444',
    bgClass: 'bg-red-500',
    textClass: 'text-red-600 dark:text-red-400',
    bgLightClass: 'bg-red-50 dark:bg-red-950/40',
    borderClass: 'border-red-200 dark:border-red-800',
  },
};

export const CHART_ZONES = [
  { name: 'Miisaan Yar', min: 0, max: 18.4, color: '#3b82f6' },
  { name: 'Caadi', min: 18.5, max: 24.9, color: '#22c55e' },
  { name: 'Miisaan Badan', min: 25, max: 29.9, color: '#f59e0b' },
  { name: 'Buurnaan', min: 30, max: 40, color: '#ef4444' },
];

export const HEIGHT_MIN = 100;
export const HEIGHT_MAX = 250;
export const WEIGHT_MIN = 20;
export const WEIGHT_MAX = 300;

export function calculateBmi(weightKg, heightCm) {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return Math.round(bmi * 10) / 10;
}

export function getBmiCategory(bmi) {
  if (bmi < 18.5) return BMI_CATEGORIES.underweight;
  if (bmi < 25) return BMI_CATEGORIES.normal;
  if (bmi < 30) return BMI_CATEGORIES.overweight;
  return BMI_CATEGORIES.obese;
}

export function getHealthyWeightRange(heightCm) {
  const heightM = heightCm / 100;
  const minWeight = Math.round(18.5 * heightM * heightM * 10) / 10;
  const maxWeight = Math.round(24.9 * heightM * heightM * 10) / 10;
  return { min: minWeight, max: maxWeight };
}

export function formatResultText(result, formData) {
  const { bmi, category, healthyRange } = result;
  const genderLabel = formData.gender === 'male' ? 'Lab' : 'Dhedig';
  return [
    `Xisaabiyaha BMI`,
    `─────────────`,
    `Jinsiga: ${genderLabel}`,
    `Da'da: ${formData.age} sano`,
    `Dhererka: ${formData.height} cm`,
    `Miisaanka: ${formData.weight} kg`,
    `BMI: ${bmi}`,
    `Qaybta: ${category.labelSomali} (${category.label})`,
    `Miisaanka Caafimaadka Leh: ${healthyRange.min} - ${healthyRange.max} kg`,
  ].join('\n');
}
