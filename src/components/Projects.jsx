import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader } from "./Shared";
import { useLanguage } from "../i18n/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projets">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <SectionHeader eyebrow={p.eyebrow} title={p.title} />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {p.items.map((proj, i) => (
            <Reveal key={proj.name} delay={i * 50}>
              <div
                className="h-full flex flex-col transition-transform"
                style={{ border: "1px solid var(--border-soft)", background: "var(--bg-panel)", borderRadius: 14, padding: 22 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="display" style={{ fontSize: 16.5, fontWeight: 600 }}>{proj.name}</h3>
                </div>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65, flex: 1 }}>{proj.desc}</p>
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--border-soft)" }}>
                  {proj.tech.map((t2) => (
                    <span
                      key={t2}
                      className="inline-block"
                      style={{ fontSize: 11, color: "var(--text-faint)", border: "1px solid var(--border-soft)", borderRadius: 999, padding: "3px 10px", margin: "0 6px 6px 0" }}
                    >
                      {t2}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
