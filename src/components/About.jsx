import React from "react";
import Reveal from "./Reveal";
import { SectionHeader } from "./Shared";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="apropos" style={{ borderTop: "1px solid var(--border-soft)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <SectionHeader eyebrow={a.eyebrow} title={a.title} />
        </Reveal>
        <div className="grid md:grid-cols-5 gap-14">
          <Reveal className="md:col-span-3">
            <p style={{ fontSize: 17, lineHeight: 1.85 }}>
              {a.p1a} <strong style={{ color: "var(--accent)" }}>{a.p1b}</strong>
              {a.p1c}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-muted)", marginTop: 18 }}>{a.p2}</p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-2">
            <div style={{ background: "var(--bg-panel)", border: "1px solid var(--border-soft)", padding: "20px 22px" }}>
              <table style={{ width: "100%", fontSize: 13.5 }}>
                <tbody>
                  {a.facts.map((f, i) => (
                    <tr key={f.k} style={i > 0 ? { borderTop: "1px solid var(--border-soft)" } : undefined}>
                      <td style={{ padding: "10px 0", color: "var(--text-muted)" }}>{f.k}</td>
                      <td style={{ textAlign: "right", color: "var(--text)", fontWeight: 500 }}>{f.v}</td>
                    </tr>
                  ))}
                  <tr style={{ borderTop: "1px solid var(--border-soft)" }}>
                    <td style={{ padding: "10px 0", color: "var(--text-muted)" }}>{a.availability.k}</td>
                    <td style={{ textAlign: "right", color: "var(--accent)", fontWeight: 600 }}>{a.availability.v}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
