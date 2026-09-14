import { Link } from 'react-router-dom'
import { infoModules, promotions, serviceCards } from '../data'

function Media({ type }: { type: 'cards' | 'sky' | 'office' }) {
  if (type === 'cards') {
    return (
      <div className="media cards">
        <div className="cards-art" style={{ padding: 24 }}>
          <div className="bank-card silver" />
          <div className="bank-card green" />
        </div>
      </div>
    )
  }
  if (type === 'sky') {
    return <div className="media sky" />
  }
  return <div className="media office" />
}

export function HomeSections() {
  return (
    <>
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="cards-row">
          {serviceCards.map((card) => (
            <Link className="media-card" to={card.to} key={card.title}>
              <Media type={card.image} />
              <div className="media-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <section className="section" id="promociones">
        <h2>Promociones Produbanco</h2>
        <div className="promo-grid" style={{ marginTop: 18 }}>
          {promotions.map((promo) => (
            <article className={`promo ${promo.tone}`} key={promo.title}>
              <div>
                <h3 style={{ margin: '0 0 8px', fontSize: 26 }}>{promo.title}</h3>
                <p style={{ margin: 0 }}>{promo.text}</p>
              </div>
              <span>{promo.vigency}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="info-grid">
          {infoModules.map((module) => (
            <Link className="info-card" to={module.to} key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="callout">
        <div className="callout-inner">
          <div>
            <div>Call Center</div>
            <strong>02 400 9000</strong>
          </div>
          <Link className="pill pill-solid" to="/canales">
            Ver canales de atención
          </Link>
        </div>
      </div>
    </>
  )
}
