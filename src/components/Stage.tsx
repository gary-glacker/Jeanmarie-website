import { useEffect, useRef } from 'react'
import type { Chapter, PageConfig } from '../data/pages'

const TILT = [-18, 22, -24, 20, -20, 24, -20, 0]

interface StageProps {
  chapter: Chapter
  stage: PageConfig['stage']
  index: number
}

/** Sticky 3D visual that turns with the scroll and the pointer. */
export function Stage({ chapter, stage, index }: StageProps) {
  const rigRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rig = rigRef.current
    if (!rig) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let mx = 0
    let my = 0
    let cx = 0
    let cy = 0
    let frame = 0

    const onMove = (e: PointerEvent) => {
      mx = e.clientX / window.innerWidth - 0.5
      my = e.clientY / window.innerHeight - 0.5
    }

    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      const targetY = TILT[index % TILT.length] + (reduce ? 0 : mx * 28)
      const targetX = reduce ? 0 : -my * 16
      const wobble = reduce ? 0 : Math.sin(window.scrollY / 260) * 6

      cy += (targetY + wobble - cy) * 0.07
      cx += (targetX - cx) * 0.07
      rig.style.setProperty('--rz', `${window.scrollY / 5}deg`)
      rig.style.transform = `rotateY(${cy}deg) rotateX(${cx}deg) translateZ(${Math.sin(p * Math.PI * 6) * 30}px)`
      frame = window.requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    frame = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.cancelAnimationFrame(frame)
    }
  }, [index])

  return (
    <div className="stage">
      <div className="rig" ref={rigRef}>
        <div className="halo" aria-hidden="true" />
        <div className="ring" aria-hidden="true" />
        <div className="stage-word" aria-hidden="true">
          {chapter.word}
        </div>
        <img src={stage.src} alt={stage.alt} />
        <div className="stage-meta">
          <span className="float-tag">{chapter.tag}</span>
          <span className="rule" aria-hidden="true" />
          <span className="float-chip">{chapter.chip}</span>
        </div>
      </div>
    </div>
  )
}

export default Stage
