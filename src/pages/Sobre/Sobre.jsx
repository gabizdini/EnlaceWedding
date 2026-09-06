import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './Sobre.css'

function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Sobre nós</span>
          <h1>Tecnologia que conecta sonhos.</h1>
          <p>Conheça a Enlace Tecnologia e nossa missão de transformar o mercado de eventos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <SectionTitle
                subtitle="Quem somos"
                title="A Enlace Tecnologia"
                description="Somos uma empresa de desenvolvimento de software especializada em soluções digitais para o mercado de eventos, casamentos e serviços locais."
                center={false}
              />
              <p className="about-text">
                Nascemos da necessidade de simplificar o planejamento de casamentos, conectando clientes a fornecedores locais de forma rápida e confiável.
              </p>
              <p className="about-text">
                O Enlace Wedding é nossa principal solução: uma plataforma completa que reune planejamento, orçamento, convidados, inspirações e busca de fornecedores em um só lugar.
              </p>
            </div>
            <div className="about-cards">
              <div className="about-card">
                <div className="about-card-icon">1</div>
                <h3>Nossa Missão</h3>
                <p>Simplificar o planejamento de casamentos com tecnologia acessível e humanizada.</p>
              </div>
              <div className="about-card">
                <div className="about-card-icon">2</div>
                <h3>Nossa Visão</h3>
                <p>Ser a principal plataforma de planejamento de casamentos do Brasil.</p>
              </div>
              <div className="about-card">
                <div className="about-card-icon">3</div>
                <h3>Nossos Valores</h3>
                <p>Inovação, qualidade, segurança e foco no cliente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Conheça nosso projeto"
        description="Veja como o Enlace Wedding foi concebido."
        buttonText="Ver projeto"
        buttonTo="/projeto"
      />
    </>
  )
}

export default Sobre
