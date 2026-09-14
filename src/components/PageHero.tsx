import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type PageHeroProps = {
  kicker?: string
  title: string
  text: string
  children?: ReactNode
}

export function PageHero({ kicker = 'Inicio', title, text, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="breadcrumbs">
          <Link to="/">{kicker}</Link> / {title}
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  )
}
