import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoWhite from '../../assets/images/logo-enlace-wedding/white.svg'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Início' },
  { path: '/como-funciona', label: 'Como funciona' },
  { path: '/recursos', label: 'Recursos' },
  { path: '/fornecedores', label: 'Fornecedores' },
  { path: '/sobre', label: 'Sobre nós' },
  { path: '/governanca', label: 'Governança' },
  { path: '/gestao-ti', label: 'Gestão de TI' },
  { path: '/contato', label: 'Contato' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logoWhite} alt="Enlace" className="logo-icon" />
          <span className="logo-text">Enlace</span>
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <div className="navbar-menu-header">
            <Link to="/" className="navbar-menu-logo" onClick={closeMenu}>
              <img src={logoWhite} alt="Enlace" className="logo-icon" />
              <span className="logo-text">Enlace</span>
            </Link>
            <button className="navbar-menu-close" onClick={toggleMenu} aria-label="Fechar menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/" className="navbar-cta" onClick={closeMenu}>
            Comece a planejar
          </Link>
        </div>

        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
