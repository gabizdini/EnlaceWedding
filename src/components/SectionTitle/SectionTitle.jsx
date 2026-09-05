import './SectionTitle.css'

function SectionTitle({ subtitle, title, description, center = true }) {
  return (
    <div className={`section-title ${center ? 'center' : ''}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-heading">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionTitle
