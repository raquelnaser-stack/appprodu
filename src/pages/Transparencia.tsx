import { PageHero } from '../components/PageHero'

export function Transparencia() {
  return (
    <>
      <PageHero
        title="Normas de transparencia"
        text="Tasas, tarifas, calificaciones, estados financieros y canales de servicio al cliente, publicados para una relación clara con depositantes e inversionistas."
      />
      <section className="section">
        <div className="product-grid">
          <article className="product" id="tasas">
            <h3>Tasas de interés y tarifas</h3>
            <p>Condiciones vigentes de productos pasivos, activos y servicios.</p>
          </article>
          <article className="product" id="calificacion">
            <h3>Calificación de riesgo</h3>
            <p>Informes de BankWatch Ratings y PCR-Pacific Credit Rating.</p>
          </article>
          <article className="product" id="comparativos">
            <h3>Estados comparativos</h3>
            <p>Evolución patrimonial y de resultados para seguimiento público.</p>
          </article>
          <article className="product" id="auditados">
            <h3>Estados financieros auditados</h3>
            <p>Estados de Produbanco y subsidiarias por año fiscal.</p>
          </article>
          <article className="product" id="servicio">
            <h3>Servicio al cliente</h3>
            <p>Reclamos, tiempos de atención y contacto del defensor del cliente.</p>
          </article>
          <article className="product" id="cumplimiento">
            <h3>Cumplimiento normativo</h3>
            <p>Transparencia en prevención, OFAC, FATCA/CRS y normativa aplicable.</p>
          </article>
          <article className="product" id="seguro">
            <h3>Seguro de depósito</h3>
            <p>Cobertura COSEDE y acceso a la plataforma Edúcate para depositantes.</p>
          </article>
        </div>
      </section>
    </>
  )
}
