import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { roles, site, stats, socials } from '../data/profile'
import { Icon } from './Icon'

function useTypewriter(words: string[], typeSpeed = 85, eraseSpeed = 45, pause = 1600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () => {
          setText(word.slice(0, text.length + (deleting ? -1 : 1)))
        },
        deleting ? eraseSpeed : typeSpeed,
      )
    }
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, eraseSpeed, pause])

  return text
}

function TypedRoles() {
  const text = useTypewriter(roles)
  return (
    <p className="type-line">
      {text}
      <span className="cursor" aria-hidden="true" />
    </p>
  )
}

const ease = [0.21, 0.65, 0.36, 1] as const

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="hero-chip">
                <span className="pulse-dot" />
                {site.location} · Available for projects
              </span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
            >
              Hi, I'm <span className="gradient-text">{site.firstName}</span>
              <br />
              Software Developer & Entrepreneur
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
            >
              <TypedRoles />
            </motion.div>

            <motion.p
              className="hero-bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
            >
              I build software that changes how people live and work — from web and mobile apps to
              blockchain integrations and education platforms — with a mission to shape Rwanda's
              digital future and tell the world through code.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
            >
              <a className="btn btn-primary" href="#projects">
                View My Work
                <Icon name="arrowUpRight" size={18} />
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
            >
              {socials.map((s) => (
                <a
                  key={s.name}
                  className="social-link"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </motion.div>

            <motion.div
              className="stats-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <div className="portrait-wrap">
              <img
                src={site.profilePhoto}
                alt={`Portrait of ${site.name}, Software Developer`}
                onError={(e) => {
                  const el = e.currentTarget
                  el.style.display = 'none'
                  el.parentElement!.querySelector('.portrait-fallback')!.removeAttribute('hidden')
                }}
              />
              <div className="portrait-fallback" hidden>
                <div className="monogram">JM</div>
                <div className="portrait-hint">Add your photo → public/images/profile.jpg</div>
              </div>
            </div>

            <div className="floating-card float-1">
              <span className="float-icon" aria-hidden="true" style={{ background: 'rgba(34,211,238,.15)' }}>
                🚀
              </span>
              <div>
                <div className="float-label">Founder & CEO</div>
                <div className="float-sub">GN IntelleX · Kwanda Group</div>
              </div>
            </div>

            <div className="floating-card float-2">
              <span className="float-icon" aria-hidden="true" style={{ background: 'rgba(99,102,241,.18)' }}>
                💻
              </span>
              <div>
                <div className="float-label">Full-Stack Builder</div>
                <div className="float-sub">19+ projects on GitHub</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero