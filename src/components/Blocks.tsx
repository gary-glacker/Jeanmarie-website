import type { Block } from '../data/pages'
import { Reveal } from './Reveal'

export function Blocks({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map((block, i) => <BlockView key={i} block={block} />)}</>
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'text':
      return (
        <Reveal>
          <p className={block.lead ? 'lead' : undefined}>{block.text}</p>
        </Reveal>
      )

    case 'paragraphs':
      return (
        <Reveal className="prose">
          {block.items.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </Reveal>
      )

    case 'facts':
      return (
        <Reveal className="facts">
          {block.items.map((fact, i) => (
            <div className="fact" key={i}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </Reveal>
      )

    case 'timeline':
      return (
        <Reveal>
          <ol className="timeline">
            {block.items.map((item, i) => (
              <li key={i}>
                <time>{item.time}</time>
                <h3>
                  {item.title}
                  {item.org ? ` — ${item.org}` : ''}
                </h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      )

    case 'cards':
      return (
        <div className="cards">
          {block.items.map((card, i) => {
            const inner = (
              <>
                {card.tag && <small>{card.tag}</small>}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {card.meta && <span className="card-meta">{card.meta}</span>}
              </>
            )
            return card.href ? (
              <a
                className="card reveal"
                key={i}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
                {inner}
              </a>
            ) : (
              <div className="card reveal" key={i}>
                {inner}
              </div>
            )
          })}
        </div>
      )

    case 'tags':
      return (
        <Reveal className="skills">
          {block.groups.map((group, i) => (
            <div className="skill-group" key={i}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((tag, j) => (
                  <span className="tag-pill" key={j}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      )

    case 'quotes':
      return (
        <div className="quotes">
          {block.items.map((q, i) => (
            <blockquote className="reveal" key={i}>
              <p>“{q.quote}”</p>
              <cite>
                {q.author}
                {q.context ? ` · ${q.context}` : ''}
              </cite>
            </blockquote>
          ))}
        </div>
      )

    case 'logos':
      return (
        <Reveal className="logos">
          {block.items.map((item, i) => {
            const visual = item.image ? (
              <img className="logo-img" src={item.image} alt={item.name} />
            ) : (
              <span className="logo-text">{item.name}</span>
            )
            return item.href ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                {visual}
              </a>
            ) : (
              <span key={i}>{visual}</span>
            )
          })}
        </Reveal>
      )

    case 'actions':
      return (
        <Reveal className="actions">
          {block.items.map((action, i) => (
            <a
              key={i}
              className={`btn${action.primary ? '' : ' btn-ghost'}`}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
            >
              {action.label}
              {action.external && <span aria-hidden="true"> ↗</span>}
            </a>
          ))}
        </Reveal>
      )

    case 'availability':
      return (
        <Reveal>
          <span className="availability">
            <i aria-hidden="true" />
            {block.text}
          </span>
        </Reveal>
      )

    case 'scrollhint':
      return <p className="scrollhint">{block.text}</p>
  }
}

export default Blocks
