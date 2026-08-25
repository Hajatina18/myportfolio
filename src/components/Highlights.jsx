import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Highlights({ onNavigate }) {
  const { t } = useLanguage();
  const h = t.highlights;

  return (
    <section style={{ background: "var(--bg-panel)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14">
          <Reveal>
            <p className="mono" style={{ color: "var(--accent)", fontSize: 12.5, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
              — {h.eyebrow}
            </p>
            <h3 className="display" style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.35, maxWidth: 380 }}>
              {h.title}
            </h3>
            <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 14, maxWidth: 380 }}>
              {h.desc}
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="mono flex items-center gap-2"
              style={{ marginTop: 20, background: "none", border: "none", cursor: "pointer", color: "var(--accent)", fontSize: 13.5, fontWeight: 600 }}
            >
              {t.profile.email} <ArrowRight size={14} />
            </button>
          </Reveal>

          <Reveal delay={100}>
            <p className="display" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.5, color: "var(--text)" }}>
              {h.quote}
            </p>
            <div className="flex gap-14 mt-10">
              <div>
                <div className="display" style={{ fontSize: 40, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                  {t.profile.yearsExperience}+
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6, whiteSpace: "pre-line" }}>{h.statYears}</div>
              </div>
              <div>
                <div className="display" style={{ fontSize: 40, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                  {t.profile.projectsShipped}+
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6, whiteSpace: "pre-line" }}>{h.statProjects}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
