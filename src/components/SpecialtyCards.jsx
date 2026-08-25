import React from "react";
import { Server, Layout, Database } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS = [Server, Layout, Database];

export default function SpecialtyCards() {
  const { t } = useLanguage();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {t.specialtyCards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={c.title} delay={i * 60}>
                <div
                  className="p-6"
                  style={{
                    background: c.featured ? "var(--accent)" : "var(--bg-panel-2)",
                    borderRadius: 14,
                    border: c.featured ? "none" : "1px solid var(--border-soft)",
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-8"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: c.featured ? "rgba(28,21,8,0.15)" : "var(--bg-panel)",
                    }}
                  >
                    <Icon size={19} style={{ color: c.featured ? "var(--accent-ink)" : "var(--accent)" }} />
                  </div>
                  <p className="display" style={{ fontSize: 17, fontWeight: 600, color: c.featured ? "var(--accent-ink)" : "var(--text)", lineHeight: 1.3 }}>
                    {c.title}
                  </p>
                  <p style={{ fontSize: 12.5, marginTop: 6, color: c.featured ? "rgba(28,21,8,0.7)" : "var(--text-muted)" }}>
                    {c.tag}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
