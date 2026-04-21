import { useState, useEffect } from 'react'
import './BookingPage.css'

function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    experience: 'principiante',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) {
      localStorage.setItem('bookingForm', JSON.stringify(formData))
      console.log('Datos guardados en localStorage:', formData)
      
      // Limpiar formulario después de 2 segundos
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          fullName: '',
          email: '',
          experience: 'principiante',
          message: ''
        })
      }, 2000)
    }
  }, [submitted, formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validar que los campos obligatorios estén completos
    if (!formData.fullName.trim() || !formData.email.trim()) {
      alert('Por favor, completa todos los campos obligatorios')
      return
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, ingresa un email válido')
      return
    }

    setSubmitted(true)
  }

  return (
    <div className="booking-page">
      <section className="booking-header">
        <div className="booking-header-content">
          <h1 className="booking-title">Reserva un Taller</h1>
          <p className="booking-subtitle">
            Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
          </p>
        </div>
      </section>

      <section className="booking-form-section">
        <div className="booking-form-container">
          {submitted && (
            <div className="success-message">
              ¡Solicitud enviada exitosamente! Te contactaremos pronto.
            </div>
          )}
          
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Nombre completo</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                placeholder="Ej. Ana Silva"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience" className="form-label">Nivel de experiencia</label>
              <select
                id="experience"
                name="experience"
                className="form-select"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
                <option value="intermedio">Intermedio (Tengo experiencia básica)</option>
                <option value="avanzado">Avanzado (Tengo experiencia considerable)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje (Opcional)</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="¿Qué te gustaría aprender?"
                rows="6"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-submit">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BookingPage
