import { useTranslations } from './LanguageProvider';

export default function Hero() {
  const t = useTranslations();
  return (
    <section className="relative h-[72vh] min-h-[420px] w-full grid place-items-center text-center text-white">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-3xl mx-auto px-4">
        <div className="mb-4 text-sm tracking-widest uppercase text-sand">{t('overline_tradition')}</div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight">{t('hero_title')}</h1>
        <p className="mt-4 opacity-95">{t('hero_sub')}</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/menu" className="btn btn-primary">{t('cta_view_menu')}</a>
          <a href="/visit" className="btn btn-secondary">{t('cta_visit_us')}</a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-3 nv-rug-border" />
    </section>
  );
}
