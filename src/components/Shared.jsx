import React from "react";

export function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="mono" style={{ color: "var(--accent)", fontSize: 12.5, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
        — {eyebrow}
      </p>
      <h2 className="display" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--text)" }}>
        {title}
      </h2>
    </div>
  );
}
