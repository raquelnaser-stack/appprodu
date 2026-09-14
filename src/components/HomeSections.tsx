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
                <span className="btn-secondary static-btn">Conoce más</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="promociones">
        <div className="promo-box">
          <div className="promo-head">
            <h2>Promociones Produbanco</h2>
            <span className="btn-primary static-btn">Ver todas</span>
          </div>
          <div className="promo-grid">
            {promotions.map((promo) => (
              <article className="promo-card" key={promo.title}>
                <img src={promo.image} alt={promo.title} />
                <h3>{promo.title}</h3>
                <p>{promo.text}</p>
                <div className="promo-foot">
                  <span className="btn-primary static-btn">Conoce Más</span>
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
                <span className="btn-secondary static-btn">Conoce más</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
