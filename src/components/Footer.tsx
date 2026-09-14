import { socialLinks } from '../data'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="consultas">
          <img src="/original/footer.png" alt="Icono de consultas" />
          <div>
            <p className="titulo-consulta">Call Center</p>
            <p className="numero-consulta">
              <a href="tel:+59324009000">02 400 9000</a>
            </p>
          </div>
        </div>
        <nav className="footer-socials" aria-label="Redes sociales">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <Icon name={item.icon} />
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Banco de la Producción S.A. | Av Simón Bolívar y Vía a Nayón
          Centro Corporativo EKOPARK Torre 1, Quito |{' '}
          <a href="https://www.bce.fin.ec/" target="_blank" rel="noreferrer">
            Banco Central del Ecuador
          </a>{' '}
          |{' '}
          <a href="https://www.superbancos.gob.ec/bancos/estadisticas/" target="_blank" rel="noreferrer">
            Superintendencia de Bancos del Ecuador
          </a>{' '}
          |{' '}
          <a
            href="https://www.bce.fin.ec/junta-de-politica-y-regulacion-financiera-y-monetaria/"
            target="_blank"
            rel="noreferrer"
          >
            Junta de Política y Regulación Financiera y Monetaria
          </a>
        </p>
        <img className="footer-star" src="/original/estrella.svg" alt="" />
      </div>
    </footer>
  )
}
