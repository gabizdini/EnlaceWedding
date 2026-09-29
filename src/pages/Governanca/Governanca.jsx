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
            subtitle="Equipe"
            title="Papéis de Governança de TI"
            description="Conheça os integrantes da equipe e as responsabilidades de cada um na governança da empresa."
          />
          <div className="roles-grid">
            <div className="role-card">
              <h3>Laurene</h3>
              <p className="role-position">Diretora/CEO</p>
              <p>Estratégia geral e decisões/investimentos em TI.</p>
            </div>
            <div className="role-card">
              <h3>Joice</h3>
              <p className="role-position">Gerente de Projetos</p>
              <p>Prazos, entregas, recursos e conformidade com LGPD.</p>
            </div>
            <div className="role-card">
              <h3>Gabrieli</h3>
              <p className="role-position">Desenvolvedora + UX/UI</p>
              <p>Frontend, backend e banco de dados; interfaces e experiência do usuário.</p>
            </div>
            <div className="role-card">
              <h3>Melissa</h3>
              <p className="role-position">Qualidade (QA) e Suporte</p>
              <p>Testes, monitoramento de incidentes e atendimento aos usuários.</p>
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
        title="Quer ver os processos e indicadores de TI?"
        description="Conheça os KPIs e processos críticos que sustentam o Enlace Wedding."
        buttonText="Ver Gestão de TI"
        buttonTo="/gestao-ti"
      />
    </>
  )
}

export default Governanca
