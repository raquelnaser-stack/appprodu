export type NavLink = {
  label: string
  to: string
}

export type NavItem = {
  label: string
  to: string
  children?: NavLink[]
}

export const navItems: NavItem[] = [
  {
    label: 'Quiénes Somos',
    to: '/quienes-somos',
    children: [
      { label: 'Grupo Promerica', to: '/quienes-somos#grupo' },
      { label: 'Produbanco', to: '/quienes-somos' },
      { label: 'Reconocimientos', to: '/quienes-somos#reconocimientos' },
      { label: 'Nuestras Subsidiarias', to: '/quienes-somos#subsidiarias' },
      { label: 'Sostenibilidad', to: '/quienes-somos#sostenibilidad' },
      { label: 'Gobierno Corporativo', to: '/quienes-somos#gobierno' },
      { label: 'Oportunidades laborales', to: '/quienes-somos#talento' },
      { label: 'Noticias', to: '/quienes-somos#noticias' },
    ],
  },
  {
    label: 'Personas',
    to: '/personas',
    children: [
      { label: 'Cuentas', to: '/personas#cuentas' },
      { label: 'Créditos', to: '/personas#creditos' },
      { label: 'FlexiAhorro', to: '/personas#flexiahorro' },
      { label: 'Inversiones', to: '/personas#inversiones' },
      { label: 'Tarjetas', to: '/personas#tarjetas' },
      { label: 'Programas de recompensa', to: '/personas#recompensas' },
      { label: 'Seguros', to: '/personas#seguros' },
      { label: 'Mi Nómina', to: '/personas#nomina' },
      { label: 'Pago de servicios', to: '/personas#servicios' },
      { label: 'Promociones', to: '/personas#promociones' },
    ],
  },
  {
    label: 'Pymes',
    to: '/pymes',
    children: [
      { label: 'Cuenta Pro Pyme', to: '/pymes#cuenta' },
      { label: 'Líneas verdes', to: '/pymes#verdes' },
      { label: 'Tarjeta Visa Pyme', to: '/pymes#tarjeta' },
      { label: 'Créditos para tu empresa', to: '/pymes#creditos' },
    ],
  },
  {
    label: 'Empresas',
    to: '/empresas',
    children: [
      { label: 'Inversiones', to: '/empresas#inversiones' },
      { label: 'Crédito y tarjetas', to: '/empresas#credito' },
      { label: 'Corresponsalía y comercio exterior', to: '/empresas#comercio' },
      { label: 'Cash Management', to: '/empresas#cash' },
      { label: 'Otros servicios', to: '/empresas#otros' },
    ],
  },
  { label: 'Canales de atención', to: '/canales' },
  {
    label: 'Transparencia',
    to: '/transparencia',
    children: [
      { label: 'Tasas de interés y tarifas', to: '/transparencia#tasas' },
      { label: 'Calificación de riesgo', to: '/transparencia#calificacion' },
      { label: 'Estados comparativos', to: '/transparencia#comparativos' },
      { label: 'Estados financieros auditados', to: '/transparencia#auditados' },
      { label: 'Servicio al cliente', to: '/transparencia#servicio' },
      { label: 'Cumplimiento normativo', to: '/transparencia#cumplimiento' },
      { label: 'Seguro de depósito', to: '/transparencia#seguro' },
    ],
  },
]

export type Slide = {
  id: string
  src: string
  alt: string
  href?: string
  cta?: string
}

export const slides: Slide[] = [
  { id: 'banca', src: '/original/banner-banca.png', alt: 'Produbanco en línea' },
  {
    id: 'clases',
    src: '/original/banner-clases-desktop.png',
    alt: 'Regreso a clases Sierra 2026',
    href: '/personas#promociones',
    cta: 'Regístrate aquí',
  },
  { id: 'concert', src: '/original/banner-concert.jpg', alt: 'La Oreja de Van Gogh Tour' },
  {
    id: 'tarjeta',
    src: '/original/banner-3.jpg',
    alt: 'Solicita tu tarjeta de crédito',
    href: '/personas#tarjetas',
    cta: 'Solicítala aquí',
  },
  { id: 'home4', src: '/original/banner-4.jpg', alt: 'Promoción Produbanco' },
  { id: 'feb', src: '/original/banner-5.png', alt: 'Campaña Produbanco' },
  { id: 'antilavado', src: '/original/banner-6.png', alt: 'Prevención de lavado de activos' },
]

