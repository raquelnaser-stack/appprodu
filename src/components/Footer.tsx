import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link to="/" className="brand" style={{ color: 'white', marginBottom: 12 }}>
            <Logo compact />
            <span className="brand-copy">
              <span className="brand-name" style={{ color: 'white' }}>
                Produbanco
              </span>
              <span className="brand-sub">Grupo Promerica</span>
            </span>
          </Link>
          <p style={{ fontSize: 14, lineHeight: 1.5, maxWidth: 280 }}>
            Banco con propósito. Generamos valor con enfoque sostenible para
            las personas, las empresas y el país.
          </p>
          <p style={{ marginTop: 16 }}>
            Call Center
            <br />
            <strong style={{ color: 'white', fontSize: 22 }}>02 400 9000</strong>
          </p>
        </div>
        <div>
          <h4>Personas</h4>
          <Link to="/personas#cuentas">Cuentas</Link>
          <Link to="/personas#tarjetas">Tarjetas</Link>
          <Link to="/personas#creditos">Créditos</Link>
          <Link to="/personas#promociones">Promociones</Link>
        </div>
        <div>
          <h4>Empresas y pymes</h4>
          <Link to="/pymes">Banca pymes</Link>
          <Link to="/empresas">Banca empresas</Link>
          <Link to="/empresas#cash">Cash Management</Link>
          <Link to="/banca-en-linea">Banca en línea</Link>
        </div>
        <div>
          <h4>El banco</h4>
          <Link to="/quienes-somos">Quiénes somos</Link>
          <Link to="/canales">Canales de atención</Link>
          <Link to="/transparencia">Normas de transparencia</Link>
          <Link to="/transparencia#seguro">Seguro de depósitos</Link>
        </div>
      </div>
      <div className="legal">
        Sitio de demostración inspirado en la banca pública de Produbanco. No
        es el portal transaccional oficial y no procesa operaciones reales.
      </div>
    </footer>
  )
}
