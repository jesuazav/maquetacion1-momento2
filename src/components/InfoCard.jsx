import './InfoCard.css'

function InfoCard({ title, content, icon: IconComponent }) {
  return (
    <div className="info-card">
      <div className="info-card-header">
        {IconComponent && <IconComponent size={40} className="info-card-icon" />}
        <h3 className="info-card-title">{title}</h3>
      </div>
      <p className="info-card-content">{content}</p>
    </div>
  )
}

export default InfoCard
