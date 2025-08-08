import { useTranslations } from './LanguageProvider';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="mt-20 bg-brown text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <h3 className="font-serif text-xl mb-2">Nature Village</h3>
          <p className="opacity-90">{t('footer_tagline')}</p>
        </div>
        <div className="space-y-2">
          <p><a className="underline" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></p>
          <p><a className="underline" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></p>
          <p><a className="underline" href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></p>
        </div>
        <div className="text-sm opacity-90">
          <p>
            {t('powered_by')} <a href="#" className="underline">Blunari</a> — MenuIQ
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Nature Village. {t('all_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
