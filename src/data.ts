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
  kind: 'concert' | 'cards' | 'classes' | 'security' | 'image'
  eyebrow?: string
  title: string
  highlight?: string
  body: string
  extra?: string
  cta?: string
  href?: string
}

export const slides: Slide[] = [
  {
    id: 'concert',
    kind: 'concert',
    eyebrow: 'Tantas cosas que contar · Tour 2027',
    title: 'Compra tus entradas',
    highlight: 'con tarjetas Produbanco',
    body: 'Y difiere hasta 10 meses sin intereses + 1 mes de gracia',
    extra: 'Adquiere tus entradas en: www.ticketshow.com.ec',
  },
  {
    id: 'classes',
    kind: 'classes',
    eyebrow: 'Regreso a clases Sierra 2026',
    title: 'Triple milla o cashback',
    highlight: 'en la colegiatura de tus hijos',
    body: 'Paga con tus tarjetas Produbanco y acumula beneficios hasta el 30/09/2026.',
    cta: 'Ver promoción',
    href: '/personas#promociones',
  },
  {
    id: 'cards',
    kind: 'cards',
    eyebrow: 'Tarjetas de crédito',
    title: 'Una tarjeta para cada momento',
    highlight: 'de tu vida',
    body: 'Millas, cashback y diferidos. Elige el plástico que se adapta a tu estilo.',
    cta: 'Conocer tarjetas',
    href: '/personas#tarjetas',
  },
  {
    id: 'security',
    kind: 'security',
    eyebrow: 'Tu seguridad primero',
    title: 'Nunca compartas claves',
    highlight: 'ni códigos de un solo uso',
    body: 'Produbanco no solicita información confidencial por correo, SMS o redes sociales.',
    cta: 'Tips de seguridad',
    href: '/canales#digitales',
  },
]

export const serviceCards = [
  {
    to: '/personas#tarjetas',
    title: 'Tarjeta de Crédito',
    text: 'Descubre la tarjeta que se adapte a tus necesidades',
    image: 'cards' as const,
  },
  {
    to: '/canales',
    title: 'Agencias y Cajeros',
    text: 'Visita nuestra red comercial de agencias y cajeros a nivel nacional',
    image: 'sky' as const,
  },
  {
    to: '/canales#manuales',
    title: 'Manuales Produbanco',
    text: 'Guías para registrarte en la web transaccional, la app y operar con seguridad',
    image: 'office' as const,
  },
]

export const promotions = [
  {
    title: 'Triple milla o cashback',
    text: 'Al pagar la colegiatura de tus hijos',
    vigency: 'Vigencia 30/09/2026',
    tone: 'green' as const,
  },
  {
    title: 'Gana 1 MacBook Neo',
    text: '1 Gift Card PUMA o SKOLE o 1 mochila JANSPORT',
    vigency: 'Vigencia 31/08/2026',
    tone: 'dark' as const,
  },
  {
    title: 'Bonos de consumo',
    text: 'Participa por bonos en KAO SPORTS',
    vigency: 'Vigencia 13/09/2026',
    tone: 'lime' as const,
  },
]

export const infoModules = [
  {
    to: '/quienes-somos#sostenibilidad',
    title: 'Sostenibilidad',
    text: 'Conoce nuestra web de sostenibilidad y responsabilidad social',
  },
  {
    to: '/canales#digitales',
    title: 'Seguridad en canales',
    text: 'Tips para usar con confianza la app, la web y los cajeros',
  },
  {
    to: '/transparencia#seguro',
    title: 'Seguro de depósitos',
    text: 'Cobertura de depósitos y la plataforma Edúcate de COSEDE',
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
  { label: 'Facebook', icon: 'facebook' as const, href: 'https://www.facebook.com/produbanco' },
  { label: 'Instagram', icon: 'instagram' as const, href: 'https://www.instagram.com/produbanco' },
  { label: 'YouTube', icon: 'youtube' as const, href: 'https://www.youtube.com/@produbanco' },
  { label: 'LinkedIn', icon: 'linkedin' as const, href: 'https://www.linkedin.com/company/produbanco' },
  { label: 'TikTok', icon: 'tiktok' as const, href: 'https://www.tiktok.com/@produbanco' },
]
