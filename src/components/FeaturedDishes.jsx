'use client';
import SectionTitle from './SectionTitle';
import DishCard from './DishCard';
import MENU from '@/data/menu';
import { getFeaturedDishes } from '@/lib/menuIQ';
import { useTranslations } from './LanguageProvider';

export default function FeaturedDishes() {
  const t = useTranslations();
  const featured = getFeaturedDishes(MENU, 3);
  return (
    <section className="section bg-sand/30">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle overline={t('featured_overline')} title={t('featured_title')} subtitle={t('featured_subtitle')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featured.map((dish) => (
            <DishCard key={dish.id} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
