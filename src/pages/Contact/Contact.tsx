import { Mail, MapPin, MessageSquare, Send } from 'lucide-react'
import './Contact.css'

function Contact() {
  const phoneNumber = '5521981753423'
  const waMessage = encodeURIComponent(
    'Olá, gostaria de conversar sobre meu projeto!'
  )

  return (
    <section className="contact-container">
      <header className="contact-header">
        <h1>Contato</h1>
        <p>Fale comigo pelo WhatsApp ou envie uma mensagem pelo formulário.</p>
      </header>

      <div className="contact-content">
        {/* Ações */}
        <div className="contact-actions">
          <a
            href={`https://wa.me/${phoneNumber}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-btn"
          >
            <MessageSquare size={20} />
            Falar no WhatsApp
          </a>
        </div>

        {/* Formulário */}
        <form className="contact-form">
          <input
            type="text"
            placeholder="Nome completo"
            className="input-field"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
          />

          <textarea
            placeholder="Mensagem"
            rows={6}            
            className="input-field"
            required
          />

          <button type="submit" className="cta-button">
            <Send size={18} />
            Enviar mensagem
          </button>
        </form>
      </div>

      {/* Infos */}
      <footer className="contact-info">
        <div>
          <Mail size={18} />
          <a href="mailto:cassio_souza@live.com">cassio_souza@live.com</a>
        </div>
        <div>
          <MapPin size={18} />
          <span>Rio de Janeiro, RJ</span>
        </div>
      </footer>
    </section>
  )
}

export default Contact
