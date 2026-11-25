import { useEffect, useState } from 'react'
import type { PageConfig } from '../data/pages'

interface NavbarProps {
  page: PageConfig
  active: number
}

export function Navbar({ page, active }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const links = page.chapters.filter((chapter) => chapter.nav !== 'Intro')

  return (
    <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">{page.brandShort}</span>
          <span>
            <span>{page.brand}</span>
            <small>{page.brandRole}</small>
          </span>
        </a>

        <nav className={`nav-links${open ? ' open' : ''}`} id="nav-links" aria-label="Primary navigation">
          {links.map((chapter) => {
            const index = page.chapters.findIndex((c) => c.id === chapter.id)
            const isActive = index === active
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                {chapter.nav}
              </a>
            )
          })}
          <a
            className="btn btn-ghost nav-social"
            href={page.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </nav>

        <a className="btn nav-cta desktop-cta" href={page.linkedin} target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn ↗
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
