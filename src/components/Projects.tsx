import { motion } from 'framer-motion'
import { projects, site } from '../data/profile'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

const titleMap: Record<string, string> = {
  eduresource: 'EduResource Rwanda',
  kwandagroup: 'Kwanda Group',
}

export function Projects() {
  return (
    <section className="section" id="projects" aria-label="Projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Projects</span>
            <h2 className="section-title">
              Things I've <span className="gradient-text">built &amp; shipped</span>
            </h2>
            <p className="section-sub">
              Real products and explorations — from education platforms to Web3 and security tools.
              Explore them all on GitHub.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: Math.min(i * 0.05, 0.3), ease: [0.21, 0.65, 0.36, 1] }}
            >
              <div className="project-card-top">
                <span className="project-icon" aria-hidden="true">
                  <Icon name="code" size={22} />
                </span>
                <span className="project-category">{p.category}</span>
              </div>
              <h3 className="project-title">{titleMap[p.id] ?? p.name}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="tech-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name}`}
                  title="View project"
                >
                  <Icon name="external" size={18} />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="projects-note">
            Even more experiments and learning projects live on{' '}
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              github.com/gary-glacker
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Projects