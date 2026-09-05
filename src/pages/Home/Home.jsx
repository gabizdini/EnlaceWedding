import { Link } from 'react-router-dom'
import BenefitCard from '../../components/BenefitCard/BenefitCard'
import CTA from '../../components/CTA/CTA'
import './Home.css'

const benefits = [
  { icon: '\uD83D\uDCCD', title: 'Fornecedores locais', description: 'Encontre profissionais proximos ao seu evento.' },
  { icon: '\uD83D\uDCCB', title: 'Planejamento completo', description: 'Organize tarefas, prazos e compromissos.' },
  { icon: '\uD83D\uDCB0', title: 'Orcamento', description: 'Tenha controle dos gastos do casamento.' },
  { icon: '\uD83D\uDCA1', title: 'Inspiracoes', description: 'Salve referencias para encontrar o seu estilo.' },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-container container">
          <div className="hero-content">
            <span className="hero-badge">Enlace Wedding</span>
            <h1 className="hero-title">
              Seu casamento, <span className="highlight">planejado em cada detalhe.</span>
            </h1>
            <p className="hero-subtitle">
              Encontre fornecedores, organize seu planejamento e transforme suas inspiracoes em realidade em um so lugar.
            </p>
            <div className="hero-buttons">
              <Link to="/" className="btn-primary">Comecar a planejar</Link>
              <Link to="/como-funciona" className="btn-secondary">Conhecer a plataforma</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <div className="hero-image-placeholder">
                  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="400" rx="24" fill="url(#grad)"/>
                    <path d="M200 300C200 300 100 240 100 170C100 145 120 125 145 125C162 125 176 134 185 147L200 168L215 147C224 134 238 125 255 125C280 125 300 145 300 170C300 240 200 300 200 300Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                    <circle cx="160" cy="190" r="12" fill="rgba(255,255,255,0.3)"/>
                    <circle cx="240" cy="190" r="12" fill="rgba(255,255,255,0.3)"/>
                    <path d="M185 215C185 215 192 225 200 225C208 225 215 215 215 215" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="400" y2="400">
                        <stop offset="0%" stopColor="#6C5CE7"/>
                        <stop offset="100%" stopColor="#A29BFE"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="hero-search-card">
                <h3>Encontre fornecedores na sua regiao</h3>
                <div className="search-form">
                  <input type="text" placeholder="Digite sua cidade" defaultValue="Machado, MG" readOnly />
                  <button type="button">Buscar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section section">
        <div className="container">
          <div className="benefits-grid">
            {benefits.map((b) => (
              <BenefitCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CTA
        title="Pronto para comecar a planejar?"
        description="Tenha suas ideias, tarefas e fornecedores organizados em um so lugar."
        buttonText="Comecar a planejar"
        buttonTo="/"
      />
    </>
  )
}

export default Home
