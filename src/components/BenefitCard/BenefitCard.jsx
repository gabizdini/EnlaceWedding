import './BenefitCard.css'

function BenefitCard({ icon, title, description }) {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{icon}</div>
      <h4 className="benefit-title">{title}</h4>
      <p className="benefit-description">{description}</p>
    </div>
  )
}

export default BenefitCard
