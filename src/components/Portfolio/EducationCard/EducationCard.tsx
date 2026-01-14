import { Layers, Server, Calendar, CheckCircle2 } from 'lucide-react';
import './EducationCard.css'

interface EducationCardProps {
  title: string;
  school: string;
  period: string;
  isCompleted?: boolean;
}

export default function EducationCard({
  title,
  school,
  period,
  isCompleted = false,
}: EducationCardProps) {
  return (
    <div className={`education-card ${isCompleted ? 'completed' : 'progress'}`}>
      <div className="education-header">
        <div className="education-icon">
          {isCompleted ? <Server size={20} /> : <Layers size={20} />}
        </div>

        <div className="education-main">
          <h3>{title}</h3>
          <p>{school}</p>
        </div>

        <span className="education-status">
          {isCompleted ? (
            <>
              <CheckCircle2 size={14} /> Concluído
            </>
          ) : (
            'Em andamento'
          )}
        </span>
      </div>

      <div className="education-footer">
        <Calendar size={14} />
        <span>{period}</span>
      </div>
    </div>
  );
}
