import React, { createContext, useContext, useMemo, useState } from "react";
import { CONTENT } from "./content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const browserLang = typeof navigator !== "undefined" ? navigator.language : "fr";
    return browserLang && browserLang.toLowerCase().startsWith("en") ? "en" : "fr";
  });

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === "fr" ? "en" : "fr")),
      t: CONTENT[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
