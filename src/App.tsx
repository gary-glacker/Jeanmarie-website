import { useEffect, useState } from 'react'
import { personalPage } from './data/pages'
import { IntroCurtain } from './components/IntroCurtain'
import { ProgressBar } from './components/ProgressBar'
import { Navbar } from './components/Navbar'
import { SideIndex } from './components/SideIndex'
import { Stage } from './components/Stage'
import { ChapterSection } from './components/ChapterSection'
import { Footer } from './components/Footer'

export default function App() {
  const config = personalPage
  const [active, setActive] = useState(0)

  // Keep the nav dots and the 3D stage in sync with the chapter in view.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.chapter'))
    const onScroll = () => {
      let best = 0
      let distance = Number.POSITIVE_INFINITY
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect()
        const d = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
        if (d < distance) {
          distance = d
          best = i
        }
      })
      setActive((current) => (current === best ? current : best))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // One observer reveals every .reveal element on the page.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <IntroCurtain name={config.brand} subtitle={config.chaptersLabel} />
      <ProgressBar />
      <Navbar page={config} active={active} />
      <SideIndex chapters={config.chapters} active={active} />

      <main className="story">
        <Stage chapter={config.chapters[active]} stage={config.stage} index={active} />
        <div className="chapters">
          {config.chapters.map((chapter, i) => (
            <ChapterSection key={chapter.id} chapter={chapter} index={i} />
          ))}
        </div>
      </main>

      <Footer page={config} />
    </>
  )
}
