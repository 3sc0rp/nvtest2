'use client';
import { createContext, useContext, useState, useMemo } from 'react';
import COPY from '@/data/text';

const LangContext = createContext();

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // 'en' | 'ku'
  const t = (key) => (COPY[lang] && COPY[lang][key]) || COPY.en[key] || key;
  const value = useMemo(() => ({ lang, setLang, t }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
export const useTranslations = () => useContext(LangContext).t;
