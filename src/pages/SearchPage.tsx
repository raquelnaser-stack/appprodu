import { Link, useSearchParams } from 'react-router-dom'
import { navItems } from '../data'
import { PageHero } from '../components/PageHero'

export function SearchPage() {
  const [params] = useSearchParams()
  const query = (params.get('q') || '').trim().toLowerCase()
  const results = navItems
    .flatMap((item) => [
      { label: item.label, to: item.to },
      ...(item.children ?? []),
    ])
    .filter((item) => !query || item.label.toLowerCase().includes(query))

  return (
    <>
      <PageHero
        title="Buscar"
        text={query ? `Resultados para “${query}”.` : 'Escribe un término en el buscador de la cabecera.'}
      />
      <section className="section">
        <div className="product-grid">
          {results.map((item) => (
            <Link className="product" to={item.to} key={`${item.to}-${item.label}`}>
              <h3>{item.label}</h3>
              <p>Ir a la sección</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
