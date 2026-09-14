import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { BancaEnLinea } from './pages/BancaEnLinea'
import { Canales } from './pages/Canales'
import { Empresas } from './pages/Empresas'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Personas } from './pages/Personas'
import { Pymes } from './pages/Pymes'
import { QuienesSomos } from './pages/QuienesSomos'
import { SearchPage } from './pages/SearchPage'
import { Transparencia } from './pages/Transparencia'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/pymes" element={<Pymes />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/canales" element={<Canales />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/normas-de-transparencia" element={<Navigate to="/transparencia" replace />} />
          <Route path="/banca-en-linea" element={<BancaEnLinea />} />
          <Route path="/buscar" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
