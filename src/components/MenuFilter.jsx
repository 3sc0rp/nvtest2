'use client';
import { useTranslations } from './LanguageProvider';

const CATS = [
  { id: 'all', label: 'All' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'most', label: 'Most Popular' }
];

export default function MenuFilter({ q, setQ, cat, setCat, popular, setPopular }) {
  const t = useTranslations();
  return (
    <div className="mt-6 grid md:grid-cols-4 gap-4 items-center">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t('search_placeholder')}
        className="md:col-span-2 w-full rounded-xl border border-olive/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive"
      />

      <select
        value={cat}
        onChange={(e) => setCat(e.target.value)}
        className="rounded-xl border border-olive/30 px-4 py-3"
      >
        {CATS.map(c => (
          <option key={c.id} value={c.id}>{t(`cat_${c.id}`)}</option>
        ))}
      </select>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={popular}
          onChange={(e) => setPopular(e.target.checked)}
        />
        {t('only_popular')}
      </label>
    </div>
  );
}
