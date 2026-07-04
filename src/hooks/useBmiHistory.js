import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const HISTORY_KEY = 'bmi-calculator-history';
const MAX_HISTORY = 50;

export function useBmiHistory() {
  const [history, setHistory] = useLocalStorage(HISTORY_KEY, []);

  const addEntry = useCallback(
    (entry) => {
      const newEntry = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        ...entry,
      };

      setHistory((prev) => [newEntry, ...prev].slice(0, MAX_HISTORY));
      return newEntry;
    },
    [setHistory]
  );

  const deleteEntry = useCallback(
    (id) => {
      setHistory((prev) => prev.filter((item) => item.id !== id));
    },
    [setHistory]
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, [setHistory]);

  return { history, addEntry, deleteEntry, clearHistory };
}
