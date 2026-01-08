import { Sparkles } from "lucide-react";
import "./CallToAction.css";

export default function CallToAction() {
  return (
    <section className="cta" id="contato">
      <div className="cta-container">
        <span className="cta-badge">
          <Sparkles size={14} />
          Pronto para começar
        </span>

        <header className="cta-header">
          <h2>
            Vamos construir algo <span>incrível</span> juntos?
          </h2>

          <p>
            Entre em contato para conversar sobre seu projeto, ideia ou desafio
            técnico. Respondo em até <strong>24 horas</strong>.
          </p>
        </header>

        <div className="cta-stats">
          <div className="stat">
            <span className="value">24h</span>
            <span className="label">Tempo médio de resposta</span>
          </div>

          <div className="stat">
            <span className="value">100%</span>
            <span className="label">Projetos entregues</span>
          </div>

          <div className="stat">
            <span className="value">Flexível</span>
            <span className="label">Horários e formatos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
