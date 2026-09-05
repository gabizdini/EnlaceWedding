import SectionTitle from '../../components/SectionTitle/SectionTitle'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import CTA from '../../components/CTA/CTA'
import './Recursos.css'

const resources = [
  { icon: '\uD83D\uDCC4', title: 'Planejamento', description: 'Organize tarefas e prazos de forma simples com um checklist completo.' },
  { icon: '\uD83D\uDCC5', title: 'Cronograma', description: 'Monte um cronograma visual para acompanhar cada etapa do planejamento.' },
  { icon: '\uD83D\uDCB3', title: 'Orcamento e gastos', description: 'Controle cada centavo do seu casamento com categorias e metas.' },
  { icon: '\uD83D\uDCB0', title: 'Controle de gastos', description: 'Acompanhe quanto gastou e o que ainda falta em tempo real.' },
  { icon: '\uD83D\uDC65', title: 'Lista de convidados', description: 'Gerencie convites, confirmacoes e presenca de forma organizada.' },
  { icon: '\uD83D\uDCCD', title: 'Fornecedores locais', description: 'Encontre os melhores profissionais da sua regiao com avaliacoes.' },
  { icon: '\uD83D\uDCA1', title: 'Inspiracoes', description: 'Salve imagens e referencias de vestidos, decoracao, maquiagem e mais.' },
  { icon: '\u2705', title: 'Meus fornecedores', description: 'Acompanhe os profissionais que voce ja contratou.' },
  { icon: '\uD83D\uDCEF', title: 'Localizacao', description: 'Veja a distancia dos fornecedores em relacao ao local do evento.' },
]

function Recursos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Plataforma</span>
          <h1>Recursos do Enlace Wedding</h1>
          <p>Ferramentas completas para voce planejar cada detalhe do seu casamento.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Funcionalidades"
            title="Tudo em um so lugar"
            description="Explore todos os recursos disponiveis na plataforma."
          />
          <div className="resources-grid">
            {resources.map((r) => (
              <FeatureCard key={r.title} icon={r.icon} title={r.title} description={r.description} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Quer conhecer mais?"
        description="Comece a planejar e descubra tudo que o Enlace pode fazer por voce."
        buttonText="Comecar a planejar"
        buttonTo="/"
      />
    </>
  )
}

export default Recursos
