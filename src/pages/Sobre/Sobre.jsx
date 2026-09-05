import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './Sobre.css'

function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Sobre nos</span>
          <h1>Tecnologia que conecta sonhos.</h1>
          <p>Conheca a Enlace Tecnologia e nossa missao de transformar o mercado de eventos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <SectionTitle
                subtitle="Quem somos"
                title="A Enlace Tecnologia"
                description="Somos uma empresa de desenvolvimento de software especializada em solucoes digitais para o mercado de eventos, casamentos e servicos locais."
                center={false}
              />
              <p className="about-text">
                Nascemos da necessidade de simplificar o planejamento de casamentos, conectando clientes a fornecedores locais de forma rapida e confiavel.
              </p>
              <p className="about-text">
                O Enlace Wedding e nossa principal solucao: uma plataforma completa que reune planejamento, orcamento, convidados, inspiracoes e busca de fornecedores em um so lugar.
              </p>
            </div>
            <div className="about-cards">
              <div className="about-card">
                <div className="about-card-icon">1</div>
                <h3>Nossa Missao</h3>
                <p>Simplificar o planejamento de casamentos com tecnologia acessivel e humanizada.</p>
              </div>
              <div className="about-card">
                <div className="about-card-icon">2</div>
                <h3>Nossa Visao</h3>
                <p>Ser a principal plataforma de planejamento de casamentos do Brasil.</p>
              </div>
              <div className="about-card">
                <div className="about-card-icon">3</div>
                <h3>Nossos Valores</h3>
                <p>Inovacao, qualidade, seguranca e foco no cliente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Conheca nosso projeto"
        description="Veja como o Enlace Wedding foi concebido."
        buttonText="Ver projeto"
        buttonTo="/projeto"
      />
    </>
  )
}

export default Sobre
