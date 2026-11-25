import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Kept for compatibility with the original components. */
  delay?: number
}

/** Scroll-revealed wrapper. App.tsx attaches the shared IntersectionObserver. */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <div className={`reveal ${className}`.trim()} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

export default Reveal
