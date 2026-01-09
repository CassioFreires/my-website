import { Zap, BarChart3, Code2, Terminal, ExternalLink } from 'lucide-react';

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
    liveUrl?: string; // Novo campo para aplicação em produção
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="project-card group">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-[var(--text-white)] group-hover:text-[var(--text-primary)] transition mb-1">
                        {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">{project.role}</p>
                </div>
                <span className="project-badge">{project.type}</span>
            </div>

            <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{project.description}</p>

            <div className="mb-6">
                <h4 className="text-sm font-semibold text-[var(--text-white)] mb-3 flex items-center gap-2">
                    <Zap size={16} /> Conquistas
                </h4>
                <ul className="space-y-2">
                    {project.achievements.map((ach, i) => (
                        <li key={i} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-[var(--text-primary)] mt-2 flex-shrink-0"></div>
                            {ach}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h4 className="text-sm font-semibold text-[var(--text-white)] mb-3 flex items-center gap-2">
                    <BarChart3 size={16} /> Resultados
                </h4>
                <div className="flex flex-wrap gap-2">
                    {project.metrics.map((m, i) => <span key={i} className="metric-tag">{m}</span>)}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t border-[var(--border-color)]">
                {/* Links de Código e Produção */}
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition">
                            <ExternalLink size={14} /> Ver Aplicação
                        </a>
                    )}
                    {project.githubFrontend && (
                        <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] hover:opacity-80 transition">
                            <Code2 size={14} /> Frontend
                        </a>
                    )}
                    {project.githubBackend && (
                        <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] hover:opacity-80 transition">
                            <Terminal size={14} /> Backend
                        </a>
                    )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {project.keywords.map(k => <span key={k} className="keyword-tag">{k}</span>)}
                </div>
            </div>
        </div>
    );
}