type IconProps = {
  name:
    | 'facebook'
    | 'instagram'
    | 'youtube'
    | 'linkedin'
    | 'whatsapp'
    | 'tiktok'
    | 'search'
    | 'prev'
    | 'next'
}

export function Icon({ name }: IconProps) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (name === 'facebook') {
    return (
      <svg {...common} fill="currentColor" stroke="none" viewBox="0 0 24 24">
        <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    )
  }
  if (name === 'instagram') {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (name === 'youtube') {
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="10" rx="3" />
        <path d="M11 10.5 15 12l-4 1.5v-3Z" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (name === 'linkedin') {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M6 9h3v9H6zM7.5 4A1.8 1.8 0 1 1 7.5 7.6 1.8 1.8 0 0 1 7.5 4ZM11 9h2.8v1.2h.1c.4-.7 1.3-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.3V18h-3v-4c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18H11z" />
      </svg>
    )
  }
  if (name === 'tiktok') {
    return (
      <svg {...common}>
        <path d="M14 4v10.2a3.2 3.2 0 1 1-3.2-3.2c.3 0 .6 0 .9.1V8.7A7 7 0 0 0 17.5 11V8.2A5.5 5.5 0 0 1 14 6.6V4Z" />
      </svg>
    )
  }
  if (name === 'whatsapp') {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12.04 4A8 8 0 0 0 4.1 15.6L3 21l5.5-1.1A8 8 0 1 0 12.04 4Zm4.6 11.5c-.2.5-1 .9-1.4 1-.3.1-.7.1-1.1 0a13 13 0 0 1-6.3-4.5 5.3 5.3 0 0 1-1.1-2.8c0-.8.4-1.5 1-1.6.2 0 .4 0 .6 0h.5c.2 0 .4.2.5.6l.7 1.7c.1.2 0 .4-.1.6l-.3.4c-.1.2-.3.3-.1.6a9 9 0 0 0 2.6 2.6c.3.2.5.1.7 0l.5-.5c.2-.2.4-.2.6-.1l1.6.8c.3.2.4.3.4.5 0 .1 0 .3-.1.5Z" />
      </svg>
    )
  }
  if (name === 'search') {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.2-4.2" />
      </svg>
    )
  }
  if (name === 'prev') {
    return (
      <svg {...common} width={22} height={22}>
        <path d="M15 5 8 12l7 7" />
      </svg>
    )
  }
  return (
    <svg {...common} width={22} height={22}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  )
}
