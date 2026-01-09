import {
    Briefcase, ShieldCheck, Zap, TrendingUp,
    Users, Cpu, School, Rocket
} from 'lucide-react';
import Hero from '../../components/Portfolio/Hero/Hero';
import ExperienceCard from '../../components/Portfolio/ExperienceCard/ExperienceCard';
import ProjectCard from '../../components/Portfolio/ProjectCard/ProjectCard';
import SkillCategory from '../../components/Portfolio/SkillCategory/SkillCategory';
import ContactCTA from '../../components/Portfolio/ContactCTA/ContactCTA';
import EducationCard from '../../components/Portfolio/EducationCard/EducationCard';
import './Portfolio.css';

function Portfolio() {
    const candidateProfile = {
        name: "Cássio L. Freires Souza",
        title: "Desenvolvedor de Software Sênior | Full Stack & Analista de Sistemas",
        location: "Rio de Janeiro – RJ",
        email: "cassio_souza@live.com",
        linkedin: "https://www.linkedin.com/in/cassio-souza-08347a157/",
        github: "https://github.com/CassioFreires?tab=repositories",
        yearsExperience: "3+ anos",
        availability: "Disponível para oportunidades",
        keywordsATS: ["Node.js", "NestJS", "TypeScript", "React", "PostgreSQL", "GCP", "Docker", "CI/CD", "Clean Code", "SOLID", "APIs RESTful", "Microservices", "Salesforce", "Oracle Cloud"]
    };

    const strategicValue = [
        { icon: <Zap size={20} />, title: "Impacto Imediato", description: "Experiência com sistemas corporativos críticos em produção." },
        { icon: <TrendingUp size={20} />, title: "Escalabilidade Comprovada", description: "Sistemas que atendem múltiplos shoppings/usuários." },
        { icon: <ShieldCheck size={20} />, title: "Segurança & Confiabilidade", description: "Foco em boas práticas de segurança e código limpo." },
        { icon: <Users size={20} />, title: "Interface Negócio-Tecnologia", description: "Tradução de necessidades de negócio para soluções técnicas." }
    ];

    const professionalExperience = [
        {
            company: "Ancar Ivanhoe Shopping Centers",
            period: "Ago 2025 – Presente",
            title: "Desenvolvedor de Software",
            achievements: [
                "Desenvolvimento de sistemas críticos (AFA e NPS) com NestJS, PostgreSQL e React (MUI)",
                "Liderança técnica end-to-end do Sistema de NPS multi-shopping: da arquitetura ao deploy",
                "Implementação de CI/CD com Bitbucket Pipelines e containerização Docker em GCP Serverless",
                "Otimização de performance e segurança focada em escalabilidade e experiência do usuário"
            ],
            techStack: ["NestJS", "React", "TypeScript", "PostgreSQL", "GCP", "Docker", "MUI", "Bitbucket Pipelines"],
            impact: "Automação e alta disponibilidade para obrigações fiscais e métricas de satisfação em tempo real"
        },
        {
            company: "Ancar Ivanhoe Shopping Centers",
            period: "Fev 2024 – Ago 2025",
            title: "Analista de Sistemas",
            achievements: [
                "Sustentação e integração de ecossistemas complexos: Salesforce CRM, Oracle ERP e JD Edwards",
                "Interface técnica entre áreas de negócio e consultorias para otimização de processos de faturamento",
                "Gestão de KPIs operacionais e SLAs via ferramentas de ITSM",
                "Automação de processos internos e implantação de sistema de controle de licenças"
            ],
            techStack: ["Salesforce", "Oracle ERP", "JD Edwards", "SQL", "ITSM", "Otimização de Queries"],
            impact: "Continuidade de negócios e redução de gargalos em processos críticos de ERP/CRM"
        },
        {
            company: "Essia",
            period: "Fev 2022",
            title: "Desenvolvedor Front-end (Estágio)",
            achievements: [
                "Desenvolvimento de estruturas didáticas digitais utilizando Vanilla JS, SASS e XML",
                "Auxílio na definição da arquitetura de código para conteúdos educacionais escaláveis",
                "Execução de testes de qualidade (QA) para garantir fidelidade de layout e acessibilidade"
            ],
            techStack: ["JavaScript Vanilla", "SASS", "CSS3", "HTML5", "XML"],
            impact: "Padronização e qualidade técnica em projetos de larga escala para educação"
        },
        {
            company: "Easycob",
            period: "Jun 2021",
            title: "Service Desk (Estágio)",
            achievements: [
                "Suporte N1/N2 em infraestrutura de redes, switches, roteadores e configuração de VPN",
                "Manutenção e configuração de sistemas de telefonia digital (VOIP) e hardware",
                "Suporte à virtualização de máquinas e servidores em ambiente corporativo"
            ],
            techStack: ["Redes", "VPN", "VOIP", "Virtualização", "Hardware", "ITSM"],
            impact: "Estabilidade da infraestrutura de TI e suporte ágil aos usuários internos"
        }
    ];

    const projects = [
        {
            title: 'Sistema Corporativo de NPS',
            role: 'Desenvolvedor Full Stack',
            description: 'Sistema completo de NPS com arquitetura escalável e GCP.',
            achievements: [
                'Backend NestJS Clean Architecture',
                'Deploy GCP Serverless (Cloud Run/Docker)',
                'Redução de 60% no tempo de processamento'
            ],
            stack: ['NestJS', 'PostgreSQL', 'React', 'GCP'],
            metrics: ['99.9% Uptime', '10k+ Usuários'],
            type: 'Corporativo',
            keywords: ['arquitetura', 'escalabilidade', 'serverless'],
            githubFrontend: 'https://npshom.ancar.com.br/ban', // Exemplo
            githubBackend: 'https://github.com/CassioFreires/nps-backend',     // Exemplo
            liveUrl: 'https://npshom.ancar.com.br/ban' // <--- Link da produção aqui
        },
        {
            title: 'E-commerce de Móveis Full Stack',
            role: 'Desenvolvedor Full Stack',
            description: 'Plataforma completa de vendas com foco em regras de negócio complexas, segurança e escalabilidade.',
            achievements: [
                'Controle de acesso baseado em papéis (RBAC)',
                'Integração de Webhooks para automação de pedidos',
                'Modelagem de banco de dados para alta consistência'
            ],
            stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
            metrics: ['Arquitetura SPA', 'Mobile Responsive', 'Segurança JWT'],
            type: 'E-commerce',
            keywords: ['segurança', 'vendas', 'api-restful'],
            githubFrontend: 'https://github.com/CassioFreires/spa-rm-moveis',
            githubBackend: 'https://github.com/CassioFreires/api-rm-moveis',
        },
        {
            title: 'Sistema de Delivery Full Stack',
            role: 'Desenvolvedor Full Stack',
            description: 'Aplicação de delivery completa simulando ambiente corporativo, com fluxo dinâmico de pedidos.',
            achievements: [
                'Carrinho de compras dinâmico e gestão de perfil',
                'Backend estruturado em camadas com TypeScript',
                'Implementação de testes automatizados e migrations'
            ],
            stack: ['React.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
            metrics: ['Fluxo End-to-End', 'Clean Code', 'Layered Architecture'],
            type: 'Delivery App',
            keywords: ['typescript', 'ux-design', 'hamburgueria'],
            githubFrontend: 'https://github.com/CassioFreires/spa-react-hamburgueria',
            githubBackend: 'https://github.com/CassioFreires/api-burger',
        },
        {
            title: 'Rede Social Full Stack',
            role: 'Desenvolvedor Full Stack',
            description: 'SPA com autenticação JWT e princípios SOLID, focada em boas práticas de engenharia.',
            achievements: [
                'Implementação RBAC (Controle de Acesso)',
                '100% de cobertura de testes em endpoints críticos',
                'Frontend otimizado com React + Vite'
            ],
            stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
            metrics: ['<100ms API Response', 'SOLID Principles'],
            type: 'Open Source',
            keywords: ['segurança', 'typescript', 'testes'],
            githubFrontend: 'https://github.com/CassioFreires/spa-blog-app',
            githubBackend: 'https://github.com/CassioFreires/api-blog',
        }
    ];
    const technicalSkills = {
        'Linguagens & Frameworks': [
            { name: 'Node.js', level: 92 },
            { name: 'NestJS', level: 88 },
            { name: 'TypeScript', level: 90 }, // Essencial para seu stack
            { name: 'React', level: 85 },
            { name: 'Tailwind', level: 80 },
            { name: 'MUI (Material UI)', level: 85 } // Você mencionou usar no Sistema AFA
        ],
        'Banco de Dados & Cloud': [
            { name: 'PostgreSQL', level: 88 },
            { name: 'Google Cloud (GCP)', level: 82 },
            { name: 'Docker', level: 80 },
            { name: 'Oracle SQL', level: 85 }, // Pela experiência na Ancar com ERP
            { name: 'Serverless', level: 75 } // Cloud Run / Functions mencionadas
        ],
        'Metodologias & Ferramentas': [
            { name: 'Git & CI/CD', level: 92 },
            { name: 'APIs RESTful', level: 94 },
            { name: 'Salesforce & Oracle ERP', level: 85 }, // Valoriza sua visão corporativa
            { name: 'Clean Architecture & SOLID', level: 90 }, // Citado nos seus projetos
            { name: 'Scrum/Kanban', level: 88 }
        ]
    };

    return (
        <main className="portfolio-container max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">
            <Hero profile={candidateProfile} strategicValue={strategicValue} />

            <section className="portfolio-experience">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg"><Briefcase size={24} className="text-[var(--text-primary)]" /></div>
                    <h2 className="text-2xl font-bold text-[var(--text-white)]">Experiência Profissional</h2>
                </div>
                <div className="space-y-8">
                    {professionalExperience.map((exp, i) => <ExperienceCard key={i} exp={exp} />)}
                </div>
            </section>

            <section className="portfolio-projects">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg"><Rocket size={24} className="text-[var(--text-primary)]" /></div>
                    <h2 className="text-2xl font-bold text-[var(--text-white)]">Projetos de Destaque</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((proj, i) => <ProjectCard key={i} project={proj} />)}
                </div>
            </section>

            <section className="portfolio-skills">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg"><Cpu size={24} className="text-[var(--text-primary)]" /></div>
                    <h2 className="text-2xl font-bold text-[var(--text-white)]">Competências Técnicas</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(technicalSkills).map(([cat, skills]) => <SkillCategory key={cat} title={cat} skills={skills} />)}
                </div>
            </section>

            <section className="portfolio-education">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg"><School size={24} className="text-[var(--text-primary)]" /></div>
                    <h2 className="text-2xl font-bold text-[var(--text-white)]">Formação Acadêmica</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <EducationCard title="Pós-graduação em Engenharia de Software" school="Descomplica" period="2025 – 2026" />
                    <EducationCard title="Análise e Desenvolvimento de Sistemas" school="Estácio" period="2021 – 2023" isCompleted />
                </div>
            </section>

            <ContactCTA profile={candidateProfile} />

            <div className="hidden">
                {candidateProfile.keywordsATS.join(', ')}
            </div>
        </main>
    );
}

export default Portfolio;