import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const faqs = [
        { question: 'Quais serviços você oferece?', answer: 'Desenvolvimento web, APIs, sistemas corporativos, manutenção evolutiva e consultoria em tecnologia.' },
        { question: 'Quanto tempo leva para concluir um projeto?', answer: 'O tempo depende da complexidade, mas geralmente projetos pequenos ficam entre 2 a 4 semanas, médios 1 a 2 meses e grandes acima de 3 meses.' },
        { question: 'Como posso acompanhar o andamento do projeto?', answer: 'Utilizamos ferramentas de gestão de tarefas e reuniões semanais para garantir transparência e alinhamento constante.' },
        { question: 'Aceita projetos internacionais?', answer: 'Sim! Posso atender clientes de qualquer lugar do mundo via remoto.' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-container max-w-7xl mx-auto px-6 py-16">
            <header className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--text-white)] mb-4">Perguntas Frequentes</h2>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    Tire suas dúvidas rapidamente sobre meus serviços e processos.
                </p>
            </header>

            <div className="faq-grid max-w-3xl mx-auto flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            <span>{faq.question}</span>
                            <ChevronDown
                                className={`faq-chevron ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <div className={`faq-answer-wrapper ${openIndex === index ? 'open' : ''}`}>
                            <p className="faq-answer">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
