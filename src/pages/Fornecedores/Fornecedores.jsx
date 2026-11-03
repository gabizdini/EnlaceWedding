import { Link, useLocation, useNavigate } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import VendorCard from '../../components/VendorCard/VendorCard'
import MapaFornecedores from '../../components/MapaFornecedores/MapaFornecedores'
import CidadeBusca from '../../components/CidadeBusca/CidadeBusca'
import CTA from '../../components/CTA/CTA'
import { LOCAL_PADRAO, useLocal } from '../../context/localizacao'
import imgPlanejadoras from '../../assets/images/mulheres-organização-casamento.png'
import './Fornecedores.css'

const vendors = [
  { name: 'Vini Pessoa', category: 'Fotógrafo', rating: '4.9', distance: '1.2 km' },
  { name: 'Luara Buffet', category: 'Espaço e Buffet', rating: '4.8', distance: '0.8 km' },
  { name: 'Naty Decorações em Eventos', category: 'Decorações', rating: '4.7', distance: '1.5 km' },
  { name: 'Josi Oliveira Beauty Studio', category: 'Maquiadora', rating: '4.9', distance: '0.5 km' },
]

/**
 * Os fornecedores padrão ficam em Machado-MG. Quando a cidade buscada é outra,
 * eles são ocultados (os dados continuam intactos). Este limite evita esconder
 * tudo caso o usuário pesquise "Machado" por conta própria.
 */
function estaEmMachado(local) {
  const margem = 0.05 // ≈ 5 km
  return (
    Math.abs(local.lat - LOCAL_PADRAO.lat) < margem &&
    Math.abs(local.lng - LOCAL_PADRAO.lng) < margem
  )
}

function Fornecedores() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { local, setLocal } = useLocal()

  /**
   * Busca feita no próprio card do mapa: atualiza o local e sinaliza a
   * navegação como vinda da busca. Como o pathname não muda, não há scroll.
   */
  function aoEncontrar(encontrada) {
    setLocal(encontrada)
    navigate('/fornecedores', { state: { deBusca: true } })
  }

  // Só usa a cidade buscada quando a navegação veio da busca da Home.
  // Links do menu/rodapé (sem a bandeira) e recarregamentos caem no padrão.
  const veioDaBusca = state?.deBusca === true && local !== null
  const localAtual = veioDaBusca ? local : LOCAL_PADRAO
  const exibirFornecedores = !veioDaBusca || estaEmMachado(localAtual)
  const zoom = veioDaBusca ? 13 : 14

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
              <div className="vendors-busca">
                <span className="vendors-busca-title">Pesquisar outra cidade</span>
                <CidadeBusca valorInicial={localAtual.nome} onBuscar={aoEncontrar} />
              </div>
              <div className="vendors-map-header">
                <span className="vendors-map-dot" />
                <span>Mapa dos fornecedores</span>
                <span className="vendors-map-city">{localAtual.nome}</span>
              </div>
              <MapaFornecedores
                lat={localAtual.lat}
                lng={localAtual.lng}
                zoom={zoom}
                mostrarFornecedores={exibirFornecedores}
              />
            </div>
            <div className="vendors-list">
              {exibirFornecedores ? (
                vendors.map((v) => (
                  <VendorCard key={v.name} name={v.name} category={v.category} rating={v.rating} distance={v.distance} />
                ))
              ) : (
                <div className="vendors-empty">
                  <p className="vendors-empty-title">
                    Nenhum fornecedor cadastrado em {localAtual.nome} ainda.
                  </p>
                  <p className="vendors-empty-text">
                    Ainda não buscamos profissionais por esta cidade. Assim que
                    cadastrarmos fornecedores locais, eles aparecem aqui.
                  </p>
                  <Link to="/fornecedores" className="vendors-empty-link">
                    Ver os fornecedores de Machado-MG
                  </Link>
                </div>
              )}
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
        title="Quer saber quem somos?"
        description="Conheça a Enlace Wedding e nossa missão."
        buttonText="Sobre nós"
        buttonTo="/sobre"
      />
    </>
  )
}

export default Fornecedores
