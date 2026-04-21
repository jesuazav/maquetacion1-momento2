import GalleryCard from '../components/GalleryCard'
import './GalleryPage.css'

function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: 'Arce Japonés',
      image: null
    },
    {
      id: 2,
      title: 'Pino Negro',
      image: null
    },
    {
      id: 3,
      title: 'Ficus Retusa',
      image: null
    },
    {
      id: 4,
      title: 'Olmo Chino',
      image: null
    },
    {
      id: 5,
      title: 'Enebro',
      image: null
    },
    {
      id: 6,
      title: 'Azalea',
      image: null
    }
  ]

  return (
    <div className="gallery-page">
      <section className="gallery-header">
        <div className="gallery-header-content">
          <h1 className="gallery-title">Nuestra Colección</h1>
          <p className="gallery-subtitle">
            Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.
          </p>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="gallery-grid-container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <GalleryCard
                key={item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
