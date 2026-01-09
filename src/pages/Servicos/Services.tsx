import { Code, Layout, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';
import './Services.css';

function Services() {
    const services = [
        {
            icon: <Layout />,
            title: 'Desenvolvimento Frontend Profissional',
            description: 'Transformo designs em interfaces de alta performance, focadas na experiência do usuário e conversão de clientes.',
            items: ['Aplicações Web com React/Next.js', 'Landing Pages de Alta Conversão', 'Otimização de Performance (SEO)', 'Interfaces Responsivas e Acessíveis']
        },
        {
            icon: <Code />,
            title: 'Sistemas Web & APIs sob Medida',
            description: 'Desenvolvimento de regras de negócio complexas com arquitetura escalável e segura para o crescimento do seu produto.',
            items: ['APIs RESTful e Microserviços', 'Integração de Pagamentos e Webhooks', 'Autenticação e Segurança de Dados', 'Sistemas de Gestão (SaaS)']
        },
        {
            icon: <Cloud />,
            title: 'Consultoria e Integração ERP',
            description: 'Especialista em conectar processos de negócio a soluções tecnológicas, focando em automação e eficiência operacional.',
            items: ['Integrações Oracle Cloud/JD Edwards', 'Automação de Workflows', 'Relatórios e Dashboards Estratégicos', 'Migração e Sustentação de Dados']
        }
    ];

    return (
        <main className="services-page">
            <section className="services-hero">
                <span className="hero-badge">Disponível para novos projetos</span>
                <h1>Soluções Digitais que <br className="desktop-only" /> <span className="highlight">impulsionam resultados</span></h1>
                <p>
                    Ajudo empresas e empreendedores a tirarem ideias do papel através de desenvolvimento 
                    de software robusto, design inteligente e consultoria técnica especializada.
                </p>
            </section>

            <section className="services-grid-container">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <article key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-list">
                                {service.items.map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle2 size={18} className="check-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="services-cta-section">
                <div className="cta-box">
                    <h2>Pronto para escalar seu negócio?</h2>
                    <p>Vamos agendar uma conversa para entender os desafios do seu projeto e como posso ajudar.</p>
                    <a
                        href="https://wa.me/5521999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-main-button"
                    >
                        Solicitar orçamento gratuito
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Services;