type IconProps = {
  className?: string
}

export function ArrowRight({ className = 'icon-arrow' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M1.5 8h12M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
    </svg>
  )
}

export function ArrowUp({ className = 'icon-arrow' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M8 14.5v-12M4 6.5l4-4 4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
    </svg>
  )
}

export function ArrowLeft({ className = 'icon-arrow' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M14.5 8h-12M6.5 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
    </svg>
  )
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6L16 16M16 4l-1.4 1.4M5.4 14.6L4 16"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M16.8 12.6A7.2 7.2 0 0 1 7.4 3.2a7.2 7.2 0 1 0 9.4 9.4Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
    </svg>
  )
}

export function ChevronLeft({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M10 2.5L4.5 8l5.5 5.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
    </svg>
  )
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M6 2.5L11.5 8 6 13.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
    </svg>
  )
}
