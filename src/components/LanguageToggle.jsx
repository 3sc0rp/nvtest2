'use client';
import { useLang } from './LanguageProvider';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ku' : 'en')}
      className="px-3 py-1 rounded-lg border border-white/30 hover:bg-white/10"
      aria-label="Toggle language"
    >
      {lang.toUpperCase()}
    </button>
  );
}
