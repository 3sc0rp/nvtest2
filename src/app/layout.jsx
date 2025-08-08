import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageProvider from '@/components/LanguageProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const merri = Merriweather({ subsets: ['latin'], weight: ['400','700'], variable: '--font-serif' });

export const metadata = {
  title: 'Nature Village — Kurdish Restaurant',
  description: 'A Taste of Kurdistan in Every Bite. Authentic Kurdish cuisine in a warm, earthy ambiance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merri.variable} font-sans bg-stone-50 text-stone-900`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
