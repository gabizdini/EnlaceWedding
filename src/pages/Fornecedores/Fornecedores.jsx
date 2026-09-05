import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import VendorCard from '../../components/VendorCard/VendorCard'
import CTA from '../../components/CTA/CTA'
import './Fornecedores.css'

const vendors = [
  { name: 'Ana Fotografia', category: 'Fotografo', rating: '\u2B50 4.9', distance: '2.3 km' },
  { name: 'Bella Maquiagem', category: 'Maquiadora', rating: '\u2B50 4.8', distance: '1.5 km' },
  { name: 'Decor Eventos', category: 'Decorador', rating: '\u2B50 4.7', distance: '3.1 km' },
  { name: 'Sabor & Arte', category: 'Buffet', rating: '\u2B50 4.9', distance: '4.0 km' },
]

function Fornecedores() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Fornecedores</span>
          <h1>Encontre profissionais perto de voce.</h1>
          <p>O Enlace conecta clientes a fornecedores locais verificados e bem avaliados.</p>
        </div>
      </section>

      {/* Fornecedores locais */}
      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Busca local"
            title="Fornecedores na sua regiao"
            description="Explore profissionais proximos ao local do seu evento."
          />
          <div className="vendors-layout">
            <div className="vendors-map">
              <div className="map-placeholder">
                <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="250" rx="12" fill="#F0EDFF"/>
                  <circle cx="150" cy="125" r="40" fill="rgba(108,92,231,0.15)" stroke="#6C5CE7" strokeWidth="2" strokeDasharray="4 4"/>
                  <circle cx="150" cy="125" r="8" fill="#6C5CE7"/>
                  <circle cx="100" cy="100" r="5" fill="#A29BFE"/>
                  <circle cx="200" cy="90" r="5" fill="#A29BFE"/>
                  <circle cx="180" cy="170" r="5" fill="#A29BFE"/>
                  <circle cx="110" cy="160" r="5" fill="#A29BFE"/>
                  <path d="M145 125L150 115L155 125" stroke="#6C5CE7" strokeWidth="2"/>
                </svg>
                <p className="map-label">Visualizacao do mapa</p>
              </div>
            </div>
            <div className="vendors-list">
              {vendors.map((v) => (
                <VendorCard key={v.name} name={v.name} category={v.category} rating={v.rating} distance={v.distance} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para fornecedores */}
      <section className="section section-alt">
        <div className="container">
          <div className="supplier-layout">
            <div className="supplier-content">
              <SectionTitle
                subtitle="Para fornecedores"
                title="Conecte seu trabalho a novos clientes."
                description="Divulgue seus servicos e seja encontrado por pessoas que estao planejando seu grande dia."
              />
              <div className="supplier-benefits">
                <div className="supplier-benefit">
                  <span className="check-icon">&#10003;</span>
                  <span>Perfil profissional</span>
                </div>
                <div className="supplier-benefit">
                  <span className="check-icon">&#10003;</span>
                  <span>Divulgacao dos servicos</span>
                </div>
                <div className="supplier-benefit">
                  <span className="check-icon">&#10003;</span>
                  <span>Avaliacoes de clientes</span>
                </div>
                <div className="supplier-benefit">
                  <span className="check-icon">&#10003;</span>
                  <span>Maior alcance local</span>
                </div>
                <div className="supplier-benefit">
                  <span className="check-icon">&#10003;</span>
                  <span>Contato com potenciais clientes</span>
                </div>
              </div>
              <Link to="/fornecedores" className="btn-primary">Quero ser fornecedor</Link>
            </div>
            <div className="supplier-visual">
              <div className="supplier-card-stack">
                <div className="supplier-preview-card">
                  <div className="preview-avatar">
                    <span>R</span>
                  </div>
                  <div>
                    <strong>Rafael Buffet</strong>
                    <span className="preview-cat">Buffet</span>
                    <span className="preview-rating">\u2B50 4.8 \u2022 5.2 km</span>
                  </div>
                </div>
                <div className="supplier-preview-card">
                  <div className="preview-avatar lilac">
                    <span>C</span>
                  </div>
                  <div>
                    <strong>Clara Flores</strong>
                    <span className="preview-cat">Decoracao</span>
                    <span className="preview-rating">\u2B50 4.9 \u2022 1.8 km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Quer ser encontrado?"
        description="Cadastre seu negocio e comece a receber solicitacoes."
        buttonText="Quero ser fornecedor"
        buttonTo="/fornecedores"
      />
    </>
  )
}

export default Fornecedores
