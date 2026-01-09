import './AboutHero.css';

function AboutHero() {
  return (
    <section className="about-hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">Engenheiro de Software & Cloud</span>
        <h1>Transformando dados em <span className="text-gradient">sistemas de alto impacto.</span></h1>
        
        <p>
          Especialista em ecossistemas <strong>Full Stack</strong>, foco minha atuação no desenvolvimento de sistemas críticos utilizando <strong>NestJS, React e Cloud (GCP)</strong>. 
          Da arquitetura à automação com Docker e CI/CD, entrego soluções escaláveis que alinham tecnologia e estratégia de negócio.
        </p>

        <div className="hero-tech-stack">
          <span>NestJS</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>PostgreSQL</span>
          <span>GCP</span>
          <span>Docker</span>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;