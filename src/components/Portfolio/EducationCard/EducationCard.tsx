import { Layers, Server, Calendar } from 'lucide-react';

interface EducationCardProps {
    title: string;
    school: string;
    period: string;
    isCompleted?: boolean; // O ponto de interrogação torna opcional
}

export default function EducationCard({ title, school, period, isCompleted = false }: EducationCardProps) {
    return (
        <div className="education-card">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-[var(--text-primary)]/20 p-2 rounded-lg">
                    {isCompleted ? <Server size={20} className="text-[var(--text-primary)]" /> : <Layers size={20} className="text-[var(--text-primary)]" />}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-[var(--text-white)]">{title}</h3>
                    <p className="text-[var(--text-muted)]">{school}</p>
                </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] flex items-center gap-2"><Calendar size={14} /> {period} {isCompleted && '(Concluído)'}</p>
        </div>
    );
}