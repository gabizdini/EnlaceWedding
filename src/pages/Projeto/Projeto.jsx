import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './Projeto.css'

function Projeto() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Projeto</span>
          <h1>Projeto Enlace Wedding</h1>
          <p>Apresentação do projeto simulado para o cliente fictício.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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

      <section className="section section-alt">
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
      </section>

      <CTA
        title="Quer entrar em contato?"
        description="Fale com a equipe do Enlace Tecnologia."
        buttonText="Fale conosco"
        buttonTo="/contato"
      />
    </>
  )
}

export default Projeto
