import { Code, Layout, Database, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';
import './Services.css';

function Services() {
    const services = [
        {
            icon: <Layout />,
            title: 'Frontend Moderno',
            description: 'Interfaces rápidas, acessíveis e responsivas focadas em UX/UI e conversão.',
            items: ['React', 'Tailwind CSS', 'Design Responsivo', 'Acessibilidade']
        },
        {
            icon: <Code />,
            title: 'Backend & APIs',
            description: 'APIs robustas, seguras e escaláveis para aplicações modernas.',
            items: ['Node.js', 'NestJS', 'REST', 'Autenticação JWT']
        },
        {
            icon: <Database />,
            title: 'Banco de Dados',
            description: 'Modelagem e otimização de dados para performance e confiabilidade.',
            items: ['PostgreSQL', 'MongoDB', 'MySQL', 'ORMs']
        },
        {
            icon: <Cloud />,
            title: 'Soluções Corporativas',
            description: 'Integrações e sustentação de sistemas corporativos e ERPs.',
            items: ['Oracle Cloud ERP', 'JD Edwards', 'Integrações', 'Automação']
        },
        {
            icon: <ShieldCheck />,
            title: 'Boas Práticas & Segurança',
            description: 'Código limpo, versionado e seguindo padrões de mercado.',
            items: ['Clean Code', 'Versionamento Git', 'Segurança', 'Escalabilidade']
        }
    ];

    return (
        <main className="services-container max-w-7xl mx-auto px-6 py-20 space-y-20">

            {/* HERO */}
            <section className="services-hero text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-[var(--text-white)] mb-4">
                    Serviços
                </h1>
                <p className="text-[var(--text-muted)] text-lg">
                    Desenvolvimento de soluções digitais modernas, escaláveis e alinhadas
                    aos objetivos do seu negócio.
                </p>
            </section>

            {/* LISTA DE SERVIÇOS */}
            <section className="services-grid">
                {services.map((service, index) => (
                    <article key={index} className="service-card">
                        <div className="service-icon">
                            {service.icon}
                        </div>

                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>

                        <ul className="service-list">
                            {service.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            {/* DIFERENCIAL */}
            <section className="services-diff text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-[var(--text-white)] mb-4">
                    Como posso ajudar seu projeto
                </h2>
                <p className="text-[var(--text-muted)] text-lg">
                    Meu foco não é apenas escrever código, mas entregar soluções bem
                    planejadas, seguras e sustentáveis a longo prazo.
                </p>
            </section>

            {/* CTA */}
            <section className="services-cta text-center">
                <a
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="services-cta-button"
                >
                    Falar sobre meu projeto
                    <ArrowRight className="w-5 h-5" />
                </a>
            </section>

        </main>
    );
}

export default Services;
