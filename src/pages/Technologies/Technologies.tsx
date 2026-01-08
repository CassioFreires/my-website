import {
    Code,
    Layout,
    Database,
    Cloud,
    Shield,
    GitBranch,
    Cpu,
} from 'lucide-react';
import './Technologies.css';

function Technologies() {
    const techGroups = [
        {
            title: 'Frontend',
            icon: <Layout />,
            emoji: '🎨',
            techs: [
                'React',
                'Tailwind CSS',
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'UX/UI'
            ]
        },
        {
            title: 'Backend',
            icon: <Code />,
            emoji: '⚙️',
            techs: [
                'Node.js',
                'NestJS',
                'APIs REST',
                'Autenticação JWT',
                'Arquitetura em Camadas'
            ]
        },
        {
            title: 'Banco de Dados',
            icon: <Database />,
            emoji: '🗄️',
            techs: [
                'PostgreSQL',
                'MongoDB',
                'MySQL',
                'Modelagem de Dados',
                'ORMs'
            ]
        },
        {
            title: 'Cloud & Corporativo',
            icon: <Cloud />,
            emoji: '☁️',
            techs: [
                'Oracle Cloud ERP',
                'JD Edwards',
                'Integrações',
                'Automação de Processos'
            ]
        },
        {
            title: 'Boas Práticas',
            icon: <Shield />,
            emoji: '🛡️',
            techs: [
                'Clean Code',
                'SOLID',
                'Segurança',
                'Escalabilidade'
            ]
        },
        {
            title: 'Ferramentas',
            icon: <GitBranch />,
            emoji: '🧰',
            techs: [
                'Git',
                'GitHub',
                'VS Code',
                'Postman',
                'Docker (básico)'
            ]
        }
    ];

    return (
        <main className="tech-container max-w-7xl mx-auto px-6 py-20 space-y-20">

            {/* HERO */}
            <section className="tech-hero max-w-3xl">
                <h1 className="text-4xl font-bold text-[var(--text-white)] mb-4">
                    Tecnologias
                </h1>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                    Tecnologias que utilizo no dia a dia para construir soluções
                    modernas, seguras e escaláveis, sempre escolhendo a ferramenta
                    certa para cada problema.
                </p>
            </section>

            {/* GRID */}
            <section className="tech-grid">
                {techGroups.map((group) => (
                    <article key={group.title} className="tech-card">
                        <header className="tech-card-header">
                            <div className="tech-icon">
                                {group.icon}
                            </div>
                            <div>
                                <h3 className="tech-title">
                                    {group.emoji} {group.title}
                                </h3>
                            </div>
                        </header>

                        <ul className="tech-list">
                            {group.techs.map((tech) => (
                                <li key={tech} className="tech-item">
                                    <Cpu size={14} />
                                    <span>{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            {/* CTA */}
            <section className="tech-cta text-center">
                <p className="text-[var(--text-muted)] mb-4">
                    Tecnologia é meio, não fim. O foco sempre é resolver o problema certo.
                </p>
                <a
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-cta-button"
                >
                    Falar sobre um projeto
                </a>
            </section>

        </main>
    );
}

export default Technologies;
