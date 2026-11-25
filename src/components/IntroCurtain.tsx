import { useEffect, useState } from 'react'

type Phase = 'show' | 'go' | 'done'

/** Editorial curtain that lifts once the intro has played. */
export function IntroCurtain({ name, subtitle }: { name: string; subtitle: string }) {
  const [phase, setPhase] = useState<Phase>('show')

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => setPhase('go'), reduce ? 250 : name.length * 55 + 1200)
    return () => window.clearTimeout(timer)
  }, [name])

  useEffect(() => {
    if (phase !== 'go') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => setPhase('done'), reduce ? 0 : 1100)
    return () => window.clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    document.body.classList.toggle('locked', phase !== 'done')
    return () => document.body.classList.remove('locked')
  }, [phase])

  if (phase === 'done') return null

  return (
    <div className={`intro-curtain${phase === 'go' ? ' go' : ''}`} aria-hidden="true">
      <div className="intro-name">
        {[...name].map((letter, i) => (
          <span key={i} style={{ animationDelay: `${i * 55}ms` }}>
            {letter === ' ' ? '\u00a0' : letter}
          </span>
        ))}
      </div>
      <small>{subtitle}</small>
    </div>
  )
}

export default IntroCurtain
