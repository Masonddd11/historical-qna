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
  setLanguage: React.Dispatch<React.SetStateAction<AppLocale>>;
}>({
  language: initialLanguage,
  setLanguage: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<AppLocale>(initialLanguage);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as AppLocale;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
