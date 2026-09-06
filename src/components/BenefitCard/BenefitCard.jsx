import { Link } from 'react-router-dom'
import './BenefitCard.css'

function BenefitCard({ icon, title, description, link }) {
  const content = (
    <div className="benefit-card">
      <div className="benefit-icon">{icon}</div>
      <h4 className="benefit-title">{title}</h4>
      <p className="benefit-description">{description}</p>
      {link && <span className="benefit-link">Ver fornecedores →</span>}
    </div>
  )
  return link ? <Link to={link}>{content}</Link> : content
}

export default BenefitCard
