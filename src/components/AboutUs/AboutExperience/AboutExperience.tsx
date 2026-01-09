import { Award } from 'lucide-react';
import './AboutExperience.css';

function AboutExperience() {
  return (
    <section className="experience-section">
      <header className="experience-header">
        <Award size={18} />
        <h2>Experiência</h2>
      </header>

      <ul className="experience-list">
        <li>
          <strong>Ancar Ivanhoe</strong>
          <span>Desenvolvedor de Software</span>
          <small>2025 — Presente</small>
        </li>

        <li>
          <strong>Ancar Ivanhoe</strong>
          <span>Analista de Sistemas</span>
          <small>2024 — 2025</small>
        </li>
      </ul>
    </section>
  );
}

export default AboutExperience;
