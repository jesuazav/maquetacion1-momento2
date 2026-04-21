import { useNavigate } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate()

  const handleBookingClick = () => {
    navigate('/booking')
  }

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">El arte de la paciencia</h1>
          <p className="hero-description">
            Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.
          </p>
          <button className="hero-button" onClick={handleBookingClick}>
            Reserva un taller
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
