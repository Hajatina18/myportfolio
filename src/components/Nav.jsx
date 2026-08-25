import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const SECTION_IDS = ["accueil", "apropos", "competences", "experience", "projets", "contact"];

export default function Nav({ active, onNavigate }) {
  const [open, setOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  const handleClick = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  const LangSwitch = ({ className = "" }) => (
    <button
      onClick={toggleLang}
      className={className}
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        background: "var(--bg-panel-2)",
        border: "1px solid var(--border)",
        borderRadius: 999,
        padding: 3,
        cursor: "pointer",
      }}
    >
      <span
        style={{
          padding: "5px 11px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "var(--mono)",
          background: lang === "fr" ? "var(--accent)" : "transparent",
          color: lang === "fr" ? "var(--accent-ink)" : "var(--text-muted)",
          transition: "all 0.2s ease",
        }}
      >
        FR
      </span>
      <span
        style={{
          padding: "5px 11px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "var(--mono)",
          background: lang === "en" ? "var(--accent)" : "transparent",
          color: lang === "en" ? "var(--accent-ink)" : "var(--text-muted)",
          transition: "all 0.2s ease",
        }}
      >
        EN
      </span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(20,21,27,0.88)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border-soft)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: 68 }}>
        <button
          onClick={() => handleClick("accueil")}
          className="flex items-center justify-center"
          style={{ width: 34, height: 34, background: "var(--accent)", borderRadius: 9, border: "none", cursor: "pointer" }}
          aria-label={t.nav.accueil}
        >
          <span className="display" style={{ fontWeight: 800, fontSize: 15, color: "var(--accent-ink)" }}>H</span>
        </button>

        <div className="hidden md:flex items-center gap-9">
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="relative"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                color: active === id ? "var(--text)" : "var(--text-muted)",
                padding: "6px 0",
              }}
            >
              {t.nav[id]}
              {active === id && (
                <span
                  className="absolute left-1/2"
                  style={{ bottom: -2, transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "var(--accent)" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangSwitch className="hidden md:flex" />
          <button
            className="md:hidden"
            style={{ color: "var(--text)", background: "none", border: "none" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-5 gap-1" style={{ borderTop: "1px solid var(--border-soft)" }}>
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="text-left"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "12px 0",
                fontSize: 15,
                color: active === id ? "var(--accent)" : "var(--text-muted)",
              }}
            >
              {t.nav[id]}
            </button>
          ))}
          <div style={{ paddingTop: 10, marginTop: 6, borderTop: "1px solid var(--border-soft)" }}>
            <LangSwitch />
          </div>
        </div>
      )}
    </nav>
  );
}
