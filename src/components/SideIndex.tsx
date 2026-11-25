import type { Chapter } from '../data/pages'

export function SideIndex({ chapters, active }: { chapters: Chapter[]; active: number }) {
  return (
    <nav className="side-index" aria-label="Jump to section">
      {chapters.map((chapter, i) => (
        <a
          key={chapter.id}
          href={`#${chapter.id}`}
          className={i === active ? 'active' : ''}
          aria-label={`Go to ${chapter.nav}`}
          aria-current={i === active ? 'location' : undefined}
          title={chapter.nav}
        />
      ))}
    </nav>
  )
}

export default SideIndex
