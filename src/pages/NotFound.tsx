import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="section" style={{ minHeight: 320 }}>
      <h1>Página no encontrada</h1>
      <p>El enlace no existe en este sitio de demostración.</p>
      <Link className="pill pill-solid" to="/" style={{ marginTop: 16, display: 'inline-flex' }}>
        Ir al inicio
      </Link>
    </section>
  )
}
