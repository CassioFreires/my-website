import {
  Search,
  Calendar,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
  FileText,
  Clock,
} from "lucide-react";
import "./WorkProcess.css";

const steps = [
  {
    id: "01",
    title: "Entendimento",
    description:
      "Levantamento dos objetivos, desafios e contexto para definição clara do escopo.",
    icon: <Search size={22} />,
    duration: "1–2 semanas",
    deliverables: ["Requisitos", "Arquitetura", "Cronograma"],
    color: "var(--step-1)",
  },
  {
    id: "02",
    title: "Planejamento",
    description:
      "Organização do roadmap, prazos, custos e priorização das entregas.",
    icon: <Calendar size={22} />,
    duration: "3–5 dias",
    deliverables: ["Roadmap", "Estimativas", "Backlog"],
    color: "var(--step-2)",
  },
  {
    id: "03",
    title: "Desenvolvimento",
    description:
      "Implementação com foco em qualidade, performance e boas práticas.",
    icon: <Code size={22} />,
    duration: "4–12 semanas",
    deliverables: ["Código", "Documentação", "Builds"],
    color: "var(--step-3)",
  },
  {
    id: "04",
    title: "Validação",
    description:
      "Testes, ajustes e validação para garantir aderência aos requisitos.",
    icon: <TestTube size={22} />,
    duration: "1–2 semanas",
    deliverables: ["Testes", "Feedback", "Checklist"],
    color: "var(--step-4)",
  },
  {
    id: "05",
    title: "Entrega",
    description:
      "Deploy final, documentação e suporte para transição tranquila.",
    icon: <Rocket size={22} />,
    duration: "1 semana",
    deliverables: ["Produção", "Treinamento", "Suporte"],
    color: "var(--step-5)",
  },
];

export default function WorkProcess() {
  return (
    <section className="process" id="processo">
      <header className="process-header">
        <span className="process-badge">Metodologia</span>

        <h2>
          Fluxo de <span>Trabalho</span>
        </h2>

        <p>
          Processo estruturado para entregar soluções de software com
          previsibilidade, qualidade e foco em negócio.
        </p>
      </header>

      <div className="process-grid">
        {steps.map((step) => (
          <article
            key={step.id}
            className="process-card"
            style={{ "--accent": step.color } as React.CSSProperties}
          >
            <header className="card-header">
              <div className="icon">{step.icon}</div>

              <div className="meta">
                <span className="step-id">{step.id}</span>
                <span className="duration">
                  <Clock size={12} /> {step.duration}
                </span>
              </div>
            </header>

            <div className="content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            <footer className="deliverables">
              <span>
                <FileText size={14} /> Entregáveis
              </span>

              <ul>
                {step.deliverables.map((item) => (
                  <li key={item}>
                    <CheckCircle size={12} /> {item}
                  </li>
                ))}
              </ul>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
