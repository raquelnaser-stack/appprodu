type LogoProps = {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <svg
      width={compact ? 28 : 36}
      height={compact ? 28 : 36}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <path
        d="M32 4 L40 24 L60 32 L40 40 L32 60 L24 40 L4 32 L24 24 Z"
        fill="#8dc53f"
      />
      <path
        d="M32 14 L36.5 26.5 L49 32 L36.5 37.5 L32 50 L27.5 37.5 L15 32 L27.5 26.5 Z"
        fill="#1a7a3c"
      />
    </svg>
  )
}
