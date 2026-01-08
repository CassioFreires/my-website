import { Code2, Briefcase, Target, Users } from 'lucide-react';
import './AboutUs.css'

function AboutUs() {
    return (
        <main className="about-container max-w-7xl mx-auto px-6 py-20 space-y-20">

            {/* HERO */}
            <section className="about-hero max-w-3xl">
                <h1 className="text-4xl font-bold text-[var(--text-white)] mb-4">
                    Sobre mim
                </h1>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                    Sou desenvolvedor de software focado em criar soluções digitais sólidas,
                    escaláveis e alinhadas às necessidades reais de negócio.
                </p>
            </section>

            {/* QUEM SOU */}
            <section className="about-section grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="about-text">
                    <h2 className="section-title">Minha trajetória</h2>
                    <p>
                        Atuo com desenvolvimento de software e sustentação de sistemas corporativos,
                        trabalhando desde a concepção da solução até a entrega final.
                    </p>
                    <p>
                        Tenho experiência com aplicações web modernas, APIs, bancos de dados
                        e integrações com sistemas corporativos como Oracle Cloud ERP e JD Edwards.
                    </p>
                    <p>
                        Meu foco vai além do código: busco entender o contexto, o problema
                        e os objetivos do projeto para entregar soluções bem estruturadas
                        e sustentáveis a longo prazo.
                    </p>
                </div>

                {/* CARDS DE DESTAQUE */}
                <div className="about-highlights">
                    <div className="highlight-card">
                        <Briefcase />
                        <h3>Experiência Corporativa</h3>
                        <p>
                            Atuação em ambientes corporativos com sistemas críticos
                            e processos complexos.
                        </p>
                    </div>

                    <div className="highlight-card">
                        <Code2 />
                        <h3>Desenvolvimento Moderno</h3>
                        <p>
                            Uso de tecnologias atuais, boas práticas e foco em qualidade.
                        </p>
                    </div>

                    <div className="highlight-card">
                        <Target />
                        <h3>Visão de Negócio</h3>
                        <p>
                            Desenvolvimento orientado a objetivos e resultados.
                        </p>
                    </div>

                    <div className="highlight-card">
                        <Users />
                        <h3>Parceria</h3>
                        <p>
                            Comunicação clara e colaboração durante todo o projeto.
                        </p>
                    </div>
                </div>
            </section>

            {/* VALORES */}
            <section className="about-values max-w-4xl">
                <h2 className="section-title">Como eu trabalho</h2>
                <ul className="values-list">
                    <li>✔️ Código limpo, organizado e documentado</li>
                    <li>✔️ Planejamento antes de executar</li>
                    <li>✔️ Transparência em prazos e decisões</li>
                    <li>✔️ Foco em soluções escaláveis</li>
                    <li>✔️ Evolução contínua</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <a
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-cta-button"
                >
                    Vamos conversar sobre seu projeto
                </a>
            </section>

        </main>
    );
}

export default AboutUs;
