import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'

export function Pymes() {
  return (
    <>
      <PageHero
        title="Pymes"
        text="En minutos puedes abrir tu Cuenta Pro Pyme, sin papeleo de más, y operar las finanzas de tu negocio desde canales digitales."
      >
        <Link className="pill pill-solid" to="/banca-en-linea?tipo=empresas" style={{ marginTop: 16, display: 'inline-flex' }}>
          Abrir mi cuenta
        </Link>
      </PageHero>
      <section className="section">
        <div className="product-grid">
          <article className="product" id="cuenta">
            <h3>Cuenta Pro Pyme</h3>
            <p>Cuenta 100% digital, sin costo de apertura, para cobrar, pagar y controlar el flujo de tu empresa.</p>
          </article>
          <article className="product" id="verdes">
            <h3>Líneas verdes</h3>
            <p>Financiamiento para proyectos con impacto positivo en eficiencia energética y desarrollo sustentable.</p>
          </article>
          <article className="product" id="tarjeta">
            <h3>Tarjeta Visa Pyme</h3>
            <p>Capital de trabajo y compras del negocio, con acumulación de Produmillas para tu empresa.</p>
          </article>
          <article className="product" id="creditos">
            <h3>Créditos para tu empresa</h3>
            <p>Líneas y plazos según el ciclo de tu negocio, con asesores especializados para pymes.</p>
          </article>
        </div>
      </section>
    </>
  )
}
