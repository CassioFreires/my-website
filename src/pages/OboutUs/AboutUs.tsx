import { useState } from "react";
import "./AboutUs.css";

import AboutHero from "../../components/AboutUs/AboutHero/AboutHero";
import WhatIDo from "../../components/AboutUs/WhatIDo/WhatIDo";
import AboutHighlights from "../../components/AboutUs/AboutHighLights/AboutHighLights";
import AboutValues from "../../components/AboutUs/AboutValues/AboutValues";

function About() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Quem Sou" },
    { id: "what", label: "O Que Faço" },
    { id: "highlights", label: "Destaques" },
    { id: "values", label: "Valores" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <AboutHero />;
      case "what":
        return <WhatIDo />;
      case "highlights":
        return <AboutHighlights />;
      case "values":
        return <AboutValues />;
      default:
        return <AboutHero />;
    }
  };

  return (
    <main className="about-page">
      {/* Navegação */}
      <nav className="section-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={activeSection === section.id ? "active" : ""}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Conteúdo */}
      <div className="section-content">{renderSection()}</div>
    </main>
  );
}

export default About;
