import { Zap, BarChart3, Code2, Terminal, ExternalLink } from 'lucide-react';
import './ProjectCard.css';
import { useState } from 'react';

interface Project {
  title: string;
  role: string;
  description: string;
  achievements: string[];
  stack: string[];
  metrics: string[];
  type: string;
  keywords: string[];
  githubFrontend?: string;
  githubBackend?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-card group">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-role">{project.role}</p>
        </div>
        <span className="project-badge">{project.type}</span>
      </div>

      <p className="project-desc">{project.description}</p>

      {/* Conteúdo expansível */}
      <div className={`project-extra ${open ? 'open' : ''}`}>
        <h4 className="project-subtitle">
          <Zap size={14} /> Conquistas
        </h4>
        <ul className="project-list">
          {project.achievements.map((ach, i) => (
            <li key={i}>
              <span className="dot" />
              {ach}
            </li>
          ))}
        </ul>

        <h4 className="project-subtitle">
          <BarChart3 size={14} /> Resultados
        </h4>
        <div className="project-metrics">
          {project.metrics.map((m, i) => (
            <span key={i} className="metric-tag">{m}</span>
          ))}
        </div>

        <div className="project-stack">
          {project.stack.map(s => (
            <span key={s} className="stack-tag">{s}</span>
          ))}
        </div>
      </div>

      {/* Toggle mobile */}
      <button className="project-toggle" onClick={() => setOpen(!open)}>
        {open ? 'Mostrar menos' : 'Mostrar mais'}
      </button>

      <div className="project-footer">
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank">
              <ExternalLink size={14} /> Ver Aplicação
            </a>
          )}
          {project.githubFrontend && (
            <a href={project.githubFrontend} target="_blank">
              <Code2 size={14} /> Frontend
            </a>
          )}
          {project.githubBackend && (
            <a href={project.githubBackend} target="_blank">
              <Terminal size={14} /> Backend
            </a>
          )}
        </div>
        <div className="project-keywords">
          {project.keywords.map(k => (
            <span key={k} className="keyword-tag">{k}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
