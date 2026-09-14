import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'

const products = [
  { id: 'cuentas', title: 'Cuentas', text: 'Cuentas de ahorros, corriente y digital para el día a día, con app y web transaccional.' },
  { id: 'creditos', title: 'Créditos', text: 'Consumo, vivienda, vehicular y liquidez, con plazos y cuotas pensados para tu presupuesto.' },
  { id: 'flexiahorro', title: 'FlexiAhorro', text: 'Ahorro programado para metas concretas, con débitos automáticos desde tu cuenta.' },
  { id: 'inversiones', title: 'Inversiones', text: 'Plazos fijos y alternativas de inversión para hacer rendir tu dinero con claridad.' },
  { id: 'tarjetas', title: 'Tarjetas', text: 'Crédito y débito con millas, cashback, diferidos y beneficios en comercios aliados.' },
  { id: 'recompensas', title: 'Programas de recompensa', text: 'Acumula Produmillas y canjéalas en viajes, productos y experiencias.' },
  { id: 'seguros', title: 'Seguros', text: 'Coberturas para tu familia, tu auto y tu patrimonio, contratadas junto a tus productos.' },
  { id: 'nomina', title: 'Mi Nómina', text: 'Recibe tu sueldo con beneficios preferentes en créditos, cuentas y tarjetas.' },
  { id: 'servicios', title: 'Pago de servicios', text: 'Luz, agua, telefonía y más de 200 recaudaciones desde la app o la web.' },
  { id: 'promociones', title: 'Promociones', text: 'Campañas vigentes de colegiaturas, comercios y alianzas con diferidos especiales.' },
]

export function Personas() {
  return (
    <>
      <PageHero
        title="Banca Personas"
        text="Cuentas, tarjetas, créditos y canales digitales para que manejes tu dinero con claridad, desde el celular o en agencia."
      >
        <Link className="pill pill-solid" to="/banca-en-linea?tipo=personas" style={{ marginTop: 16, display: 'inline-flex' }}>
          Ingresar a banca de personas
        </Link>
      </PageHero>
      <section className="section">
        <div className="product-grid">
          {products.map((product) => (
            <article className="product" id={product.id} key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
