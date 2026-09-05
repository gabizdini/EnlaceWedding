import { Link } from 'react-router-dom'
import './CTA.css'

function CTA({ title, description, buttonText, buttonTo = '/' }) {
  return (
    <section className="cta-section">
      <div className="cta-container container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-description">{description}</p>
        <Link to={buttonTo} className="btn-primary cta-button">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}

export default CTA
