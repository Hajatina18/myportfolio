import React from "react";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader } from "./Shared";
import { useLanguage } from "../i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <SectionHeader eyebrow={e.eyebrow} title={e.title} />
        </Reveal>
        <div className="flex flex-col gap-9 max-w-3xl">
          {e.items.map((exp, i) => (
            <Reveal key={exp.role + i} delay={i * 50}>
              <div className="relative" style={{ paddingLeft: 30 }}>
                <div
                  className="absolute rounded-full"
                  style={{ left: 0, top: 4, width: 10, height: 10, border: "2px solid var(--accent)", background: "var(--bg)" }}
                />
                {i < e.items.length - 1 && (
                  <div className="absolute" style={{ left: 5, top: 6, bottom: -36, width: 1, background: "var(--border)" }} />
                )}
                <span className="mono block mb-1" style={{ fontSize: 12.5, color: "var(--text-faint)" }}>
                  {exp.period}
                </span>
                <h3 className="display" style={{ fontSize: 17.5, fontWeight: 600 }}>{exp.role}</h3>
                <p style={{ fontSize: 13.5, color: "var(--accent)", marginTop: 2, marginBottom: 12, fontWeight: 500 }}>{exp.org}</p>
                <ul className="flex flex-col gap-1.5 mb-3">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-2" style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                      <ChevronRight size={14} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 3 }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono inline-block"
                      style={{ fontSize: 11, color: "var(--text-faint)", border: "1px solid var(--border-soft)", borderRadius: 999, padding: "3px 10px", margin: "0 6px 6px 0" }}
                    >
                      {tag}
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
