import { Link } from 'react-router-dom'
import BenefitCard from '../../components/BenefitCard/BenefitCard'
import { MapPin, ClipboardList, Coins, Lightbulb } from '../../components/Icons'
import CTA from '../../components/CTA/CTA'
import heroImg from '../../assets/images/sequel-wedding-casamento-em-sequencia.png'
import heroImgMobile from '../../assets/images/sequel-wedding-buque.png'
import './Home.css'

const benefits = [
  { icon: <MapPin />, title: 'Fornecedores locais', description: 'Encontre profissionais próximos ao seu evento.', link: '/fornecedores' },
  { icon: <ClipboardList />, title: 'Planejamento completo', description: 'Organize tarefas, prazos e compromissos.' },
  { icon: <Coins />, title: 'Orçamento', description: 'Tenha controle dos gastos do casamento.' },
  { icon: <Lightbulb />, title: 'Inspirações', description: 'Salve referências para encontrar o seu estilo.' },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ '--hero-img': `url(${heroImg})`, '--hero-img-mobile': `url(${heroImgMobile})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-container container">
          <div className="hero-content">
            <span className="hero-badge">Enlace Wedding</span>
            <h1 className="hero-title">
              Seu casamento <span className="highlight">planejado em cada detalhe.</span>
            </h1>
            <p className="hero-subtitle">
              Encontre fornecedores, organize seu planejamento e transforme suas inspirações em realidade em um só lugar.
            </p>
            <div className="hero-buttons">
              <Link to="/" className="btn-primary">Começar a planejar</Link>
              <Link to="/sobre" className="btn-secondary">Conhecer a plataforma</Link>
            </div>
            <div className="hero-search-card">
              <h3>Encontre fornecedores na sua região</h3>
              <div className="search-form">
                <input type="text" placeholder="Digite sua cidade" defaultValue="Machado, MG" readOnly />
                <button type="button">Buscar</button>
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
              <BenefitCard key={b.title} icon={b.icon} title={b.title} description={b.description} link={b.link} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CTA
        title="Pronto para começar a planejar?"
        description="Tenha suas ideias, tarefas e fornecedores organizados em um só lugar."
        buttonText="Como funciona?"
        buttonTo="/como-funciona"
      />
    </>
  )
}

export default Home
