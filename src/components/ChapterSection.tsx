import type { Chapter } from '../data/pages'
import { Blocks } from './Blocks'

export function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const heading = (
    <>
      {chapter.title}
      <br />
      <em>{chapter.emphasis}</em>
    </>
  )

  return (
    <section className="chapter" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="eyebrow reveal">
        <span>{chapter.eyebrow}</span>
      </div>
      {index === 0 ? (
        <h1 className="chapter-title reveal" id={`${chapter.id}-title`}>
          {heading}
        </h1>
      ) : (
        <h2 className="chapter-title reveal" id={`${chapter.id}-title`}>
          {heading}
        </h2>
      )}
      <Blocks blocks={chapter.blocks} />
    </section>
  )
}

export default ChapterSection
