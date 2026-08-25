import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import SpecialtyCards from "./components/SpecialtyCards";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useLanguage } from "./i18n/LanguageContext";

const SECTION_IDS = ["accueil", "apropos", "competences", "experience", "projets", "contact"];

export default function App() {
  const active = useScrollSpy(SECTION_IDS);
  const { t } = useLanguage();

  const navigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav active={active} onNavigate={navigate} />
      <Hero onNavigate={navigate} />
      <Highlights onNavigate={navigate} />
      <SpecialtyCards />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer style={{ borderTop: "1px solid var(--border-soft)" }}>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <span className="mono" style={{ fontSize: 12, color: "var(--text-faint)" }}>{t.footer.copyright}</span>
          <span className="mono" style={{ fontSize: 12, color: "var(--text-faint)" }}>{t.footer.location}</span>
        </div>
      </footer>
    </div>
  );
}
