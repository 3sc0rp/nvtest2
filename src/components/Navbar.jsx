'use client';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import { useTranslations } from './LanguageProvider';

export default function Navbar() {
  const t = useTranslations();
  return (
    <header className="bg-olive text-white sticky top-0 z-50 shadow">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl">Nature Village</Link>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:opacity-90">{t('nav_home')}</Link>
          <Link href="/menu" className="hover:opacity-90">{t('nav_menu')}</Link>
          <Link href="/about" className="hover:opacity-90">{t('nav_about')}</Link>
          <Link href="/gallery" className="hover:opacity-90">{t('nav_gallery')}</Link>
          <Link href="/visit" className="hover:opacity-90">{t('nav_visit')}</Link>
        </div>
        <div className="flex items-center gap-3">
          <a href="/menu" className="btn btn-secondary hidden sm:inline-flex">{t('cta_order')}</a>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
