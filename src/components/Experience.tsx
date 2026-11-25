import { experiences } from '../data/profile'
import type { CompanyLogo } from '../data/profile'
import { Reveal } from './Reveal'

function CompanyLogo({ logo }: { logo: CompanyLogo }) {
  return (
    <span
      className="company-logo"
      role="img"
      aria-label={`${logo.initials} company logo`}
      style={{ background: `linear-gradient(135deg, ${logo.from}, ${logo.to})` }}
    >
      {logo.initials}
    </span>
  )
}

export function Experience() {
  return (
    <section className="section" id="experience" aria-label="Experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">My Journey</span>
            <h2 className="section-title">
              Experience in <span className="gradient-text">ships, builds &amp; leadership</span>
            </h2>
            <p className="section-sub">
              From founding a software company to directing national youth programs — the roles that
              shaped who I am today.
            </p>
          </div>
        </Reveal>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={Math.min(i * 0.05, 0.3)}>
              <div className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <article className="tl-card">
                  <div className="tl-head">
                    <CompanyLogo logo={exp.logo} />
                    <div className="tl-head-text">
                      <div className="tl-top">
                        <h3 className="tl-role">{exp.role}</h3>
                        <span className="tl-period">
                          {exp.current ? '● ' : ''}
                          {exp.period}
                        </span>
                      </div>
                      <div className="tl-company">
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--accent-2)', borderBottom: '1px solid rgba(34,211,238,.35)' }}
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                        {exp.location ? ` · ${exp.location}` : ''}
                        {exp.companyTag ? ` · ${exp.companyTag}` : ''}
                      </div>
                    </div>
                  </div>
                  <p className="tl-summary">{exp.summary}</p>
                  <ul className="tl-highlights">
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience