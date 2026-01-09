import { Briefcase, Code2, Target, Users } from 'lucide-react';
import './AboutHighLights.css';

const items = [
  { icon: <Briefcase />, title: 'Experiência Corporativa', text: 'Sistemas críticos e ambientes complexos.' },
  { icon: <Code2 />, title: 'Desenvolvimento Moderno', text: 'Boas práticas e tecnologias atuais.' },
  { icon: <Target />, title: 'Visão de Negócio', text: 'Soluções orientadas a resultado.' },
  { icon: <Users />, title: 'Parceria', text: 'Comunicação clara e contínua.' }
];

function AboutHighlights() {
  return (
    <section className="highlights-section">
      {items.map(item => (
        <article key={item.title} className="highlight-card">
          {item.icon}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

export default AboutHighlights;
