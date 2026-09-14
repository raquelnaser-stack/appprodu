import { useMemo, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const labels = {
  personas: 'Banca de Personas',
  empresas: 'Banca de Empresas',
  cash: 'Cash Management',
}

export function BancaEnLinea() {
  const [params] = useSearchParams()
  const initial = (params.get('tipo') as keyof typeof labels) || 'personas'
  const [tipo, setTipo] = useState<keyof typeof labels>(
    initial in labels ? initial : 'personas',
  )
  const [mode, setMode] = useState<'cedula' | 'usuario'>('cedula')
  const [submitted, setSubmitted] = useState(false)

  const title = useMemo(() => labels[tipo], [tipo])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={onSubmit}>
        <h1>Produbanco enlínea</h1>
        <p style={{ margin: 0, color: '#666' }}>{title}</p>
        <div className="tabs">
          {(Object.keys(labels) as Array<keyof typeof labels>).map((key) => (
            <button
              key={key}
              type="button"
              className={tipo === key ? 'active' : ''}
              onClick={() => {
                setTipo(key)
                setSubmitted(false)
              }}
            >
              {labels[key].replace('Banca de ', '').replace('Banca ', '')}
            </button>
          ))}
        </div>
        <div className="tabs">
          <button type="button" className={mode === 'cedula' ? 'active' : ''} onClick={() => setMode('cedula')}>
            Cédula / RUC
          </button>
          <button type="button" className={mode === 'usuario' ? 'active' : ''} onClick={() => setMode('usuario')}>
            Usuario
          </button>
        </div>
        <label className="field">
          {mode === 'cedula' ? 'Número de cédula o RUC' : 'Usuario'}
          <input name="id" required autoComplete="off" />
        </label>
        {tipo !== 'personas' ? (
          <label className="field">
            Empresa / titular
            <input name="titular" autoComplete="off" />
          </label>
        ) : null}
        <label className="field">
          Clave
          <input name="clave" type="password" required autoComplete="off" />
        </label>
        <button className="pill pill-solid" type="submit" style={{ width: '100%' }}>
          Ingresar
        </button>
        {submitted ? (
          <p className="alert" style={{ marginTop: 14 }}>
            Esta pantalla es solo una demostración visual. No envía ni guarda
            credenciales y no se conecta al banco real.
          </p>
        ) : null}
        <p style={{ fontSize: 13, color: '#777', marginTop: 16 }}>
          <Link to="/">Volver al inicio</Link>
        </p>
      </form>
    </div>
  )
}
