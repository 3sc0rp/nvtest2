'use client';
import { useState, useMemo } from 'react';
import SectionTitle from '@/components/SectionTitle';
import MenuFilter from '@/components/MenuFilter';
import DishCard from '@/components/DishCard';
import MENU from '@/data/menu';
import { useTranslations } from '@/components/LanguageProvider';
import { filterMenu } from '@/lib/menuIQ';

export default function MenuPage() {
  const t = useTranslations();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const [popular, setPopular] = useState(false);

  const items = useMemo(() => filterMenu(MENU, { query: q, category: cat, popular }), [q, cat, popular]);

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle overline={t('menu_overline')} title={t('menu_title')} subtitle={t('menu_subtitle')} />
        <MenuFilter q={q} setQ={setQ} cat={cat} setCat={setCat} popular={popular} setPopular={setPopular} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((dish) => (
            <DishCard key={dish.id} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
