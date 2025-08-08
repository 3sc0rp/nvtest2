import SectionTitle from '@/components/SectionTitle';
import GalleryGrid from '@/components/GalleryGrid';
import GALLERY from '@/data/gallery';
import { useTranslations } from '@/components/LanguageProvider';

export default function GalleryPage() {
  const t = useTranslations();
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle overline={t('gallery_overline')} title={t('gallery_title')} subtitle={t('gallery_subtitle')} />
        <GalleryGrid images={GALLERY} />
      </div>
    </section>
  );
}
