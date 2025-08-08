import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import SectionTitle from '@/components/SectionTitle';
import { useTranslations } from '@/components/LanguageProvider';

export default function HomePage() {
  const t = useTranslations();
  return (
    <>
      <Hero />

      <section className="section">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle overline={t('overline_tradition')} title={t('intro_title')} subtitle={t('intro_body')} />
          <div className="mt-8 flex gap-4">
            <a href="/menu" className="btn btn-primary">{t('cta_view_menu')}</a>
            <a href="/visit" className="btn btn-secondary">{t('cta_visit_us')}</a>
          </div>
        </div>
      </section>

      <FeaturedDishes />
    </>
  );
}
