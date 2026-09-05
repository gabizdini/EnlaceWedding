import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/como-funciona', label: 'Como funciona' },
  { path: '/recursos', label: 'Recursos' },
  { path: '/fornecedores', label: 'Para fornecedores' },
  { path: '/sobre', label: 'Sobre nos' },
  { path: '/governanca', label: 'Governanca' },
  { path: '/gestao-ti', label: 'Gestao de TI' },
  { path: '/projeto', label: 'Projeto' },
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
          <svg className="logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28C16 28 4 20 4 12C4 8.68629 6.68629 6 10 6C12.2208 6 14.1594 7.26476 15.0818 9.10352L16 10.8809L16.9182 9.10352C17.8406 7.26476 19.7792 6 22 6C25.3137 6 28 8.68629 28 12C28 20 16 28 16 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M14 17C14 17 15 19 16 19C17 19 18 17 18 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="logo-text">Enlace</span>
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <div className="navbar-menu-header">
            <Link to="/" className="navbar-menu-logo" onClick={closeMenu}>
              <svg className="logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 28C16 28 4 20 4 12C4 8.68629 6.68629 6 10 6C12.2208 6 14.1594 7.26476 15.0818 9.10352L16 10.8809L16.9182 9.10352C17.8406 7.26476 19.7792 6 22 6C25.3137 6 28 8.68629 28 12C28 20 16 28 16 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 17C14 17 15 19 16 19C17 19 18 17 18 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
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
