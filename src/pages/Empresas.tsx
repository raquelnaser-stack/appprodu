import { PageHero } from '../components/PageHero'

export function Empresas() {
  return (
    <>
      <PageHero
        title="Banca Empresas"
        text="Soluciones de crédito, inversiones, comercio exterior y cash management para tesorerías que necesitan control y visibilidad."
      >
        <a className="pill pill-solid" href="/empresas/index.html" style={{ marginTop: 16, display: 'inline-flex' }}>
          Banca de empresas
        </a>
      </PageHero>
      <section className="section">
        <div className="product-grid">
          <article className="product" id="inversiones">
            <h3>Inversiones</h3>
            <p>Instrumentos de corto y mediano plazo para la liquidez corporativa.</p>
          </article>
          <article className="product" id="credito">
            <h3>Crédito y tarjetas</h3>
            <p>Líneas, cartas de crédito y tarjetas empresariales para capital de trabajo y gastos operativos.</p>
          </article>
          <article className="product" id="comercio">
            <h3>Corresponsalía y comercio exterior</h3>
            <p>Transferencias, cobranzas y acompañamiento para importar o exportar con respaldo internacional.</p>
          </article>
          <article className="product" id="cash">
            <h3>Cash Management</h3>
            <p>Recaudación, pagos masivos, conciliación y visibilidad de saldos para la tesorería.</p>
          </article>
          <article className="product" id="otros">
            <h3>Otros servicios</h3>
            <p>Nómina, recaudaciones y servicios transaccionales a la medida de tu operación.</p>
          </article>
        </div>
      </section>
    </>
  )
}
