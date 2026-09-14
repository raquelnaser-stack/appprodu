import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { navItems, socialLinks } from '../data'
import { Icon } from './Icon'

export function Header() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  function onSearch(event: FormEvent) {
    event.preventDefault()
    const value = query.trim()
    if (!value) return
    navigate(`/buscar?q=${encodeURIComponent(value)}`)
    setOpen(false)
  }

  return (
    <header>
      <div className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand" aria-label="Produbanco inicio">
            <img className="brand-logo" src="/original/logo.png" alt="Logo Produbanco Promerica" />
            <span className="country">Ecuador</span>
          </Link>

          <div className="top-actions">
            <nav className="socials" aria-label="Redes sociales">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Icon name={item.icon} />
                </a>
              ))}
            </nav>

            <form className="search" onSubmit={onSearch} role="search">
              <button type="submit" aria-label="Buscar">
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

            <button
              className="menu-toggle"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <nav className={`navbar${open ? ' open' : ''}`} aria-label="Principal">
        <div className="navbar-inner">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <NavLink to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
              {item.children ? (
                <div className="mega">
                  {item.children.map((child) => (
                    <Link key={child.to} to={child.to} onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
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
