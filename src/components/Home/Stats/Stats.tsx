import { 
  Briefcase, 
  Code, 
  Users, 
  Award,
  TrendingUp,
  Shield,
  Rocket,
  Star,
  GitBranch,
  Layers
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './Stats.css';

function Stats() {
    const [countedValues, setCountedValues] = useState([0, 0, 0, 0, 0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);
    
    const stats = [
        { 
            icon: <Briefcase size={24} />, 
            label: 'Projetos entregues', 
            value: 25,
            suffix: '+',
            description: 'Sistemas corporativos e aplicações web',
            color: 'var(--stat-1)'
        },
        { 
            icon: <Code size={24} />, 
            label: 'Linhas de código', 
            value: 150,
            suffix: 'k+',
            description: 'Código limpo e bem documentado',
            color: 'var(--stat-2)'
        },
        { 
            icon: <Users size={24} />, 
            label: 'Clientes satisfeitos', 
            value: 15,
            suffix: '+',
            description: 'Empresas de diferentes segmentos',
            color: 'var(--stat-3)'
        },
        { 
            icon: <Award size={24} />, 
            label: 'Anos de experiência', 
            value: 3,
            suffix: '+',
            description: 'Foco em tecnologias modernas',
            color: 'var(--stat-4)'
        },
        { 
            icon: <Shield size={24} />, 
            label: 'Uptime em produção', 
            value: 99.9,
            suffix: '%',
            description: 'Sistemas estáveis e confiáveis',
            color: 'var(--stat-5)'
        },
        { 
            icon: <TrendingUp size={24} />, 
            label: 'Performance otimizada', 
            value: 40,
            suffix: '%+',
            description: 'Melhoria média em projetos',
            color: 'var(--stat-6)'
        },
    ];

    // Observador de interseção para animação
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Animação de contagem
    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 segundos
        const steps = 60; // 60 frames
        const interval = duration / steps;

        let currentStep = 0;
        const counters = stats.map(stat => ({
            target: stat.value,
            current: 0,
            increment: stat.value / steps
        }));

        const counterInterval = setInterval(() => {
            currentStep++;
            
            const newValues = counters.map(counter => {
                if (currentStep >= steps) return counter.target;
                return Math.min(counter.current + counter.increment, counter.target);
            });

            setCountedValues(newValues.map(v => Math.floor(v)));

            if (currentStep >= steps) {
                clearInterval(counterInterval);
            }
        }, interval);

        return () => clearInterval(counterInterval);
    }, [isVisible]);

    return (
        <section className="stats-section" id="numeros" aria-labelledby="stats-title" ref={statsRef}>
            {/* Background Elements */}
            <div className="stats-background">
                <div className="stats-glow-1"></div>
                <div className="stats-glow-2"></div>
                <div className="stats-particles"></div>
            </div>

            <div className="stats-container">
                {/* Header */}
                <header className="stats-header">
                    <div className="header-badge">
                        <Layers size={18} />
                        <span>Métricas reais</span>
                    </div>
                    
                    <h2 id="stats-title" className="section-title">
                        Números que <span className="title-highlight">contam</span> minha história
                    </h2>
                    
                    <p className="section-description">
                        Resultados concretos e conquistas que demonstram meu comprometimento, 
                        experiência e impacto real nos projetos em que atuo.
                    </p>
                </header>

                {/* Stats Grid */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="stat-card"
                            style={{ '--stat-color': stat.color } as React.CSSProperties}
                            data-index={index}
                        >
                            {/* Card Background Effect */}
                            <div className="card-glow"></div>
                            
                            {/* Icon */}
                            <div 
                                className="stat-icon-wrapper"
                                style={{ backgroundColor: `${stat.color}20` }}
                            >
                                {stat.icon}
                            </div>
                            
                            {/* Value with Counter */}
                            <div className="stat-value-wrapper">
                                <span className="stat-value">
                                    {stat.value === 99.9 ? stat.value : countedValues[index]}
                                </span>
                                <span className="stat-suffix">{stat.suffix}</span>
                            </div>
                            
                            {/* Label */}
                            <h3 className="stat-label">{stat.label}</h3>
                            
                            {/* Description */}
                            <p className="stat-description">{stat.description}</p>
                            
                            {/* Progress Bar */}
                            <div className="stat-progress">
                                <div 
                                    className="progress-bar"
                                    style={{ 
                                        width: isVisible ? '100%' : '0%',
                                        backgroundColor: stat.color
                                    }}
                                ></div>
                            </div>
                            
                            {/* Decorative Element */}
                            <div className="stat-decoration">
                                <div className="decoration-dot" style={{ backgroundColor: stat.color }}></div>
                                <div className="decoration-dot" style={{ backgroundColor: stat.color }}></div>
                                <div className="decoration-dot" style={{ backgroundColor: stat.color }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="stats-info">
                    <div className="info-card">
                        <div className="info-icon">
                            <Rocket size={20} />
                        </div>
                        <div className="info-content">
                            <h4 className="info-title">Entrega consistente</h4>
                            <p className="info-text">
                                100% dos projetos entregues dentro ou antes do prazo estimado
                            </p>
                        </div>
                    </div>
                    
                    <div className="info-card">
                        <div className="info-icon">
                            <Star size={20} />
                        </div>
                        <div className="info-content">
                            <h4 className="info-title">Qualidade garantida</h4>
                            <p className="info-text">
                                Todos os projetos seguem padrões de código limpo e boas práticas
                            </p>
                        </div>
                    </div>
                    
                    <div className="info-card">
                        <div className="info-icon">
                            <GitBranch size={20} />
                        </div>
                        <div className="info-content">
                            <h4 className="info-title">Tecnologias atualizadas</h4>
                            <p className="info-text">
                                Stack tecnológica sempre alinhada com as melhores práticas do mercado
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;