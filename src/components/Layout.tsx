import { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function Layout() {
  const [cookies, setCookies] = useState(false)

  useEffect(() => {
    setCookies(!window.localStorage.getItem('pb-cookies'))
  }, [])

  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <ScrollManager />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      {cookies ? (
        <div className="cookies">
          <p style={{ margin: 0, fontSize: 14 }}>
            Usamos cookies técnicas para recordar tu sesión de navegación en
            este sitio de demostración.
          </p>
          <button
            className="pill pill-solid"
            type="button"
            onClick={() => {
              window.localStorage.setItem('pb-cookies', '1')
              setCookies(false)
            }}
          >
            Aceptar
          </button>
        </div>
      ) : null}
    </>
  )
}
