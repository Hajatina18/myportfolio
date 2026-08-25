import React from "react";
import { GraduationCap, Users } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader } from "./Shared";
import { useLanguage } from "../i18n/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const ed = t.education;

  return (
    <section id="formation">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <SectionHeader eyebrow={ed.eyebrow} title={ed.title} />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-14">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={16} style={{ color: "var(--accent)" }} />
              <span className="mono" style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{ed.degreesLabel}</span>
            </div>
            <div className="flex flex-col gap-6">
              {ed.items.map((e) => (
                <div key={e.title} style={{ borderLeft: "2px solid var(--border)", paddingLeft: 16 }}>
                  <span className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>{e.period}</span>
                  <h4 style={{ fontSize: 15, fontWeight: 600, marginTop: 3 }}>{e.title}</h4>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>
                    {e.org}
                    {e.note ? ` — ${e.note}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-2 mb-6">
              <Users size={16} style={{ color: "var(--accent)" }} />
              <span className="mono" style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{ed.activitiesLabel}</span>
            </div>
            <div className="flex flex-col gap-4">
              {ed.activities.map((a) => (
                <div key={a.title} style={{ background: "var(--bg-panel)", border: "1px solid var(--border-soft)", borderRadius: 12, padding: "15px 18px" }}>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <h4 style={{ fontSize: 14, fontWeight: 600 }}>{a.title}</h4>
                    <span className="mono" style={{ fontSize: 11, color: "var(--text-faint)" }}>{a.period}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6, lineHeight: 1.55 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
