import SectionTitle from '@/components/SectionTitle';
import { useTranslations } from '@/components/LanguageProvider';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionTitle overline={t('about_overline')} title={t('about_title')} subtitle={t('about_body')} />
        </div>
        <div className="card overflow-hidden">
          <img src="/images/interior1.jpg" alt="Nature Village interior" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
