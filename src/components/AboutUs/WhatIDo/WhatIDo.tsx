import { useRef } from 'react';
import {
  Server,
  Globe,
  Building,
  RefreshCw,
  Cloud,
  GitBranch,
  BarChart,
  Zap,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import './WhatIDo.css';

function WhatIDo() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = 320;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const services = [
    {
      title: 'Back-end & APIs',
      desc: 'Sistemas seguros, escaláveis e focados em performance.',
      icon: <Server size={22} />,
      tech: ['Node.js', 'NestJS', 'TypeScript', 'REST APIs', 'Microservices'],
      features: ['JWT', 'Rate Limiting', 'Caching', 'Swagger'],
      metrics: ['99.9% Uptime', '<100ms', 'Scalable']
    },
    {
      title: 'Aplicações Web',
      desc: 'Interfaces modernas, rápidas e responsivas.',
      icon: <Globe size={22} />,
      tech: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Vite'],
      features: ['SSR/SSG', 'SEO', 'Acessibilidade', 'PWA'],
      metrics: ['Lighthouse 90+', 'Mobile First']
    },
    {
      title: 'Sistemas Corporativos',
      desc: 'Automação e integração de processos críticos.',
      icon: <Building size={22} />,
      tech: ['PostgreSQL', 'Oracle', 'ERP', 'APIs'],
      features: ['Dashboards', 'Relatórios', 'Workflows'],
      metrics: ['+40% Eficiência']
    },
    {
      title: 'Manutenção Evolutiva',
      desc: 'Refatoração, performance e segurança.',
      icon: <RefreshCw size={22} />,
      tech: ['Clean Code', 'SOLID', 'CI/CD', 'Docker'],
      features: ['Code Review', 'Refactor', 'Auditoria'],
      metrics: ['-60% Bugs']
    },
    {
      title: 'Arquitetura Cloud',
      desc: 'Soluções escaláveis e custo-eficientes.',
      icon: <Cloud size={22} />,
      tech: ['AWS', 'GCP', 'Docker', 'K8s'],
      features: ['Auto-scale', 'CDN', 'Monitoring'],
      metrics: ['-30% Cost']
    },
    {
      title: 'Consultoria Técnica',
      desc: 'Arquitetura, revisão e mentoria.',
      icon: <Users size={22} />,
      tech: ['System Design', 'Code Review', 'Mentoria'],
      features: ['Tech Stack', 'Roadmap'],
      metrics: ['Risk Reduction']
    }
  ];

  return (
    <section className="whatido-section" id="whatido">
      <header className="whatido-header">
        <h2 className="section-title">
          O que eu <span className="title-highlight">faço</span>
        </h2>
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
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </div>

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

              <div className="card-details">
                <div className="details-block">
                  <BarChart size={14} />
                  <ul>
                    {service.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="details-block">
                  <Zap size={14} />
                  <div className="metrics-tags">
                    {service.metrics.map((m) => (
                      <span key={m} className="metric-tag">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
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

export default WhatIDo;
