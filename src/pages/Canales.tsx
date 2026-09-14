import { channels } from '../data'
import { PageHero } from '../components/PageHero'

export function Canales() {
  return (
    <>
      <PageHero
        title="Canales de atención"
        text="Agencias, cajeros, corresponsales, kioscos, WhatsApp y canales digitales para atenderte donde te resulte más simple."
      />
      <section className="section">
        <div className="channel-grid">
          {channels.map((channel) => (
            <article className="channel" id={channel.id} key={channel.id}>
              <h3>{channel.title}</h3>
              <ul className="list">
                {channel.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className="channel" id="manuales">
            <h3>Manuales Produbanco</h3>
            <ul className="list">
              <li>Registro en web transaccional y app móvil.</li>
              <li>Transferencias, pagos y retiro sin tarjeta.</li>
              <li>Buenas prácticas de claves, tokens y dispositivos.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
