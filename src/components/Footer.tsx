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
              <span className="static-link">02 400 9000</span>
            </p>
          </div>
        </div>
        <nav className="footer-socials" aria-label="Redes sociales">
          {socialLinks.map((item) => (
            <span key={item.label} className="static-link" aria-label={item.label}>
              <Icon name={item.icon} />
            </span>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Banco de la Producción S.A. | Av Simón Bolívar y Vía a Nayón
          Centro Corporativo EKOPARK Torre 1, Quito |{' '}
          <span className="static-link">Banco Central del Ecuador</span> |{' '}
          <span className="static-link">Superintendencia de Bancos del Ecuador</span> |{' '}
          <span className="static-link">Junta de Política y Regulación Financiera y Monetaria</span>
        </p>
        <img className="footer-star" src="/original/estrella.svg" alt="" />
      </div>
    </footer>
  )
}
