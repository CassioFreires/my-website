import { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  Code, 
  Zap, 
  Shield, 
  TrendingUp,
  Sparkles,
  Star,
  Award,
  Github,
  Linkedin,
  Mail,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Palavras para efeito de digitação
  const words = ['corporativas', 'escaláveis', 'seguras', 'performáticas', 'modernas'];
  
  // Efeito de digitação - CORREÇÃO APLICADA AQUI
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    
    if (typedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
    }
    
    return () => clearTimeout(timeout);
  }, [typedText, currentWordIndex]);

  // Dados do candidato
  const candidateData = {
    name: "Cássio L. Freires Souza",
    title: "Desenvolvedor Full Stack & Analista de Sistemas",
    experience: "3+ anos",
    location: "Rio de Janeiro",
    status: "Disponível para novas oportunidades",
    email: "cassio_souza@live.com",
    linkedin: "https://linkedin.com/in/cassio-souza",
    github: "https://github.com/CassioFreires"
  };

  // Métricas de destaque
  const metrics = [
    { value: "3+", label: "Anos de experiência", icon: <TrendingUp size={16} /> },
    { value: "10+", label: "Projetos concluídos", icon: <Code size={16} /> },
    { value: "99.9%", label: "Uptime em produção", icon: <Shield size={16} /> },
    { value: "40%+", label: "Otimização performance", icon: <Zap size={16} /> }
  ];

  // Tecnologias em destaque
  const featuredTech = [
    { name: "Node.js/NestJS", color: "var(--tech-node)" },
    { name: "React", color: "var(--tech-react)" },
    { name: "PostgreSQL", color: "var(--tech-postgres)" },
    { name: "Google Cloud", color: "var(--tech-gcp)" }
  ];

  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">
        
        {/* Conteúdo Principal */}
        <div className="hero-content">
          
          {/* Badge de Status */}
          <div className="hero-status">
            <div className="status-pulse"></div>
            <span className="status-text">{candidateData.status}</span>
            <Sparkles size={14} className="status-sparkle" />
          </div>

          {/* Título Principal */}
          <div className="hero-header">
            <h1 className="hero-title">
              Desenvolvedor 
              <span className="title-highlight"> Full Stack</span>
              <br />
              especializado em sistemas 
              <br />
              <span className="typing-text">
                {typedText}
                <span className="typing-cursor">|</span>
              </span>
            </h1>
            
            <p className="hero-subtitle">
              Arquitetura, desenvolvimento e evolução de software 
              orientado a negócio com tecnologias modernas.
              <br />
              Experiência em <strong>sistemas corporativos críticos</strong> e 
              <strong> integração de ERPs</strong>.
            </p>
          </div>

          {/* Call to Action Principal */}
          <div className="hero-actions">
            <Link to="/contato" className="hero-btn-primary">
              <span>Entrar em contato</span>
              <ArrowRight size={20} />
            </Link>
            
            <Link to="/portfolio" className="hero-btn-secondary">
              <span>Ver portfólio</span>
              <ChevronRight size={20} />
            </Link>
            
            <div className="hero-quick-links">
              <a 
                href={candidateData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="quick-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={candidateData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="quick-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${candidateData.email}`}
                className="quick-link"
                aria-label="Enviar email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Métricas de Destaque */}
          <div className="hero-metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-icon">{metric.icon}</div>
                <div className="metric-content">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tecnologias em Destaque */}
          <div className="hero-tech">
            <div className="tech-header">
              <Code size={18} />
              <span>Tecnologias principais</span>
            </div>
            <div className="tech-tags">
              {featuredTech.map((tech, index) => (
                <span 
                  key={index} 
                  className="tech-tag"
                  style={{ '--tech-color': tech.color } as React.CSSProperties}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar para Desktop (Experiência & Certificações) */}
        <div className="hero-sidebar">
          
          {/* Card de Experiência */}
          <div className="sidebar-card">
            <div className="card-header">
              <Award size={20} />
              <h3>Experiência</h3>
            </div>
            <div className="card-content">
              <div className="experience-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h4>Ancar Ivanhoe</h4>
                  <p className="exp-role">Desenvolvedor de Software</p>
                  <p className="exp-period">2025 - Presente</p>
                </div>
              </div>
              <div className="experience-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h4>Ancar Ivanhoe</h4>
                  <p className="exp-role">Analista de Sistemas</p>
                  <p className="exp-period">2024 - 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Agendamento */}
          <div className="sidebar-card highlight">
            <div className="card-header">
              <Calendar size={20} />
              <h3>Agendar Entrevista</h3>
            </div>
            <div className="card-content">
              <p className="card-description">
                Disponível para entrevistas técnicas e discussão de projetos.
              </p>
              <a 
                href="https://calendly.com/cassio-souza/entrevista" 
                target="_blank" 
                rel="noopener noreferrer"
                className="schedule-btn"
              >
                Agendar agora
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Badge de Reconhecimento */}
          <div className="recognition-badge">
            <Star size={16} />
            <span>Especialista em sistemas corporativos</span>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll para explorar</span>
      </div>

    </section>
  );
}

export default Hero;