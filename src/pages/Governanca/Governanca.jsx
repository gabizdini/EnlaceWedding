import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './Governanca.css'

function Governanca() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Governanca de TI</span>
          <h1>Tecnologia com proposito, seguranca e governanca.</h1>
          <p>A Enlace busca alinhar tecnologia, estrategia de negocio, seguranca, privacidade e qualidade em todos os seus projetos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Papeis"
            title="Papeis de Governanca de TI"
            description="Conheca as responsabilidades de cada papel na governanca da empresa."
          />
          <div className="roles-grid">
            <div className="role-card">
              <h3>Diretoria / CEO</h3>
              <p>Define a estrategia geral da empresa e aprova investimentos em TI.</p>
            </div>
            <div className="role-card">
              <h3>Comite de TI</h3>
              <p>Supervisiona decisoes estrategicas de tecnologia e alinhamento com o negocio.</p>
            </div>
            <div className="role-card">
              <h3>Gerente de Projetos</h3>
              <p>Coordena entregas, prazos e recursos dos projetos de desenvolvimento.</p>
            </div>
            <div className="role-card">
              <h3>DPO / Encarregado de Dados</h3>
              <p>Garante conformidade com leis de protecao de dados e privacidade.</p>
            </div>
            <div className="role-card">
              <h3>Desenvolvedores</h3>
              <p>Constroem e mantêm as solucoes tecnicas da plataforma.</p>
            </div>
            <div className="role-card">
              <h3>UX/UI Designer</h3>
              <p>Projeta interfaces intuitivas e experiencias centradas no usuario.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Estrutura"
            title="Infraestrutura e Arquitetura"
            description="Visao geral da infraestrutura tecnologica que sustenta o Enlace Wedding."
          />
          <div className="infra-cards">
            <div className="infra-card">
              <h3>Principios de TI</h3>
              <p>Seguranca, escalabilidade, disponibilidade e melhoramento continuo guiam nossas decisoes tecnicas.</p>
            </div>
            <div className="infra-card">
              <h3>Arquitetura de TI</h3>
              <p>Arquitetura baseada em servicos, com separacao clara entre frontend, backend e dados.</p>
            </div>
            <div className="infra-card">
              <h3>Priorizacao de investimentos</h3>
              <p>Investimentos priorizados por impacto no negocio e retorno esperado.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Quer saber mais?"
        description="Conheca a gestao de TI da Enlace."
        buttonText="Ver Gestao de TI"
        buttonTo="/gestao-ti"
      />
    </>
  )
}

export default Governanca
