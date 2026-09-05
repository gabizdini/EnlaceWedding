import SectionTitle from '../../components/SectionTitle/SectionTitle'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import { FileText, Calendar, Wallet, Coins, Users, MapPin, Lightbulb, CheckCircle, Send } from '../../components/Icons'
import CTA from '../../components/CTA/CTA'
import './Recursos.css'

const resources = [
  { icon: <FileText />, title: 'Planejamento', description: 'Organize tarefas e prazos de forma simples com um checklist completo.' },
  { icon: <Calendar />, title: 'Cronograma', description: 'Monte um cronograma visual para acompanhar cada etapa do planejamento.' },
  { icon: <Wallet />, title: 'Orcamento e gastos', description: 'Controle cada centavo do seu casamento com categorias e metas.' },
  { icon: <Coins />, title: 'Controle de gastos', description: 'Acompanhe quanto gastou e o que ainda falta em tempo real.' },
  { icon: <Users />, title: 'Lista de convidados', description: 'Gerencie convites, confirmacoes e presenca de forma organizada.' },
  { icon: <MapPin />, title: 'Fornecedores locais', description: 'Encontre os melhores profissionais da sua regiao com avaliacoes.' },
  { icon: <Lightbulb />, title: 'Inspiracoes', description: 'Salve imagens e referencias de vestidos, decoracao, maquiagem e mais.' },
  { icon: <CheckCircle />, title: 'Meus fornecedores', description: 'Acompanhe os profissionais que voce ja contratou.' },
  { icon: <Send />, title: 'Localizacao', description: 'Veja a distancia dos fornecedores em relacao ao local do evento.' },
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
