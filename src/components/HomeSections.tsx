import { Link } from 'react-router-dom'
import { infoModules, promotions, serviceCards } from '../data'

export function HomeSections() {
  return (
    <>
      <section className="section">
        <div className="cards-row">
          {serviceCards.map((card) => (
            <article className="info-tile" key={card.title}>
              <img src={card.image} alt={card.title} />
              <div className="info-tile-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link className="btn-secondary" to={card.to}>
                  Conoce más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="promociones">
        <div className="promo-box">
          <div className="promo-head">
            <h2>Promociones Produbanco</h2>
            <Link className="btn-primary" to="/personas#promociones">
              Ver todas
            </Link>
          </div>
          <div className="promo-grid">
            {promotions.map((promo) => (
              <article className="promo-card" key={promo.title}>
                <img src={promo.image} alt={promo.title} />
                <h3>{promo.title}</h3>
                <p>{promo.text}</p>
                <div className="promo-foot">
                  <Link className="btn-primary" to={promo.to}>
                    Conoce Más
                  </Link>
                  <span>{promo.vigency}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cards-row">
          {infoModules.map((module) => (
            <article className="info-tile" key={module.title}>
              <img src={module.image} alt={module.title} />
              <div className="info-tile-body">
                <h3>{module.title}</h3>
                <p>{module.text}</p>
                <Link className="btn-secondary" to={module.to}>
                  Conoce más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
