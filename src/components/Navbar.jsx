import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ZENITH BONSAI
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/philosophy" className="nav-link" onClick={() => setIsOpen(false)}>
              Filosofía
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>
              Galería
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="nav-link" onClick={() => setIsOpen(false)}>
              Reservas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
