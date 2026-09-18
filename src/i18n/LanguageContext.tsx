import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SupportedLanguage,
  LanguageOption,
  SUPPORTED_LANGUAGES,
  DICTIONARY,
} from './translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, defaultText?: string) => string;
  currentLanguageOption: LanguageOption;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'as_services_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
      // Check browser language
      const navLang = navigator.language.toLowerCase();
      if (navLang.startsWith('zh')) return 'zh';
      if (navLang.startsWith('fr')) return 'fr';
      if (navLang.startsWith('ru')) return 'ru';
      if (navLang.startsWith('es')) return 'es';
      if (navLang.startsWith('ar')) return 'ar';
    } catch {
      // LocalStorage or navigator might be restricted
    }
    return 'en';
  });

  const setLanguage = (newLang: SupportedLanguage) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const option = SUPPORTED_LANGUAGES.find((l) => l.code === language);
    if (option?.dir) {
      document.documentElement.setAttribute('dir', option.dir);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string, defaultText?: string): string => {
    const entry = DICTIONARY[key];
    if (!entry) {
      return defaultText || key;
    }
    return entry[language] || entry.en || defaultText || key;
  };

  const currentLanguageOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentLanguageOption,
        languages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
