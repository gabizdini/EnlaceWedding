import { Link } from 'react-router-dom'
import logoWhite from '../../assets/images/logo-enlace-wedding/white.svg'
import './Footer.css'

const footerLinks = {
  enlace: [
    { path: '/', label: 'Início' },
    { path: '/como-funciona', label: 'Como funciona' },
    { path: '/recursos', label: 'Recursos' },
    { path: '/fornecedores', label: 'Para fornecedores' },
  ],
  empresa: [
    { path: '/sobre', label: 'Sobre nós' },
    { path: '/governanca', label: 'Governança' },
    { path: '/gestao-ti', label: 'Gestão de TI' },
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
            <img src={logoWhite} alt="Enlace" className="footer-logo-icon" />
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
            <h4>Informações</h4>
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
        <p>&copy; 2026 Enlace Tecnologia — Projeto acadêmico</p>
      </div>
    </footer>
  )
}

export default Footer
