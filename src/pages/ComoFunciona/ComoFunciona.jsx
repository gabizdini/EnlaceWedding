import SectionTitle from '../../components/SectionTitle/SectionTitle'
import StepCard from '../../components/StepCard/StepCard'
import CTA from '../../components/CTA/CTA'
import './ComoFunciona.css'

const steps = [
  { number: '01', title: 'Conte-nos sobre seu casamento', description: 'Compartilhe a data, local e suas preferências para começarmos a planejar.' },
  { number: '02', title: 'Encontre fornecedores', description: 'Explore profissionais perto de você e compare avaliações e preços.' },
  { number: '03', title: 'Organize seu planejamento', description: 'Use checklist, orçamento e lista de convidados em um só lugar.' },
  { number: '04', title: 'Viva o seu grande dia', description: 'Aproveite cada momento com tudo organizado e pronto.' },
]

function ComoFunciona() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-badge">Como funciona</span>
          <h1>Como funciona o Enlace Wedding?</h1>
          <p>Em quatro passos simples, você começa a planejar o casamento dos seus sonhos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="steps-grid">
            {steps.map((s) => (
              <StepCard key={s.number} number={s.number} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Jornada do usuário"
            title="Do planejamento ao grande dia"
            description="Acompanhe como o Enlace Wedding facilita cada etapa do seu casamento."
          />
          <div className="journey-cards">
            <div className="journey-card">
              <div className="journey-icon">1</div>
              <h3>Cadastro simples</h3>
              <p>Crie sua conta em segundos e nos conte sobre o casamento.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon">2</div>
              <h3>Busca inteligente</h3>
              <p>Encontre fornecedores próximos com avaliações reais.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon">3</div>
              <h3>Organização total</h3>
              <p>Gerencie orçamento, convidados e tarefas em um painel único.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Quer conhecer os recursos da plataforma?"
        description="Explore todas as ferramentas disponíveis para planejar seu casamento."
        buttonText="Ver recursos"
        buttonTo="/recursos"
      />
    </>
  )
}

export default ComoFunciona
