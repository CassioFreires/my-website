import { 
    Briefcase, 
    Code, 
    Database, 
    Cloud, 
    ShieldCheck, 
    ExternalLink, 
    Github,
    Award,
    Zap,
    TrendingUp,
    Users,
    Cpu,
    GitBranch,
    BarChart3,
    CheckCircle2,
    Building,
    School,
    Mail,
    MapPin,
    Calendar,
    Layers,
    Server,
    GitCommit,
    Rocket
} from 'lucide-react';
import './Portfolio.css';

function Portfolio() {
    // Dados do candidato otimizados para ATS e recrutamento
    const candidateProfile = {
        name: "Cássio L. Freires Souza",
        title: "Desenvolvedor de Software Sênior | Full Stack & Analista de Sistemas",
        location: "Rio de Janeiro – RJ",
        age: "27 anos",
        email: "cassio_souza@live.com",
        linkedin: "https://linkedin.com/in/cassio-souza",
        github: "https://github.com/CassioFreires",
        yearsExperience: "3+ anos",
        availability: "Disponível para oportunidades",
        keywordsATS: [
            "Node.js", "NestJS", "TypeScript", "React", "PostgreSQL", 
            "Google Cloud Platform", "Docker", "CI/CD", "Clean Code", "SOLID",
            "APIs RESTful", "Microservices", "System Integration", "ERP", "CRM",
            "Salesforce", "Oracle Cloud", "Performance Optimization", "Scrum", "Kanban"
        ]
    };

    // Dados estratégicos para RH/Headhunter
    const strategicValue = [
        {
            icon: <Zap size={20} />,
            title: "Impacto Imediato",
            description: "Experiência com sistemas corporativos críticos em produção. Capacidade de contribuir desde o primeiro dia."
        },
        {
            icon: <TrendingUp size={20} />,
            title: "Escalabilidade Comprovada",
            description: "Desenvolvimento de sistemas que atendem múltiplos shoppings/usuários com performance otimizada."
        },
        {
            icon: <ShieldCheck size={20} />,
            title: "Segurança & Confiabilidade",
            description: "Foco em boas práticas de segurança, código limpo e estabilidade em ambiente produtivo."
        },
        {
            icon: <Users size={20} />,
            title: "Interface Negócio-Tecnologia",
            description: "Experiência como analista de sistemas, entendendo necessidades de negócio e traduzindo para soluções técnicas."
        }
    ];

    // Experiência profissional otimizada para ATS
    const professionalExperience = [
        {
            company: "Ancar Ivanhoe Shopping Centers",
            period: "Ago 2025 – Presente",
            title: "Desenvolvedor de Software",
            achievements: [
                "Liderança técnica no desenvolvimento end-to-end do Sistema Corporativo de NPS (Node.js + React)",
                "Implementação de arquitetura serverless na GCP com Docker e pipelines CI/CD",
                "Otimização de performance e escalabilidade de aplicações em produção (+40% eficiência)",
                "Aplicação sistemática de Clean Code, SOLID e padrões de segurança em APIs RESTful"
            ],
            techStack: ["NestJS", "PostgreSQL", "React", "GCP", "Docker", "CI/CD", "Material-UI"],
            impact: "Sistema utilizado por múltiplos shoppings com métricas de observabilidade em tempo real"
        },
        {
            company: "Ancar Ivanhoe Shopping Centers",
            period: "Fev 2024 – Ago 2025",
            title: "Analista de Sistemas",
            achievements: [
                "Sustentação de sistemas críticos: Salesforce CRM, Oracle ERP, JD Edwards",
                "Integração entre Oracle Cloud ERP, JD Edwards, VS e Salesforce",
                "Monitoramento de SLAs (99.8% uptime) e otimização de queries SQL",
                "Interface entre áreas de negócio, infraestrutura e consultorias técnicas"
            ],
            techStack: ["Oracle ERP", "Salesforce", "SQL", "JD Edwards", "ITSM", "KPI Monitoring"],
            impact: "Resolução de incidentes críticos e melhoria contínua de processos empresariais"
        },
        {
            company: "Essia",
            period: "Fev 2022",
            title: "Desenvolvedor Front-End",
            achievements: [
                "Desenvolvimento de sequências didáticas digitais com foco em acessibilidade",
                "Implementação de padrões UX/UI e arquitetura frontend escalável",
                "Testes de qualidade (QA) em aplicações web educacionais"
            ],
            techStack: ["HTML5", "CSS3", "SASS", "JavaScript", "XML", "UX/UI"],
            impact: "Contribuição para plataforma educacional utilizada por milhares de estudantes"
        }
    ];

    // Projetos com métricas e resultados
    const projects = [
        {
            title: 'Sistema Corporativo de NPS',
            role: 'Desenvolvedor Full Stack & Líder Técnico',
            context: 'Sistema interno crítico para múltiplos shopping centers',
            description: 'Sistema completo de Net Promoter Score com arquitetura escalável, observabilidade em tempo real e integração com sistemas corporativos.',
            achievements: [
                'Arquitetura backend em NestJS com Clean Architecture',
                'Deploy na GCP com autoscaling e serverless functions',
                'Dashboard em React com Material-UI e visualização em tempo real',
                'Redução de 60% no tempo de processamento de dados'
            ],
            stack: ['NestJS', 'PostgreSQL', 'React', 'GCP', 'Docker', 'CI/CD'],
            metrics: ['99.9% Uptime', '2s Response Time', '10k+ Usuários'],
            type: 'Corporativo - Produção',
            keywords: ['arquitetura', 'escalabilidade', 'monitoramento', 'performance']
        },
        {
            title: 'Rede Social Full Stack',
            role: 'Desenvolvedor Full Stack',
            context: 'Projeto demonstrativo com arquitetura enterprise',
            description: 'Aplicação SPA com autenticação JWT, RBAC, APIs RESTful e arquitetura em camadas seguindo princípios SOLID.',
            achievements: [
                'Implementação de RBAC (Role-Based Access Control)',
                'Arquitetura em camadas com separação de responsabilidades',
                'Frontend otimizado com React + Vite + Tailwind',
                '100% cobertura de testes em endpoints críticos'
            ],
            stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'JWT', 'RBAC'],
            metrics: ['<100ms API Response', '100% Test Coverage', 'SSR Ready'],
            github: 'https://github.com/CassioFreires/rede-social',
            type: 'Open Source',
            keywords: ['segurança', 'arquitetura', 'boas-práticas', 'typescript']
        },
        {
            title: 'E-commerce de Móveis Full Stack',
            role: 'Desenvolvedor Full Stack',
            context: 'Simulação de e-commerce real com regras de negócio complexas',
            description: 'Plataforma completa de e-commerce desenvolvida do zero, com gestão de produtos, usuários, pedidos e autenticação segura.',
            achievements: [
                'Modelagem de banco relacional com foco em integridade',
                'APIs RESTful seguindo OpenAPI Specification',
                'Autenticação JWT com refresh tokens',
                'Frontend responsivo com React + Tailwind CSS'
            ],
            stack: ['React', 'Tailwind', 'Node.js', 'PostgreSQL', 'JWT', 'REST API'],
            metrics: ['10+ Endpoints', '5+ Entidades', '100+ Commits'],
            github: 'https://github.com/CassioFreires/ecommerce-moveis',
            type: 'Demonstração Técnica',
            keywords: ['e-commerce', 'segurança', 'modelagem', 'api-design']
        }
    ];

    // Competências organizadas por categoria (importante para ATS)
    const technicalSkills = {
        'Linguagens & Frameworks': [
            { name: 'JavaScript (ES6+)', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Node.js', level: 92 },
            { name: 'NestJS', level: 88 },
            { name: 'React', level: 85 },
            { name: 'HTML5/CSS3', level: 90 }
        ],
        'Banco de Dados & Cloud': [
            { name: 'PostgreSQL', level: 88 },
            { name: 'MySQL', level: 85 },
            { name: 'Google Cloud Platform', level: 82 },
            { name: 'Docker', level: 80 },
            { name: 'MongoDB', level: 75 }
        ],
        'Metodologias & Ferramentas': [
            { name: 'Clean Code & SOLID', level: 90 },
            { name: 'Scrum/Kanban', level: 88 },
            { name: 'Git & CI/CD', level: 92 },
            { name: 'APIs RESTful', level: 94 },
            { name: 'Testes Automatizados', level: 80 }
        ]
    };

    return (
        <main className="portfolio-container max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">
            
            {/* HEADER ESTRATÉGICO PARA RH/HEADHUNTER */}
            <section className="portfolio-hero bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-surface-muted)] border border-[var(--border-color)] rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg">
                                <Code size={24} className="text-[var(--text-primary)]" />
                            </div>
                            <span className="text-sm font-medium text-[var(--text-primary)] bg-[var(--text-primary)]/10 px-3 py-1 rounded-full">
                                {candidateProfile.yearsExperience} de experiência
                            </span>
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-white)] mb-2">
                            {candidateProfile.name}
                        </h1>
                        
                        <h2 className="text-xl md:text-2xl text-[var(--text-primary)] font-semibold mb-4">
                            {candidateProfile.title}
                        </h2>
                        
                        <div className="flex flex-wrap gap-4 mb-6 text-[var(--text-muted)]">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>{candidateProfile.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>{candidateProfile.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{candidateProfile.availability}</span>
                            </div>
                        </div>
                        
                        <p className="text-[var(--text-white)] mb-6 leading-relaxed">
                            Desenvolvedor especializado em <strong>sistemas corporativos críticos</strong> e <strong>arquiteturas escaláveis</strong>. 
                            Combino expertise técnica em <strong>Node.js/NestJS</strong> com experiência em <strong>integração de ERPs</strong> e 
                            <strong> cloud computing (GCP)</strong>. Foco em qualidade de código, performance e impacto real no negócio.
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                            <a href={candidateProfile.linkedin} target="_blank" rel="noopener noreferrer" 
                               className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                                <Users size={16} />
                                LinkedIn
                            </a>
                            <a href={candidateProfile.github} target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 border border-[var(--border-color)] text-[var(--text-white)] px-4 py-2 rounded-lg hover:bg-[var(--bg-surface-muted)] transition">
                                <Github size={16} />
                                GitHub
                            </a>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/3">
                        <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-[var(--text-white)] mb-4 flex items-center gap-2">
                                <Award size={20} />
                                Valor Estratégico
                            </h3>
                            <ul className="space-y-4">
                                {strategicValue.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="text-[var(--text-primary)] mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-[var(--text-white)] text-sm">
                                                {item.title}
                                            </h4>
                                            <p className="text-[var(--text-muted)] text-xs">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIÊNCIA PROFISSIONAL - Otimizada para ATS */}
            <section className="portfolio-experience">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg">
                        <Briefcase size={24} className="text-[var(--text-primary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-white)]">
                        Experiência Profissional
                    </h2>
                </div>
                
                <div className="space-y-8">
                    {professionalExperience.map((exp, index) => (
                        <div key={index} className="experience-card group">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Building size={18} className="text-[var(--text-primary)]" />
                                        <h3 className="text-xl font-bold text-[var(--text-white)] group-hover:text-[var(--text-primary)] transition">
                                            {exp.company}
                                        </h3>
                                    </div>
                                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                                        {exp.title}
                                    </h4>
                                    <p className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </p>
                                </div>
                                <div className="bg-[var(--bg-surface)] px-4 py-2 rounded-lg border border-[var(--border-color)]">
                                    <p className="text-sm text-[var(--text-muted)] italic">
                                        Impacto: <span className="text-[var(--text-white)]">{exp.impact}</span>
                                    </p>
                                </div>
                            </div>
                            
                            <ul className="space-y-3 mb-6">
                                {exp.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={16} className="text-[var(--text-primary)] mt-1 flex-shrink-0" />
                                        <span className="text-[var(--text-muted)]">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex flex-wrap gap-2">
                                {exp.techStack.map((tech) => (
                                    <span key={tech} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJETOS COM RESULTADOS MENSURÁVEIS */}
            <section className="portfolio-projects">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg">
                        <Rocket size={24} className="text-[var(--text-primary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-white)]">
                        Projetos de Destaque
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card group">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-white)] group-hover:text-[var(--text-primary)] transition mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-muted)]">{project.role}</p>
                                </div>
                                <span className="project-badge">{project.type}</span>
                            </div>
                            
                            <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-[var(--text-white)] mb-3 flex items-center gap-2">
                                    <Zap size={16} />
                                    Principais Conquistas
                                </h4>
                                <ul className="space-y-2">
                                    {project.achievements.map((achievement, idx) => (
                                        <li key={idx} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-[var(--text-primary)] mt-2 flex-shrink-0"></div>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-[var(--text-white)] mb-3 flex items-center gap-2">
                                    <BarChart3 size={16} />
                                    Métricas & Resultados
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.metrics.map((metric, idx) => (
                                        <span key={idx} className="metric-tag">
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="stack-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex justify-between items-center pt-4 border-t border-[var(--border-color)]">
                                <div className="flex flex-wrap gap-2">
                                    {project.keywords.map((keyword) => (
                                        <span key={keyword} className="keyword-tag">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                       className="inline-flex items-center gap-2 text-[var(--text-primary)] hover:opacity-80 transition">
                                        <Github size={16} />
                                        Ver código
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* COMPETÊNCIAS TÉCNICAS VISUAIS */}
            <section className="portfolio-skills">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg">
                        <Cpu size={24} className="text-[var(--text-primary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-white)]">
                        Competências Técnicas
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(technicalSkills).map(([category, skills]) => (
                        <div key={category} className="skill-category">
                            <h3 className="text-lg font-semibold text-[var(--text-white)] mb-6 pb-3 border-b border-[var(--border-color)]">
                                {category}
                            </h3>
                            <div className="space-y-6">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="skill-item">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-[var(--text-white)] text-sm">{skill.name}</span>
                                            <span className="text-[var(--text-primary)] text-sm font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-[var(--bg-surface)] rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-primary)]/70 rounded-full"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FORMAÇÃO E CERTIFICAÇÕES */}
            <section className="portfolio-education">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg">
                        <School size={24} className="text-[var(--text-primary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-white)]">
                        Formação Acadêmica
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="education-card">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-[var(--text-primary)]/20 p-2 rounded-lg">
                                <Layers size={20} className="text-[var(--text-primary)]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[var(--text-white)]">
                                    Pós-graduação em Engenharia de Software
                                </h3>
                                <p className="text-[var(--text-muted)]">Descomplica</p>
                            </div>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                            <Calendar size={14} />
                            2025 – 2026 (em andamento)
                        </p>
                    </div>
                    
                    <div className="education-card">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-[var(--text-primary)]/20 p-2 rounded-lg">
                                <Server size={20} className="text-[var(--text-primary)]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[var(--text-white)]">
                                    Tecnólogo em Análise e Desenvolvimento de Sistemas
                                </h3>
                                <p className="text-[var(--text-muted)]">Estácio</p>
                            </div>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                            <Calendar size={14} />
                            2021 – 2023 (Concluído)
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA FINAL OTIMIZADO */}
            <section className="portfolio-cta bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-surface-muted)] border border-[var(--border-color)] rounded-2xl p-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-[var(--text-primary)]/10 text-[var(--text-primary)] px-4 py-2 rounded-full mb-6">
                        <GitCommit size={16} />
                        <span className="text-sm font-medium">Pronto para o próximo desafio</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[var(--text-white)] mb-4">
                        Vamos construir algo incrível juntos?
                    </h3>
                    
                    <p className="text-[var(--text-muted)] mb-8">
                        Estou disponível para oportunidades que desafiem minhas habilidades técnicas 
                        e permitam contribuir com projetos de alto impacto. Especializado em sistemas 
                        corporativos, arquiteturas escaláveis e desenvolvimento full stack.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`mailto:${candidateProfile.email}`}
                           className="inline-flex items-center justify-center gap-2 bg-[var(--text-primary)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-medium">
                            <Mail size={18} />
                            Enviar proposta por e-mail
                        </a>
                        <a href={candidateProfile.linkedin} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-white)] px-6 py-3 rounded-lg hover:bg-[var(--bg-surface-muted)] transition font-medium">
                            <Users size={18} />
                            Conectar no LinkedIn
                        </a>
                    </div>
                    
                    <p className="text-sm text-[var(--text-muted)] mt-6">
                        Resposta garantida em até 24h. Disponível para entrevistas presenciais no Rio ou remotas.
                    </p>
                </div>
            </section>

            {/* KEYWORDS PARA ATS (hidden para usuários, visível para sistemas) */}
            <div className="hidden">
                {candidateProfile.keywordsATS.join(', ')}
                {professionalExperience.map(exp => exp.techStack.join(', ')).join(', ')}
                {projects.map(project => project.stack.join(', ')).join(', ')}
            </div>

        </main>
    );
}

export default Portfolio;