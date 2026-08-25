import React from "react";
import Reveal from "./Reveal";
import { SectionHeader } from "./Shared";
import { useLanguage } from "../i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section
      id="competences"
      style={{ background: "var(--bg-panel)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <SectionHeader eyebrow={s.eyebrow} title={s.title} />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4">
          {s.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 50}>
              <div style={{ background: "var(--bg-panel-2)", border: "1px solid var(--border-soft)", borderRadius: 12, padding: "20px 22px" }}>
                <span style={{ fontSize: 12.5, color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                  {group.label}
                </span>
                <div style={{ marginTop: 12 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block"
                      style={{
                        fontSize: 12.5,
                        color: "var(--text)",
                        border: "1px solid var(--border)",
                        borderRadius: 999,
                        padding: "5px 12px",
                        margin: "0 6px 6px 0",
                        background: "var(--bg-panel)",
                      }}
                    >
                      {item}
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
