import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeader } from "./Shared";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section id="contact" style={{ borderTop: "1px solid var(--border-soft)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        </Reveal>
        <div className="grid md:grid-cols-5 gap-14">
          <Reveal className="md:col-span-3">
            <h3 className="display" style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.3, maxWidth: 460 }}>
              {c.heading}
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, marginTop: 14, maxWidth: 440 }}>{c.desc}</p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-2">
            <a
              href={`mailto:${t.profile.email}`}
              className="flex items-center gap-3"
              style={{ padding: "15px 0", borderBottom: "1px solid var(--border-soft)", color: "var(--text)", textDecoration: "none" }}
            >
              <Mail size={16} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: 14 }}>{t.profile.email}</span>
            </a>
            <a
              href={`tel:${t.profile.phoneHref}`}
              className="flex items-center gap-3"
              style={{ padding: "15px 0", borderBottom: "1px solid var(--border-soft)", color: "var(--text)", textDecoration: "none" }}
            >
              <Phone size={16} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: 14 }}>{t.profile.phone}</span>
            </a>
            <div className="flex items-center gap-3" style={{ padding: "15px 0", borderBottom: "1px solid var(--border-soft)" }}>
              <MapPin size={16} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: 14 }}>{t.profile.location}</span>
            </div>
            <a
              href={`mailto:${t.profile.email}`}
              className="mono inline-flex items-center gap-2"
              style={{
                marginTop: 24,
                fontSize: 13,
                fontWeight: 600,
                background: "var(--accent)",
                color: "var(--accent-ink)",
                border: "1px solid var(--accent)",
                borderRadius: 999,
                padding: "12px 22px",
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              {c.cta} <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
