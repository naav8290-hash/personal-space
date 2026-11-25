import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      let frame = 0
      let attempts = 0

      const scrollToTarget = () => {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempts < 20) {
          attempts += 1
          frame = window.requestAnimationFrame(scrollToTarget)
        }
      }

      frame = window.requestAnimationFrame(scrollToTarget)
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
