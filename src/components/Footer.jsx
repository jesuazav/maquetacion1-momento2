import { Mail, MapPin, Phone } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; {currentYear} Zenith Bonsai Studio.</p>
      </div>
    </footer>
  )
}

export default Footer
