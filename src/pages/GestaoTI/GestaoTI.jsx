import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './GestaoTI.css'

function GestaoTI() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Gestão de TI</span>
          <h1>Gestão de TI</h1>
          <p>Processos críticos e indicadores que garantem a excelência da plataforma.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Processos"
            title="Processos críticos"
            description="Os processos essenciais que sustentam o Enlace Wedding."
          />
          <div className="process-grid">
            <div className="process-card">
              <h3>Desenvolvimento e manutenção</h3>
              <p>Processo contínuo de criação, atualização e correção do software da plataforma.</p>
            </div>
            <div className="process-card">
              <h3>Segurança e proteção de dados</h3>
              <p>Garantia da segurança das informações dos usuários e conformidade com leis.</p>
            </div>
            <div className="process-card">
              <h3>Cadastro e validação de fornecedores</h3>
              <p>Processo de verificação e aprovação dos profissionais cadastrados.</p>
            </div>
            <div className="process-card">
              <h3>Gestão de incidentes e suporte</h3>
              <p>Monitoramento, resolução de problemas e atendimento aos usuários.</p>
            </div>
            <div className="process-card">
              <h3>Backup e recuperação de dados</h3>
              <p>Cópias de segurança regulares e plano de recuperação ante desastres.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Indicadores"
            title="KPIs"
            description="Indicadores chave de desempenho para acompanhar a saúde do sistema."
          />
          <div className="kpi-grid">
            <div className="kpi-card">
              <h3>Disponibilidade da plataforma</h3>
              <p>Percentual de tempo em que o sistema está acessível aos usuários.</p>
            </div>
            <div className="kpi-card">
              <h3>Tempo médio de resolução</h3>
              <p>Tempo necessario para resolver chamados de suporte.</p>
            </div>
            <div className="kpi-card">
              <h3>Usuários ativos</h3>
              <p>Número de usuários que utilizam a plataforma mensalmente.</p>
            </div>
            <div className="kpi-card">
              <h3>Taxa de conversao</h3>
              <p>Percentual de buscas que resultam em contato com fornecedor.</p>
            </div>
            <div className="kpi-card">
              <h3>Incidentes de segurança</h3>
              <p>Número de incidentes de segurança registrados no período.</p>
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

export default GestaoTI
