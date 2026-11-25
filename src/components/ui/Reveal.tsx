import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealTag =
  | 'div'
  | 'figure'
  | 'article'
  | 'li'
  | 'span'
  | 'p'
  | 'header'
  | 'section'
  | 'blockquote'
  | 'ol'
  | 'ul'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: 'up' | 'fade' | 'image'
  delay?: number
  style?: CSSProperties
  as?: RevealTag
}

export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  style,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`${className}${visible ? ' is-visible' : ''}`.trim()}
      data-reveal={variant}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
