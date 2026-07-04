import { useState, useCallback } from 'react';
import {
  calculateBmi,
  getBmiCategory,
  getHealthyWeightRange,
} from '../utils/bmi';
import { validateForm } from '../utils/validation';
import { getAdviceForCategory } from '../data/somaliContent';

const INITIAL_FORM = {
  gender: '',
  age: '',
  height: '170',
  weight: '70',
};

export function useBmiCalculator() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const calculate = useCallback(() => {
    const validation = validateForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return null;
    }

    const height = Number(formData.height);
    const weight = Number(formData.weight);
    const bmi = calculateBmi(weight, height);
    const category = getBmiCategory(bmi);
    const healthyRange = getHealthyWeightRange(height);
    const advice = getAdviceForCategory(category.id);

    const calculatedResult = {
      bmi,
      category,
      healthyRange,
      advice,
      formData: { ...formData },
    };

    setResult(calculatedResult);
    setHasCalculated(true);
    setErrors({});
    return calculatedResult;
  }, [formData]);

  const reset = useCallback(() => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setResult(null);
    setHasCalculated(false);
  }, []);

  const loadFromHistory = useCallback((entry) => {
    setFormData({
      gender: entry.gender,
      age: String(entry.age),
      height: String(entry.height),
      weight: String(entry.weight),
    });
    setResult({
      bmi: entry.bmi,
      category: entry.category,
      healthyRange: entry.healthyRange,
      advice: getAdviceForCategory(entry.category.id),
      formData: {
        gender: entry.gender,
        age: entry.age,
        height: entry.height,
        weight: entry.weight,
      },
    });
    setHasCalculated(true);
    setErrors({});
  }, []);

  return {
    formData,
    errors,
    result,
    hasCalculated,
    updateField,
    calculate,
    reset,
    loadFromHistory,
  };
}
