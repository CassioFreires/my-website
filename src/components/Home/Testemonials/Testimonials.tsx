import {
  Star,
  Quote,
  CheckCircle
} from "lucide-react";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CTO",
      company: "TechCorp",
      message:
        "Refatorou nossa arquitetura backend e reduziu o tempo de resposta das APIs em 60%, além de elevar o nível de segurança e conformidade.",
      results: ["-60% latência", "+40% performance", "LGPD ready"]
    },
    {
      name: "Ana Rodrigues",
      role: "Product Manager",
      company: "ShopCenter",
      message:
        "Desenvolveu um sistema de inventário integrado ao ERP que eliminou cerca de 20 horas semanais de trabalho manual.",
      results: ["-20h semanais", "ERP integrado", "Menos erros"]
    },
    {
      name: "Roberto Silva",
      role: "Diretor de TI",
      company: "FinTech",
      message:
        "Migração completa de sistema legado para Node.js sem downtime. Processo claro, técnico e extremamente seguro.",
      results: ["Zero downtime", "99.9% uptime", "Stack moderna"]
    }
  ];

  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials-container">
        <header className="testimonials-header">
          <span className="badge">
            <Quote size={14} />
            Depoimentos reais
          </span>

          <h2>
            O que dizem sobre meu <span>trabalho</span>
          </h2>

          <p>
            Feedback de líderes técnicos e gestores que confiaram em mim para
            entregar soluções escaláveis e de alto impacto.
          </p>
        </header>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-card">
              <header className="card-header">
                <div className="avatar">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <strong>{t.name}</strong>
                  <span>
                    {t.role} · {t.company}
                  </span>
                </div>
              </header>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="star" />
                ))}
                <span>5.0</span>
              </div>

              <p className="message">“{t.message}”</p>

              <div className="results">
                {t.results.map((r, idx) => (
                  <span key={idx}>{r}</span>
                ))}
              </div>

              <footer className="verified">
                <CheckCircle size={14} />
                Depoimento verificado
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
