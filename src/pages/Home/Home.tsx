import Hero from "../../components/Home/Hero/Hero";
import WhoItsFor from "../../components/Home/WhoItsFor/WhoItsFor";
import WorkProcess from "../../components/Home/WorkProcess/WorkProcess";
import CallToAction from "../../components/Home/CallToAction/CallToAction";
import FAQ from "../../components/Home/FAQ/FAQ";
import './Home.css';
import { useState } from "react";

export function Home() {
    // Estado que controla a seção ativa
    const [activeSection, setActiveSection] = useState("hero");
    const sections = [
        { id: "hero", label: "Início" },
        { id: "who", label: "Para Quem" },
        { id: "process", label: "Processo" },
        { id: "cta", label: "Contato" },
        { id: "faq", label: "FAQ" }
    ];

    const renderSection = () => {
        switch (activeSection) {
            case "hero":
                return <Hero />;
            case "who":
                return <WhoItsFor />;
            case "process":
                return <WorkProcess />;
            case "cta":
                return <CallToAction />;
            case "faq":
                return <FAQ />;
            default:
                return <Hero />;
        }
    };
    return (
        <main className="home-page">
            {/* Menu de navegação entre seções */}
            <nav className="section-nav">
                {sections.map(section => (
                    <button
                        key={section.id}
                        className={activeSection === section.id ? "active" : ""}
                        onClick={() => setActiveSection(section.id)}
                    >
                        {section.label}
                    </button>
                ))}
            </nav>

            {/* Seção ativa */}
            <div className="section-content">
                {renderSection()}
            </div>
        </main>
    );
}