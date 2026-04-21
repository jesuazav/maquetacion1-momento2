import './GalleryCard.css'

function GalleryCard({ image, title }) {
  return (
    <div className="gallery-card">
      <div className="gallery-card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="gallery-card-placeholder" />
        )}
      </div>
      <div className="gallery-card-info">
        <h3 className="gallery-card-title">{title}</h3>
      </div>
    </div>
  )
}

export default GalleryCard
