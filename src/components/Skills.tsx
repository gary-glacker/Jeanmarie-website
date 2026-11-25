import { skillGroups } from '../data/profile'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section className="section" id="skills" aria-label="Skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Toolbox</span>
            <h2 className="section-title">
              Skills that <span className="gradient-text">ship real products</span>
            </h2>
            <p className="section-sub">
              The languages and tools I use to take ideas from a sketch to a deployed, used product.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={Math.min(i * 0.07, 0.3)}>
              <div className="skill-card">
                <h3>{g.title}</h3>
                <p className="skill-blurb">{g.blurb}</p>
                <div className="skill-chips">
                  {g.skills.map((s) => (
                    <span className="skill-chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills