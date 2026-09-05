import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = {
  enlace: [
    { path: '/', label: 'Inicio' },
    { path: '/como-funciona', label: 'Como funciona' },
    { path: '/recursos', label: 'Recursos' },
    { path: '/fornecedores', label: 'Para fornecedores' },
  ],
  empresa: [
    { path: '/sobre', label: 'Sobre nos' },
    { path: '/governanca', label: 'Governanca' },
    { path: '/gestao-ti', label: 'Gestao de TI' },
    { path: '/projeto', label: 'Projeto' },
  ],
  informacoes: [
    { path: '/contato', label: 'Contato' },
    { path: '/', label: 'Privacidade' },
    { path: '/', label: 'Termos de uso' },
  ],
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <svg className="footer-logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 28C16 28 4 20 4 12C4 8.68629 6.68629 6 10 6C12.2208 6 14.1594 7.26476 15.0818 9.10352L16 10.8809L16.9182 9.10352C17.8406 7.26476 19.7792 6 22 6C25.3137 6 28 8.68629 28 12C28 20 16 28 16 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M14 17C14 17 15 19 16 19C17 19 18 17 18 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Enlace</span>
          </Link>
          <p className="footer-tagline">Tecnologia que conecta sonhos.</p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Enlace</h4>
            <ul>
              {footerLinks.enlace.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Empresa</h4>
            <ul>
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Informacoes</h4>
            <ul>
              {footerLinks.informacoes.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; 2026 Enlace Tecnologia — Projeto academico</p>
      </div>
    </footer>
  )
}

export default Footer
