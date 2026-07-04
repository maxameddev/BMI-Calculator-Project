import { useState } from 'react';
import { Copy, Share2, RotateCcw, Check } from 'lucide-react';
import { formatResultText } from '../utils/bmi';

export default function ActionButtons({ result, onReset }) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  if (!result) return null;

  const handleCopy = async () => {
    const text = formatResultText(result, result.formData);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const text = formatResultText(result, result.formData);

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Natiijadayda BMI',
          text,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        if (err.name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Ficillo natiijada">
      <button
        type="button"
        onClick={handleCopy}
        className="btn-secondary flex-1 sm:flex-none"
        aria-label="Nuqul natiijada"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
            La nuqulay!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" aria-hidden="true" />
            Nuqul
          </>
        )}
      </button>

      <button
        type="button"
        onClick={handleShare}
        className="btn-secondary flex-1 sm:flex-none"
        aria-label="La wadaag natiijada"
      >
        {shared ? (
          <>
            <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
            La wadaagay!
          </>
        ) : (
          <>
            <Share2 className="w-4 h-4" aria-hidden="true" />
            Wadaag
          </>
        )}
      </button>

      <button
        type="button"
        onClick={onReset}
        className="btn-secondary flex-1 sm:flex-none"
        aria-label="Dib u bilow xisaabiyaha"
      >
        <RotateCcw className="w-4 h-4" aria-hidden="true" />
        Dib u bilow
      </button>
    </div>
  );
}
