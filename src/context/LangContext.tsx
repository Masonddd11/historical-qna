"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type AppLocale = "en" | "zh";

const initialLanguage: AppLocale = "en";

const LangContext = createContext<{
  language: AppLocale;
  setLanguage: (lang: AppLocale) => void;
}>({
  language: initialLanguage,
  setLanguage: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<AppLocale>(initialLanguage);

  const setLocalLocale = (lang: AppLocale) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as AppLocale;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  return (
    <LangContext.Provider value={{ language, setLanguage: setLocalLocale }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
