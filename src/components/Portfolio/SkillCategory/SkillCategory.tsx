import './SkillCategory.css';
import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill-category reveal">
      <h3 className="skill-title">{title}</h3>

      <div className="skill-list">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-item"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="skill-head">
              <div className="skill-icon">
                {skill.icon || <Sparkles size={14} />}
              </div>
              <span>{skill.name}</span>
            </div>

            <div className="skill-bar">
              <div className="skill-fill" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
