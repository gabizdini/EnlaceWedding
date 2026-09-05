import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Contato.css'

function Contato() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Contato</span>
          <h1>Fale conosco</h1>
          <p>Entre em contato com a equipe do Enlace Tecnologia.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-area">
              <SectionTitle
                subtitle="Mensagem"
                title="Envie sua mensagem"
                center={false}
              />
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" placeholder="Seu nome" readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" placeholder="seu@email.com" readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Assunto</label>
                  <input type="text" id="subject" placeholder="Assunto da mensagem" readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" rows="5" placeholder="Escreva sua mensagem..." readOnly></textarea>
                </div>
                <button type="submit" className="btn-primary">Enviar mensagem</button>
              </form>
            </div>
            <div className="contact-info-area">
              <div className="contact-info-card">
                <h3>E-mail</h3>
                <p>contato@enlacetecnologia.com.br</p>
              </div>
              <div className="contact-info-card">
                <h3>Localizacao</h3>
                <p>Machado, MG — Brasil</p>
              </div>
              <div className="contact-info-card">
                <h3>Redes sociais</h3>
                <div className="social-links">
                  <Link to="/" className="social-link">Instagram</Link>
                  <Link to="/" className="social-link">LinkedIn</Link>
                  <Link to="/" className="social-link">GitHub</Link>
                </div>
              </div>
              <p className="contact-note">Este e um projeto academico. Os dados acima sao ficticios.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contato
