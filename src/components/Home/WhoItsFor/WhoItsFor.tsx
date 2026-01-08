import {
  Building,
  Users,
  Target,
  ArrowRight,
  Rocket
} from 'lucide-react';
import './WhoItsFor.css';

function WhoItsFor() {
  const targetAudiences = [
    {
      title: 'Empresas & Startups',
      description: 'Que precisam desenvolver sistemas internos ou produtos digitais do zero.',
      icon: <Building size={24} />,
      painPoints: [
        'Falta de expertise técnica interna',
        'Processos manuais ineficientes',
        'Sistemas legados que não escalam'
      ],
      solutions: [
        'Desenvolvimento completo do produto',
        'Arquitetura escalável desde o início',
        'Metodologias ágeis para entrega rápida'
      ],
      metrics: ['MVP em 4–8 semanas', '-60% custos operacionais', 'Escalabilidade garantida'],
      color: 'var(--audience-1)'
    },
    {
      title: 'Equipes de Produto',
      description: 'Que necessitam de suporte técnico especializado para evoluir seus sistemas.',
      icon: <Users size={24} />,
      painPoints: [
        'Dívida técnica acumulada',
        'Performance abaixo do esperado',
        'Falta de especialistas'
      ],
      solutions: [
        'Refatoração e otimização',
        'Boas práticas de engenharia',
        'Mentoria técnica'
      ],
      metrics: ['+40% performance', '-50% bugs', 'Código documentado'],
      color: 'var(--audience-2)'
    },
    {
      title: 'Empresas Estabelecidas',
      description: 'Que buscam modernizar sistemas legados ou integrar novas tecnologias.',
      icon: <Target size={24} />,
      painPoints: [
        'Sistemas difíceis de manter',
        'Falta de integração',
        'Processos lentos'
      ],
      solutions: [
        'Modernização gradual',
        'Integração via APIs',
        'Automação de processos'
      ],
      metrics: ['Modernização em fases', 'Integrações seguras', 'ROI em 6–12 meses'],
      color: 'var(--audience-3)'
    }
  ];

  const caseStudies = [
    {
      company: 'Empresa de Retail',
      challenge: 'Gestão de inventário ineficiente',
      solution: 'Sistema integrado ao ERP',
      results: '70% menos tempo e +25% precisão',
      timeline: '3 meses'
    },
    {
      company: 'Startup SaaS',
      challenge: 'Baixa performance',
      solution: 'Refatoração backend',
      results: '80% menos latência',
      timeline: '2 meses'
    },
    {
      company: 'Corporação Financeira',
      challenge: 'Relatórios manuais',
      solution: 'Dashboards automatizados',
      results: '40h semanais economizadas',
      timeline: '4 meses'
    }
  ];

  return (
    <section className="who-section" id="paraquem" aria-labelledby="who-title">
      <div className="who-container">
        <header className="who-header">
          <div className="header-badge">
            <Target size={16} />
            <span>Público-alvo</span>
          </div>

          <h2 id="who-title" className="section-title">
            Para quem é <span className="title-highlight">ideal</span>
          </h2>

          <p className="section-subtitle">
            Soluções técnicas para empresas que buscam eficiência,
            escala e qualidade de software.
          </p>
        </header>

        <div className="audiences-grid">
          {targetAudiences.map(audience => (
            <article
              key={audience.title}
              className="audience-card"
              style={{ '--audience-color': audience.color } as React.CSSProperties}
            >
              <div className="audience-header">
                <div className="audience-icon">{audience.icon}</div>
                <div>
                  <h3 className="audience-title">{audience.title}</h3>
                  <p className="audience-description">{audience.description}</p>
                </div>
              </div>

              <ul className="audience-list">
                {audience.painPoints.map(item => (
                  <li key={item} className="list-item negative">{item}</li>
                ))}
              </ul>

              <ul className="audience-list">
                {audience.solutions.map(item => (
                  <li key={item} className="list-item positive">{item}</li>
                ))}
              </ul>

              <div className="metrics-grid">
                {audience.metrics.map(metric => (
                  <span key={metric} className="metric-tag">{metric}</span>
                ))}
              </div>

              <a href="/contato" className="audience-cta">
                Discutir projeto <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="section-divider">
          <Rocket size={18} />
        </div>

        <div className="case-studies-grid">
          {caseStudies.map(study => (
            <article key={study.company} className="case-study-card">
              <header className="case-study-header">
                <span>{study.company}</span>
                <span>{study.timeline}</span>
              </header>

              <p><strong>Desafio:</strong> {study.challenge}</p>
              <p><strong>Solução:</strong> {study.solution}</p>
              <p className="results-text">{study.results}</p>
            </article>
          ))}
        </div>

        <div className="who-cta">
          <h3>Seu projeto se encaixa aqui?</h3>
          <p>Vamos conversar e definir a melhor solução técnica.</p>

          <div className="cta-actions">
            <a href="/contato" className="cta-button-primary">
              Iniciar conversa <ArrowRight size={18} />
            </a>
            <a href="/portfolio" className="cta-button-secondary">
              Ver portfólio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoItsFor;
