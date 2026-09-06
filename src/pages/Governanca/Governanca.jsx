import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './Governanca.css'

function Governanca() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Governança de TI</span>
          <h1>Tecnologia com propósito, segurança e governança.</h1>
          <p>A Enlace busca alinhar tecnologia, estratégia de negócio, segurança, privacidade e qualidade em todos os seus projetos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Papéis"
            title="Papéis de Governança de TI"
            description="Conheça as responsabilidades de cada papel na governança da empresa."
          />
          <div className="roles-grid">
            <div className="role-card">
              <h3>Diretoria / CEO</h3>
              <p>Define a estratégia geral da empresa e aprova investimentos em TI.</p>
            </div>
            <div className="role-card">
              <h3>Comite de TI</h3>
              <p>Supervisiona decisões estratégicas de tecnologia e alinhamento com o negócio.</p>
            </div>
            <div className="role-card">
              <h3>Gerente de Projetos</h3>
              <p>Coordena entregas, prazos e recursos dos projetos de desenvolvimento.</p>
            </div>
            <div className="role-card">
              <h3>DPO / Encarregado de Dados</h3>
              <p>Garante conformidade com leis de proteção de dados e privacidade.</p>
            </div>
            <div className="role-card">
              <h3>Desenvolvedores</h3>
              <p>Constroem e mantêm as soluções técnicas da plataforma.</p>
            </div>
            <div className="role-card">
              <h3>UX/UI Designer</h3>
              <p>Projeta interfaces intuitivas e experiências centradas no usuário.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Estrutura"
            title="Infraestrutura e Arquitetura"
            description="Visão geral da infraestrutura tecnológica que sustenta o Enlace Wedding."
          />
          <div className="infra-cards">
            <div className="infra-card">
              <h3>Princípios de TI</h3>
              <p>Segurança, escalabilidade, disponibilidade e melhoramento contínuo guiam nossas decisões técnicas.</p>
            </div>
            <div className="infra-card">
              <h3>Arquitetura de TI</h3>
              <p>Arquitetura baseada em serviços, com separação clara entre frontend, backend e dados.</p>
            </div>
            <div className="infra-card">
              <h3>Priorizacao de investimentos</h3>
              <p>Investimentos priorizados por impacto no negócio e retorno esperado.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Quer saber mais?"
        description="Conheça a gestão de TI da Enlace."
        buttonText="Ver Gestão de TI"
        buttonTo="/gestao-ti"
      />
    </>
  )
}

export default Governanca
