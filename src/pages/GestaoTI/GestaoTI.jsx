import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './GestaoTI.css'

function GestaoTI() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Gestao de TI</span>
          <h1>Gestao de TI</h1>
          <p>Processos criticos e indicadores que garantem a excelencia da plataforma.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Processos"
            title="Processos criticos"
            description="Os processos essenciais que sustentam o Enlace Wedding."
          />
          <div className="process-grid">
            <div className="process-card">
              <h3>Desenvolvimento e manutencao</h3>
              <p>Processo continuo de criacao, atualizacao e correcao do software da plataforma.</p>
            </div>
            <div className="process-card">
              <h3>Seguranca e protecao de dados</h3>
              <p>Garantia da seguranca das informacoes dos usuarios e conformidade com leis.</p>
            </div>
            <div className="process-card">
              <h3>Cadastro e validacao de fornecedores</h3>
              <p>Processo de verificacao e aprovacao dos profissionais cadastrados.</p>
            </div>
            <div className="process-card">
              <h3>Gestao de incidentes e suporte</h3>
              <p>Monitoramento, resolucao de problemas e atendimento aos usuarios.</p>
            </div>
            <div className="process-card">
              <h3>Backup e recuperacao de dados</h3>
              <p>Copias de seguranca regulares e plano de recuperacao ante desastres.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Indicadores"
            title="KPIs"
            description="Indicadores chave de desempenho para acompanhar a saude do sistema."
          />
          <div className="kpi-grid">
            <div className="kpi-card">
              <h3>Disponibilidade da plataforma</h3>
              <p>Percentual de tempo em que o sistema esta acessivel aos usuarios.</p>
            </div>
            <div className="kpi-card">
              <h3>Tempo medio de resolucao</h3>
              <p>Tempo necessario para resolver chamados de suporte.</p>
            </div>
            <div className="kpi-card">
              <h3>Usuarios ativos</h3>
              <p>Numero de usuarios que utilizam a plataforma mensalmente.</p>
            </div>
            <div className="kpi-card">
              <h3>Taxa de conversao</h3>
              <p>Percentual de buscas que resultam em contato com fornecedor.</p>
            </div>
            <div className="kpi-card">
              <h3>Incidentes de seguranca</h3>
              <p>Numero de incidentes de seguranca registrados no periodo.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Quer ver a governanca?"
        description="Conheca os papeis e estrutura de governanca de TI."
        buttonText="Ver Governanca"
        buttonTo="/governanca"
      />
    </>
  )
}

export default GestaoTI
