import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { slides } from '../data'
import { Icon } from './Icon'

function BankCards() {
  return (
    <div className="cards-art" aria-hidden="true">
      <div className="bank-card silver">
        <span className="chip" />
        <span className="card-brand">Produbanco</span>
      </div>
      <div className="bank-card green">
        <span className="chip" />
        <span className="card-brand">Produbanco</span>
      </div>
    </div>
  )
}

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  const go = (direction: number) => {
    setIndex((value) => (value + direction + slides.length) % slides.length)
  }

  return (
    <section className="hero" aria-label="Produbanco en línea y promociones">
      <aside className="login-panel">
        <h2>
          Produbanco
          <br />
          enlínea
        </h2>
        <div className="login-actions">
          <Link className="pill pill-solid" to="/banca-en-linea?tipo=personas">
            Banca de Personas
          </Link>
          <Link className="pill pill-ghost" to="/banca-en-linea?tipo=empresas">
            Banca de Empresas
          </Link>
          <Link className="pill pill-ghost" to="/banca-en-linea?tipo=cash">
            Cash Management
          </Link>
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
            className={`slide slide-${slide.kind} ${slideIndex === index ? 'active' : ''}`}
            aria-hidden={slideIndex !== index}
          >
            {slide.kind === 'concert' ? (
              <>
                <div className="poster">
                  <div className="poster-people">
                    <div className="person" />
                    <div className="person" />
                    <div className="person" />
                    <div className="person" />
                  </div>
                  <div className="poster-title">
                    <small>Tantas cosas que contar Tour 2027</small>
                    <strong>
                      LA
                      <br />
                      OREJA
                      <br />
                      DE VAN
                      <br />
                      GOGH
                    </strong>
                  </div>
                </div>
                <div className="slide-copy">
                  <h3>
                    Compra tus entradas
                    <br />
                    <em>con tarjetas Produbanco</em>
                  </h3>
                  <BankCards />
                  <p>
                    Y difiere hasta
                    <br />
                    10 meses sin intereses
                    <br />+ 1 mes de gracia
                  </p>
                  <span className="fine">{slide.extra}</span>
                </div>
              </>
            ) : (
              <div className="slide-copy slide-generic">
                <small style={{ letterSpacing: 1, textTransform: 'uppercase', color: 'var(--lime)' }}>
                  {slide.eyebrow}
                </small>
                <h3>
                  {slide.title}
                  <br />
                  <em>{slide.highlight}</em>
                </h3>
                {slide.kind === 'cards' ? <BankCards /> : null}
                <p style={{ fontSize: 20, fontWeight: 500 }}>{slide.body}</p>
                {slide.cta && slide.href ? (
                  <Link className="pill pill-solid" to={slide.href} style={{ width: 'fit-content' }}>
                    {slide.cta}
                  </Link>
                ) : null}
              </div>
            )}
          </article>
        ))}

        <button className="slider-btn prev" type="button" onClick={() => go(-1)} aria-label="Anterior">
          <Icon name="prev" />
        </button>
        <button className="slider-btn next" type="button" onClick={() => go(1)} aria-label="Siguiente">
          <Icon name="next" />
        </button>
        <div className="dots">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.id}
              type="button"
              className={slideIndex === index ? 'active' : ''}
              aria-label={`Ir a la promoción ${slideIndex + 1}`}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
