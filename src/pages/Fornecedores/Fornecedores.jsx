import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import VendorCard from '../../components/VendorCard/VendorCard'
import MapaFornecedores from '../../components/MapaFornecedores/MapaFornecedores'
import CTA from '../../components/CTA/CTA'
import './Fornecedores.css'

const vendors = [
  { name: 'Vini Pessoa', category: 'Fotografo', rating: '4.9', distance: '1.2 km' },
  { name: 'Luara Buffet', category: 'Espaco e Buffet', rating: '4.8', distance: '0.8 km' },
  { name: 'Naty Decoracoes em Eventos', category: 'Decoracoes', rating: '4.7', distance: '1.5 km' },
  { name: 'Josi Oliveira Beauty Studio', category: 'Maquiadora', rating: '4.9', distance: '0.5 km' },
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
              <div className="vendors-map-header">
                <span className="vendors-map-dot" />
                <span>Mapa dos fornecedores</span>
              </div>
              <MapaFornecedores />
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
                    <span className="preview-rating">4.8 5.2 km</span>
                  </div>
                </div>
                <div className="supplier-preview-card">
                  <div className="preview-avatar lilac">
                    <span>C</span>
                  </div>
                  <div>
                    <strong>Clara Flores</strong>
                    <span className="preview-cat">Decoracao</span>
                    <span className="preview-rating">4.9 1.8 km</span>
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
