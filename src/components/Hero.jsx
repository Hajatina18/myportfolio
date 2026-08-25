import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTypewriter } from "../hooks/useTypewriter";
import profilePhoto from "../assets/profile.jpg";

export default function Hero({ onNavigate }) {
  const { t } = useLanguage();
  const typed = useTypewriter(t.roles);
  const [first, ...rest] = t.profile.name.split(" ");

  return (
    <section id="accueil" style={{ paddingTop: 68 }}>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mono" style={{ color: "var(--accent)", fontSize: 12.5, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
              — {t.hero.eyebrow}
            </p>
            <h1 className="display" style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.01em" }}>
              {first}
              <br />
              {rest.join(" ")}.
            </h1>
            <div style={{ height: 4, width: 56, background: "var(--accent)", margin: "24px 0" }} />
            <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 440 }}>
              <span style={{ color: "var(--text)", fontWeight: 500 }}>{typed}</span>
              {t.hero.introText}
            </p>
            <button
              onClick={() => onNavigate("apropos")}
              className="mono flex items-center gap-2"
              style={{ marginTop: 26, background: "none", border: "none", cursor: "pointer", color: "var(--accent)", fontSize: 13.5, fontWeight: 600 }}
            >
              {t.hero.cta} <ArrowRight size={15} />
            </button>

            <div className="flex items-center gap-4 mt-12">
              <a href={`mailto:${t.profile.email}`} aria-label="Email" style={{ color: "var(--text-muted)" }}>
                <Mail size={18} />
              </a>
              <a href={`tel:${t.profile.phoneHref}`} aria-label="Phone" style={{ color: "var(--text-muted)" }}>
                <Phone size={18} />
              </a>
              <span style={{ color: "var(--border)" }}>·</span>
              <span style={{ fontSize: 13, color: "var(--text-faint)" }}>{t.profile.location}</span>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div
              className="absolute"
              style={{ width: "88%", height: "92%", background: "var(--accent)", borderRadius: 20, top: 18, right: 4, zIndex: 0 }}
              aria-hidden="true"
            />
            <img
              src={profilePhoto}
              alt={`Portrait de ${t.profile.name}`}
              className="relative"
              style={{ width: "100%", maxWidth: 380, aspectRatio: "4/5", objectFit: "cover", borderRadius: 20, zIndex: 1, border: "1px solid var(--border-soft)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
