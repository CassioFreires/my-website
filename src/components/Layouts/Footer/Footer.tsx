import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  FileText,
  ExternalLink,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const candidate = {
    name: "Cássio L. Freires Souza",
    role: "Desenvolvedor Full Stack & Analista de Sistemas",
    location: "Rio de Janeiro – RJ",
    email: "cassio_souza@live.com",
    linkedin: "https://linkedin.com/in/cassio-souza",
    github: "https://github.com/CassioFreires",
    resume: "/CASSIO_SOUZA_CV.pdf"
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2>{candidate.name}</h2>
            <p>{candidate.role}</p>

            <div className="footer-meta">
              <span>
                <MapPin size={14} />
                {candidate.location}
              </span>
              <a href={`mailto:${candidate.email}`}>
                <Mail size={14} />
                {candidate.email}
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <h3>Navegação</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/portfolio">Portfólio</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </nav>

          <div className="footer-actions">
            <h3>Contato rápido</h3>

            <a
              href={candidate.resume}
              download
              className="btn-primary"
            >
              <FileText size={16} />
              Baixar CV
            </a>

            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin size={16} />
              LinkedIn
              <ExternalLink size={12} />
            </a>

            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={16} />
              GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {candidate.name}
          </span>

          <span className="footer-made">
            Desenvolvido com <Heart size={14} /> por {candidate.name}
          </span>
        </div>

        {/* Hidden ATS */}
        <div className="footer-hidden">
          Desenvolvedor Full Stack, Analista de Sistemas, Node.js, NestJS,
          TypeScript, React, PostgreSQL, Docker, CI/CD, APIs RESTful,
          Arquitetura de Software, Sistemas Corporativos, Oracle Cloud,
          Integrações ERP, Rio de Janeiro.
        </div>
      </div>
    </footer>
  );
}
