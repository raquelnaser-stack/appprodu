import { PageHero } from '../components/PageHero'

export function QuienesSomos() {
  return (
    <>
      <PageHero
        title="Quiénes somos"
        text="Produbanco es una de las instituciones financieras más relevantes de Ecuador. La excelencia en el servicio, la solidez y la integridad definen nuestra forma de acompañar a clientes y colaboradores."
      />
      <section className="section" id="grupo">
        <div className="stat-grid">
          <div className="stat">
            <b>1978</b>
            <span>Inicio de operaciones</span>
          </div>
          <div className="stat">
            <b>AA+ / AAA</b>
            <span>Calificaciones de riesgo</span>
          </div>
          <div className="stat">
            <b>2014</b>
            <span>Integración a Grupo Promerica</span>
          </div>
          <div className="stat">
            <b>3 valores</b>
            <span>Compromiso, innovación y excelencia</span>
          </div>
        </div>
        <p>
          Desde 1978 operamos en el sector corporativo y, con los años,
          ampliamos segmentos y cobertura geográfica. En 2014, Promerica
          Financial Corporation adquirió la mayoría de las acciones e integró
          la operación con Banco Promerica Ecuador, conservando el nombre y la
          trayectoria de Produbanco.
        </p>
        <p>
          Nuestro propósito es generar valor con enfoque sostenible para
          trascender la vida de las personas.
        </p>
      </section>
      <section className="section" id="reconocimientos">
        <h2>Reconocimientos y gobierno</h2>
        <div className="product-grid">
          <article className="product" id="gobierno">
            <h3>Gobierno corporativo</h3>
            <p>
              Políticas, comités y prácticas de control que sostienen una
              gestión transparente y responsable.
            </p>
          </article>
          <article className="product" id="sostenibilidad">
            <h3>Sostenibilidad</h3>
            <p>
              La sostenibilidad forma parte del plan estratégico: acompañamos
              a personas y empresas en una transición más verde.
            </p>
          </article>
          <article className="product" id="subsidiarias">
            <h3>Nuestras subsidiarias</h3>
            <p>
              Empresas de servicios auxiliares y canales de recaudación que
              complementan la oferta del banco a nivel nacional.
            </p>
          </article>
          <article className="product" id="talento">
            <h3>Talento y noticias</h3>
            <p id="noticias">
              Oportunidades laborales y novedades institucionales para quienes
              quieren crecer con nosotros.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