export const serviceCards = [
  {
    to: '/personas#tarjetas',
    title: 'Tarjeta de Crédito',
    text: 'Descubre la tarjeta de crédito que se adapte a tus necesidades',
    image: '/original/card-tarjetas.jpg',
  },
  {
    to: '/canales',
    title: 'Agencias y Cajeros',
    text: 'Visita nuestra red comercial de agencias y cajeros automáticos a nivel nacional',
    image: '/original/card-sucursales.jpg',
  },
  {
    to: '/canales#manuales',
    title: 'Manuales Produbanco',
    text: 'Manuales para registrarte en nuestra web transaccional - App Móvil y para realizar transacciones',
    image: '/original/card-manuales.jpg',
  },
]

export const promotions = [
  {
    title: 'Triple Milla o Cashback',
    text: 'al pagar la colegiatura de tus hijos',
    vigency: 'Vigencia 30/09/2026',
    image: '/original/promo-rac.jpg',
    to: '/personas#promociones',
  },
  {
    title: '20% OFF en Hey Dude',
    text: 'Comodidad con descuento',
    vigency: 'Vigencia 20/09/2026',
    image: '/original/promo-heydude.jpg',
    to: '/personas#promociones',
  },
  {
    title: 'Participa por bonos de consumo en',
    text: 'KAO SPORTS',
    vigency: 'Vigencia 13/09/2026',
    image: '/original/promo-kao.jpg',
    to: '/personas#promociones',
  },
]

export const infoModules = [
  {
    to: '/quienes-somos#sostenibilidad',
    title: 'Sostenibilidad',
    text: 'Te presentamos nuestra web de Sostenibilidad y Responsabilidad Social',
    image: '/original/mod-sostenibilidad.jpg',
  },
  {
    to: '/canales#digitales',
    title: 'Seguridad en Canales',
    text: 'Tips de seguridad para utilizar los canales tecnológicos de Produbanco',
    image: '/original/mod-seguridad.jpg',
  },
  {
    to: '/transparencia#seguro',
    title: 'Seguro de Depósitos',
    text: 'Conoce más sobre la cobertura de depósitos y la Plataforma Edúcate',
    image: '/original/mod-cosede.webp',
  },
]

export const channels = [
  {
    id: 'agencias',
    title: 'Agencias',
    items: [
      'En ventanilla: pago de servicios, cobro de cheques, depósitos y retiros.',
      'Con ejecutivo: apertura de cuentas, inversiones, ahorros programados o solicitud de crédito y tarjetas.',
    ],
  },
  {
    id: 'cajeros',
    title: 'Cajeros automáticos',
    items: [
      'Disponibles 24/7, sin horario de oficina.',
      'Consulta e impresión de saldos.',
      'Retiro de efectivo con y sin tarjeta de débito.',
      'Avances de efectivo de tu tarjeta de crédito.',
    ],
  },
  {
    id: 'multifuncion',
    title: 'Cajeros multifunción',
    items: [
      'Depósitos en efectivo y cheque.',
      'Retiros de efectivo con y sin tarjeta.',
      'Pago de tarjeta de crédito en efectivo y cheque.',
    ],
  },
  {
    id: 'corresponsal',
    title: 'Corresponsal no bancario',
    items: [
      'Puntos en tiendas de barrio, farmacias y bazares a nivel nacional.',
      'Depósitos en cuentas corrientes y de ahorros.',
      'Retiros sin tarjeta, consulta de saldos y pago de tarjetas.',
    ],
  },
  {
    id: 'kioscos',
    title: 'Kioscos',
    items: [
      'Certificados de tu cuenta.',
      'Reseteos y desbloqueos de claves.',
      'Consulta de saldos y videollamada con un asesor.',
    ],
  },
  {
    id: 'digitales',
    title: 'Canales digitales',
    items: [
      'App móvil y banca en línea.',
      'Transferencias nacionales e internacionales.',
      'Pago de más de 200 servicios.',
      'Retiros sin tarjeta, avances, diferidos y precancelaciones.',
    ],
  },
]

export const socialLinks = [
  { label: 'Facebook', icon: 'facebook' as const, href: 'https://www.facebook.com/Produbanco' },
  { label: 'Instagram', icon: 'instagram' as const, href: 'https://www.instagram.com/produbancoec' },
  { label: 'YouTube', icon: 'youtube' as const, href: 'https://www.youtube.com/user/ProdubancoEC' },
  { label: 'LinkedIn', icon: 'linkedin' as const, href: 'https://www.linkedin.com/company/produbanco' },
  { label: 'WhatsApp', icon: 'whatsapp' as const, href: 'https://api.whatsapp.com/send?phone=+59324009000&text=Hola' },
  { label: 'TikTok', icon: 'tiktok' as const, href: 'https://www.tiktok.com/@produbancoec' },
]
