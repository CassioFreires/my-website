import {
  Server,
  Globe,
  Building,
  RefreshCw,
  Cloud,
  Code,
  GitBranch,
  BarChart,
  Zap,
  Users
} from 'lucide-react';

import './WhatIDo.css';

function WhatIDo() {
  const services = [
    {
      title: 'Back-end & APIs',
      desc: 'Sistemas seguros, escaláveis e bem arquitetados, focados em performance e proteção de dados.',
      icon: <Server size={24} />,
      tech: ['Node.js', 'NestJS', 'TypeScript', 'REST APIs', 'Microservices'],
      features: ['Autenticação JWT', 'Rate Limiting', 'Caching', 'Documentação Swagger'],
      metrics: ['99.9% Uptime', '<100ms Response', 'Horizontal Scaling']
    },
    {
      title: 'Aplicações Web',
      desc: 'Interfaces modernas, responsivas e funcionais, construídas com as melhores tecnologias do mercado.',
      icon: <Globe size={24} />,
      tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
      features: ['SSR/SSG', 'PWA', 'Acessibilidade', 'Otimização SEO'],
      metrics: ['100% Mobile', 'Lighthouse 90+', 'Core Web Vitals']
    },
    {
      title: 'Sistemas Corporativos',
      desc: 'Automação de processos complexos, dashboards gerenciais e integração com ERPs/CRMs.',
      icon: <Building size={24} />,
      tech: ['PostgreSQL', 'Oracle', 'ERP Integration', 'Workflow'],
      features: ['Dashboards', 'Relatórios', 'Automação', 'Integração API'],
      metrics: ['+40% Efficiency', 'Real-time Data', 'Multi-tenant']
    },
    {
      title: 'Manutenção Evolutiva',
      desc: 'Correção de bugs, refatoração de código, performance tuning e melhoria contínua.',
      icon: <RefreshCw size={24} />,
      tech: ['Clean Code', 'SOLID', 'TDD', 'CI/CD', 'Docker'],
      features: ['Code Review', 'Refactoring', 'Performance Audit', 'Security Patch'],
      metrics: ['-60% Bugs', '+50% Speed', 'Tech Debt Reduction']
    },
    {
      title: 'Arquitetura Cloud',
      desc: 'Design e implementação de soluções escaláveis na nuvem com foco em custo e performance.',
      icon: <Cloud size={24} />,
      tech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless'],
      features: ['Auto-scaling', 'Load Balancing', 'CDN', 'Monitoring'],
      metrics: ['-30% Costs', 'Auto-recovery', 'Global Deployment']
    },
    {
      title: 'Consultoria Técnica',
      desc: 'Análise de sistemas existentes, definição de arquitetura e mentoria para equipes técnicas.',
      icon: <Users size={24} />,
      tech: ['System Design', 'Code Review', 'Best Practices', 'Team Training'],
      features: ['Architecture Review', 'Tech Stack', 'Process Optimization'],
      metrics: ['Risk Assessment', 'Roadmap Planning', 'Team Enablement']
    }
  ];

  return (
    <section
      className="whatido-section"
      id="whatido"
      aria-labelledby="whatido-title"
    >
      <div className="whatido-container">
        {/* Header */}
        <header className="whatido-header">
          <div className="header-content">
            <h2 id="whatido-title" className="section-title">
              O que eu <span className="title-highlight">faço</span>
            </h2>

            <p className="section-subtitle">
              Desenvolvimento completo de software com foco em qualidade,
              performance e impacto real no negócio. Especialista em sistemas
              corporativos críticos e arquiteturas escaláveis.
            </p>
          </div>
        </header>

        {/* Serviços */}
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card"
              aria-label={`Serviço: ${service.title}`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {/* Header Card */}
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>

                <div className="service-header-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </div>

              {/* Tecnologias */}
              <div className="card-tech">
                <div className="tech-label">
                  <GitBranch size={14} />
                  <span>Tecnologias</span>
                </div>

                <div className="tech-tags">
                  {service.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recursos */}
              <div className="card-features">
                <div className="features-label">
                  <BarChart size={14} />
                  <span>Recursos</span>
                </div>

                <ul className="features-list">
                  {service.features.map((feature) => (
                    <li key={feature} className="feature-item">
                      <span className="feature-dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Métricas */}
              <div className="card-metrics">
                <div className="metrics-label">
                  <Zap size={14} />
                  <span>Métricas</span>
                </div>

                <div className="metrics-tags">
                  {service.metrics.map((metric) => (
                    <span key={metric} className="metric-tag">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover */}
              <div className="card-hover-indicator">
                <span className="hover-line" />
                <span className="hover-text">Saiba mais</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
