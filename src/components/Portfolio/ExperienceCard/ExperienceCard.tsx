import { Building, Calendar, CheckCircle2 } from 'lucide-react';
import './ExperienceCard.css'

interface Experience {
    company: string;
    period: string;
    title: string;
    achievements: string[];
    techStack: string[];
    impact: string;
}

interface ExperienceCardProps {
    exp: Experience;
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
    return (
        <div className="experience-card group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Building size={18} className="text-[var(--text-primary)]" />
                        <h3 className="text-xl font-bold text-[var(--text-white)] group-hover:text-[var(--text-primary)] transition">{exp.company}</h3>
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{exp.title}</h4>
                    <p className="text-sm text-[var(--text-muted)] flex items-center gap-2"><Calendar size={14} /> {exp.period}</p>
                </div>
                <div className="bg-[var(--bg-surface)] px-4 py-2 rounded-lg border border-[var(--border-color)]">
                    <p className="text-sm text-[var(--text-muted)] italic">Impacto: <span className="text-[var(--text-white)]">{exp.impact}</span></p>
                </div>
            </div>
            <ul className="space-y-3 mb-6">
                {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[var(--text-primary)] mt-1 flex-shrink-0" />
                        <span className="text-[var(--text-muted)]">{ach}</span>
                    </li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-2">
                {exp.techStack.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
            </div>
        </div>
    );
}