import { Star } from '../Icons'
import './VendorCard.css'

function VendorCard({ name, category, rating, distance }) {
  return (
    <div className="vendor-card">
      <div className="vendor-avatar">
        <span>{name.charAt(0)}</span>
      </div>
      <div className="vendor-info">
        <h4 className="vendor-name">{name}</h4>
        <span className="vendor-category">{category}</span>
        <div className="vendor-meta">
          <span className="vendor-rating">
            <Star className="star-icon" /> {rating}
          </span>
          <span className="vendor-distance">{distance}</span>
        </div>
      </div>
    </div>
  )
}

export default VendorCard
