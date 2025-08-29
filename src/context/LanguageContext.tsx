"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import es from "@/locales/es.json";
import en from "@/locales/en.json";

type Lang = "es" | "en";
const translations = { es, en };

interface LangContextType {
  lang: Lang;
  t: typeof es;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de LangProvider");
  return ctx;
};
