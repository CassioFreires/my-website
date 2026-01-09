interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }:SkillCategoryProps) {
    return (
        <div className="skill-category">
            <h3 className="text-lg font-semibold text-[var(--text-white)] mb-6 pb-3 border-b border-[var(--border-color)]">{title}</h3>
            <div className="space-y-6">
                {skills.map(skill => (
                    <div key={skill.name} className="skill-item">
                        <div className="flex justify-between mb-2">
                            <span className="text-[var(--text-white)] text-sm">{skill.name}</span>
                            <span className="text-[var(--text-primary)] text-sm font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[var(--bg-surface)] rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-primary)]/70" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}