import SectionTitle from '@/components/SectionTitle';
import { useTranslations } from '@/components/LanguageProvider';

export default function VisitPage() {
  const t = useTranslations();
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
        <div>
          <SectionTitle overline={t('visit_overline')} title={t('visit_title')} subtitle={t('visit_subtitle')} />
          <div className="mt-6 space-y-2">
            <p><strong>{t('hours')}:</strong> Mon–Sun 11:00 AM – 10:00 PM</p>
            <p><strong>{t('phone')}:</strong> <a href="tel:+15551234567" className="underline">+1 (555) 123‑4567</a></p>
            <p><strong>{t('address')}:</strong> 123 Kurdish Village Rd, City, ST</p>
            <a className="btn btn-primary mt-4" href="https://wa.me/15551234567?text=Hello%20Nature%20Village!%20I'd%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer">{t('whatsapp_cta')}</a>
          </div>
        </div>
        <div className="card">
          <iframe
            title="Nature Village Location"
            src="https://www.google.com/maps?q=Nature%20Village%20Restaurant&output=embed"
            className="w-full h-[360px] md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
