import { useRef } from 'react';
import {
  Search,
  Calendar,
  Code,
  TestTube,
  Rocket,
  Clock,
  FileText,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import './WorkProcess.css';

function WorkProcess() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = 320;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const steps = [
    {
      id: '01',
      title: 'Entendimento',
      desc: 'Levantamento de objetivos, desafios e contexto.',
      icon: <Search size={22} />,
      duration: '1–2 semanas',
      items: ['Requisitos', 'Arquitetura', 'Cronograma'],
      color: 'var(--step-1)'
    },
    {
      id: '02',
      title: 'Planejamento',
      desc: 'Definição de roadmap, prazos e prioridades.',
      icon: <Calendar size={22} />,
      duration: '3–5 dias',
      items: ['Roadmap', 'Estimativas', 'Backlog'],
      color: 'var(--step-2)'
    },
    {
      id: '03',
      title: 'Desenvolvimento',
      desc: 'Implementação com foco em qualidade e performance.',
      icon: <Code size={22} />,
      duration: '4–12 semanas',
      items: ['Código', 'Documentação', 'Builds'],
      color: 'var(--step-3)'
    },
    {
      id: '04',
      title: 'Validação',
      desc: 'Testes e ajustes para garantir aderência.',
      icon: <TestTube size={22} />,
      duration: '1–2 semanas',
      items: ['Testes', 'Feedback', 'Checklist'],
      color: 'var(--step-4)'
    },
    {
      id: '05',
      title: 'Entrega',
      desc: 'Deploy, documentação e suporte.',
      icon: <Rocket size={22} />,
      duration: '1 semana',
      items: ['Produção', 'Treinamento', 'Suporte'],
      color: 'var(--step-5)'
    }
  ];

  return (
    <section className="process-section" id="processo">
      <header className="process-header">
        <h2 className="section-title">
          Fluxo de <span className="title-highlight">Trabalho</span>
        </h2>

        <p className="section-subtitle">
          Processo estruturado para entregar software com previsibilidade.
        </p>

        <p className="carousel-hint">
          Arraste ou use as setas para navegar
        </p>
      </header>

      <div className="carousel-wrapper">
        <button
          className="carousel-btn left"
          onClick={() => scroll('left')}
          aria-label="Voltar"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="carousel" ref={carouselRef}>
          {steps.map(step => (
            <article
              key={step.id}
              className="process-card"
              style={{ '--accent': step.color } as React.CSSProperties}
            >
              <header className="card-header">
                <div className="step-icon">{step.icon}</div>

                <div className="step-meta">
                  <span className="step-id">{step.id}</span>
                  <span className="step-duration">
                    <Clock size={12} /> {step.duration}
                  </span>
                </div>
              </header>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>

              <div className="step-deliverables">
                <span className="deliverables-title">
                  <FileText size={14} /> Entregáveis
                </span>

                <ul>
                  {step.items.map(item => (
                    <li key={item}>
                      <CheckCircle size={12} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={() => scroll('right')}
          aria-label="Avançar"
        >
          <ChevronRight size={20} />
        </button>

        <div className="carousel-gradient left" />
        <div className="carousel-gradient right" />
      </div>
    </section>
  );
}

export default WorkProcess;
