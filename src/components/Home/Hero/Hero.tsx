import { useState, useEffect } from 'react';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  Star,
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
  const words = ['corporativos', 'escaláveis', 'seguros', 'performáticos', 'modernos'];

  // Efeito de digitação
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

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
    status: "Disponível para novos projetos",
    email: "cassio_souza@live.com",
    phone: "5521981753423",
    linkedin: "https://www.linkedin.com/in/cassio-souza-08347a157/",
    github: "https://github.com/CassioFreires"
  };

  // Função para redirecionamento WhatsApp
  const handleWhatsAppRedirect = (e:any) => {
    if (e) e.preventDefault(); // Previne o comportamento padrão do link se necessário
    const text = "Olá Cássio! Vi seu portfólio e gostaria de conversar sobre um projeto de engenharia de software.";
    const url = `https://wa.me/${candidateData.phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            {/* Voltamos para o botão original com a função */}
            <button onClick={handleWhatsAppRedirect} className="hero-btn-primary">
              <span>Entrar em contato</span>
              <ArrowRight size={20} />
            </button>

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
        </div>

        {/* Sidebar para Desktop */}
        <div className="hero-sidebar">
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
              {/* CORREÇÃO: Voltamos para a tag <a> com a classe original e onClick */}
              <a
                href="#"
                onClick={handleWhatsAppRedirect}
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