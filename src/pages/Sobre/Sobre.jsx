import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import logoBrown from '../../assets/images/logo-enlace-wedding/brown.svg'
import './Sobre.css'

function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Sobre nós</span>
          <img src={logoBrown} alt="Enlace Wedding" className="sobre-logo" />
          <h1>Tecnologia que conecta sonhos.</h1>
          <p>Conheça a Enlace Wedding e nossa missão de transformar o mercado de eventos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <SectionTitle
                subtitle="Quem somos"
                title="A Enlace Wedding"
                description="Somos uma empresa de desenvolvimento de software especializada em soluções digitais para o mercado de eventos, casamentos e serviços locais."
                center={false}
              />
              <p className="about-text">
                Nascemos a partir da necessidade de tornar o planejamento de casamentos mais simples, organizado e acessível, conectando clientes a fornecedores locais de forma rápida, prática e confiável.<br />Nossa principal solução, o <strong>Enlace Wedding</strong>, é uma plataforma completa que reúne, em um só lugar, ferramentas para planejamento, organização de orçamento, gerenciamento de convidados, busca de inspirações e conexão com fornecedores.<br />Nosso objetivo é utilizar a tecnologia para transformar a experiência de planejar um casamento, tornando cada etapa mais simples, eficiente e tranquila para os noivos.
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

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Projeto"
            title="Projeto Enlace Wedding"
            description="Apresentação do projeto simulado para o cliente fictício."
          />
          <div className="project-grid">
            <div className="project-block">
              <h3>Cliente</h3>
              <p>Empresa de organização de eventos de casamento, com experiência no mercado local.</p>
            </div>
            <div className="project-block">
              <h3>Problema</h3>
              <p>Dificuldade dos clientes em encontrar fornecedores confiáveis próximos ao local do evento e organizar as etapas do casamento.</p>
            </div>
            <div className="project-block">
              <h3>Solução proposta</h3>
              <p>Desenvolvimento do Enlace Wedding: plataforma digital completa para planejamento e conexão com fornecedores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Detalhes"
            title="Escopo e Tecnologias"
          />
          <div className="scope-grid">
            <div className="scope-card">
              <h3>Funcionalidades</h3>
              <ul>
                <li>Busca de fornecedores locais</li>
                <li>Checklist e cronograma</li>
                <li>Orçamento e controle de gastos</li>
                <li>Lista de convidados</li>
                <li>Inspirações</li>
              </ul>
            </div>
            <div className="scope-card">
              <h3>Tecnologias</h3>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Mapbox / Google Maps</li>
                <li>AWS / Vercel</li>
              </ul>
            </div>
            <div className="scope-card">
              <h3>Metodologia</h3>
              <ul>
                <li>Scrum</li>
                <li>CI/CD</li>
                <li>Code Review</li>
                <li>Testes automatizados</li>
                <li>Deploy contínuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <CTA
        title="Quer entrar em contato?"
        description="Fale com a equipe do Enlace Tecnologia."
        buttonText="Fale conosco"
        buttonTo="/contato"
      />
    </>
  )
}

export default Sobre
