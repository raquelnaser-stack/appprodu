import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { slides } from '../data'
import { Icon } from './Icon'

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  const current = slides[index]

  return (
    <section className="hero" aria-label="Produbanco en línea y promociones">
      <div className="hero-shell">
        <aside className="login-panel">
          <div className="login-main">
            <h2>Produbanco enlínea</h2>
            <div className="login-actions">
              <Link className="btn-login btn-login-primary" to="/banca-en-linea?tipo=personas">
                Banca de Personas
              </Link>
              <Link className="btn-login btn-login-secondary" to="/banca-en-linea?tipo=empresas">
                Banca de Empresas
              </Link>
              <Link className="btn-login btn-login-secondary" to="/banca-en-linea?tipo=cash">
                Cash Management
              </Link>
            </div>
          </div>
          <p className="login-note">
            Cliente titular, ingresa tu número de cédula o RUC. Cliente adicional,
            ingresa tu número de cédula o RUC y el del titular. Si cuentas con
            nombre de usuario escoge la opción USUARIO e ingrésalo.
          </p>
        </aside>

        <div className="slider">
          {slides.map((slide, slideIndex) => (
            <article
              key={slide.id}
              className={`slide ${slideIndex === index ? 'active' : ''}`}
              aria-hidden={slideIndex !== index}
            >
              <img src={slide.src} alt={slide.alt} />
            </article>
          ))}
          {current?.cta ? (
            <span className="slide-cta static-btn">{current.cta}</span>
          ) : null}
          <button className="slider-btn prev static-btn" type="button" aria-label="Anterior">
            <Icon name="prev" />
          </button>
          <button className="slider-btn next static-btn" type="button" aria-label="Siguiente">
            <Icon name="next" />
          </button>
          <div className="dots">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.id}
                type="button"
                className={`static-btn ${slideIndex === index ? 'active' : ''}`}
                aria-label={`Promoción ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
