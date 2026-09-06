import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import VendorCard from '../../components/VendorCard/VendorCard'
import MapaFornecedores from '../../components/MapaFornecedores/MapaFornecedores'
import CTA from '../../components/CTA/CTA'
import imgPlanejadoras from '../../assets/images/mulheres-de-tiro-medio-trabalhando-como-planejadoras-de-casamento.jpg'
import './Fornecedores.css'

const vendors = [
  { name: 'Vini Pessoa', category: 'Fotógrafo', rating: '4.9', distance: '1.2 km' },
  { name: 'Luara Buffet', category: 'Espaço e Buffet', rating: '4.8', distance: '0.8 km' },
  { name: 'Naty Decorações em Eventos', category: 'Decorações', rating: '4.7', distance: '1.5 km' },
  { name: 'Josi Oliveira Beauty Studio', category: 'Maquiadora', rating: '4.9', distance: '0.5 km' },
]

function Fornecedores() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Fornecedores</span>
          <h1>Encontre profissionais perto de você.</h1>
          <p>O Enlace conecta clientes a fornecedores locais verificados e bem avaliados.</p>
        </div>
      </section>

      {/* Fornecedores locais */}
      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Busca local"
            title="Fornecedores na sua região"
            description="Explore profissionais próximos ao local do seu evento."
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
                description="Divulgue seus serviços e seja encontrado por pessoas que estão planejando seu grande dia."
              />
              <div className="supplier-benefits">
                <div className="supplier-benefit">
                  <span className="check-icon">&#10003;</span>
                  <span>Perfil profissional</span>
                </div>
                <div className="supplier-benefit">
                  <span className="check-icon">&#10003;</span>
                  <span>Divulgação dos serviços</span>
                </div>
                <div className="supplier-benefit">
                  <span className="check-icon">&#10003;</span>
                  <span>Avaliações de clientes</span>
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
              <div className="supplier-image-wrapper">
                <img src={imgPlanejadoras} alt="Planejadoras de casamento trabalhando" className="supplier-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Quer ser encontrado?"
        description="Cadastre seu negócio e comece a receber solicitações."
        buttonText="Quero ser fornecedor"
        buttonTo="/fornecedores"
      />
    </>
  )
}

export default Fornecedores
