import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './CuidadosServicos.css'

function CuidadosServicos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Qualidade e serviços</span>
          <h1>Como cuidamos dos nossos serviços</h1>
          <p>Os compromissos que sustentam o atendimento, a estabilidade e a melhoria contínua da plataforma Enlace Wedding.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Nossos compromissos"
            title="Quatro práticas que sustentam o serviço"
            description="Do primeiro contato do usuário até a melhoria contínua: veja como a Enlace cuida da plataforma."
          />
          <div className="care-grid">
            <article className="care-card">
              <span className="care-number">Bloco 01</span>
              <h3>Atendimento e suporte</h3>
              <ul className="care-list">
                <li>
                  <strong>Como solicitar ajuda:</strong> pelo formulário da página{' '}
                  <Link to="/contato" className="care-link">Contato</Link> ou pelo e-mail
                  suporte@enlace.com.br, informando o que aconteceu e em qual etapa.
                </li>
                <li>
                  <strong>Horário de atendimento:</strong> segunda a sexta, das 9h às 18h
                  (horário de Brasília).
                </li>
                <li>
                  <strong>Prazo de primeira resposta:</strong> em situações críticas (plataforma
                  inacessível), respondemos em até <strong>4 horas úteis</strong>; nos demais
                  chamados, em até 1 dia útil.
                </li>
              </ul>
            </article>

            <article className="care-card">
              <span className="care-number">Bloco 02</span>
              <h3>Tratamento de falhas</h3>
              <ul className="care-list">
                <li>
                  <strong>Registro:</strong> todo problema vira um chamado com descrição, impacto,
                  responsável e histórico.
                </li>
                <li>
                  <strong>Priorização:</strong> crítico, alto, médio e baixo, conforme o impacto no
                  negócio.
                </li>
                <li>
                  <strong>Comunicação:</strong> o usuário é avisado na abertura do chamado e a cada
                  atualização relevante.
                </li>
                <li>
                  <strong>Recuperação:</strong> rollback, restauração de backup e monitoramento até
                  a total normalização do serviço.
                </li>
                <li>
                  <strong>Recorrências:</strong> falhas que se repetem passam por análise de causa
                  raiz e geram ação preventiva.
                </li>
              </ul>
            </article>

            <article className="care-card">
              <span className="care-number">Bloco 03</span>
              <h3>Mudanças com controle</h3>
              <ul className="care-list">
                <li>
                  <strong>Avaliação:</strong> impacto e risco são analisados antes de qualquer
                  alteração na plataforma.
                </li>
                <li>
                  <strong>Autorização:</strong> o gestor de projetos aprova a mudança e define a
                  data de liberação.
                </li>
                <li>
                  <strong>Testes:</strong> a qualidade (QA) valida em ambiente de homologação antes
                  da publicação.
                </li>
                <li>
                  <strong>Comunicação:</strong> o que muda, quando muda e o que esperar é informado
                  com antecedência aos usuários.
                </li>
              </ul>
            </article>

            <article className="care-card">
              <span className="care-number">Bloco 04</span>
              <h3>Qualidade e melhoria</h3>
              <div className="care-metrics">
                <div className="care-metric">
                  <span className="care-metric-label">Indicador 1 — Disponibilidade da plataforma</span>
                  <span className="care-metric-goal">Meta: ≥ 99,5% do tempo por mês</span>
                </div>
                <div className="care-metric">
                  <span className="care-metric-label">Indicador 2 — Tempo médio de resolução</span>
                  <span className="care-metric-goal">Meta: ≤ 24 horas úteis</span>
                </div>
              </div>
              <p>
                <strong>Próxima ação de melhoria:</strong> implantar alertas automáticos de
                monitoramento para detectar indisponibilidade antes dos usuários, com revisão mensal
                dos dois indicadores pela equipe de qualidade.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTA
        title="Precisa de ajuda com a plataforma?"
        description="Fale com a equipe de suporte do Enlace Tecnologia."
        buttonText="Fale conosco"
        buttonTo="/contato"
      />
    </>
  )
}

export default CuidadosServicos
