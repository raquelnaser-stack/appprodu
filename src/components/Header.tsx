import { useState, type FormEvent } from 'react'
import { navItems, socialLinks } from '../data'
import { Icon } from './Icon'

export function Header() {
  const [query, setQuery] = useState('')

  function onSearch(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <header>
      <div className="topbar">
        <div className="topbar-inner">
          <span className="brand static-link" aria-label="Produbanco">
            <img className="brand-logo" src="/original/logo.png" alt="Logo Produbanco Promerica" />
            <span className="country">Ecuador</span>
          </span>

          <div className="top-actions">
            <nav className="socials" aria-label="Redes sociales">
              {socialLinks.map((item) => (
                <span key={item.label} className="static-link" aria-label={item.label}>
                  <Icon name={item.icon} />
                </span>
              ))}
            </nav>

            <form className="search" onSubmit={onSearch} role="search">
              <button type="button" className="static-btn" aria-label="Buscar">
                <Icon name="search" />
              </button>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar"
                aria-label="Buscar"
              />
            </form>

            <img className="flag-img" src="/original/ecuador.png" alt="Bandera Ecuador" />

            <button className="menu-toggle static-btn" type="button" aria-label="Menú">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <nav className="navbar open" aria-label="Principal">
        <div className="navbar-inner">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <span className="static-link">{item.label}</span>
              {item.children ? (
                <div className="mega">
                  {item.children.map((child) => (
                    <span className="static-link" key={child.to}>
                      {child.label}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}
