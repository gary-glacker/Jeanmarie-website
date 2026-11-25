import { Reveal } from './Reveal'
import { Icon } from './Icon'

const values = [
  {
    icon: 'code',
    title: 'Craft before code',
    text: 'I design experiences that are clean, fast, and genuinely useful — not just technically correct.',
  },
  {
    icon: 'sparkle',
    title: 'Lifelong learner',
    text: 'From Harvard CS50x to the latest frameworks, I stay sharp because technology never stops moving.',
  },
  {
    icon: 'rocket',
    title: 'Impact-driven',
    text: 'Every project should move the needle — for a business, a community, or an entire nation.',
  },
]

export function About() {
  return (
    <section className="section" id="about" aria-label="About">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">About Me</span>
            <h2 className="section-title">
              A developer, founder, and leader <span className="gradient-text">building for Rwanda</span>
            </h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.05}>
            <div className="about-card about-text">
              <p>
                Hey there! I'm <strong>Jean Marie Gatare</strong> — a passionate software developer
                with a deep love for technology, and the{' '}
                <strong>Co-Founder &amp; CEO of GN IntelleX (Kwanda Group)</strong> in Kigali,
                Rwanda.
              </p>
              <p>
                My journey began as a curious teenager tinkering with computers. Today I live my
                dream of creating software with the power to change how people live and work. I'm a
                quick learner who stays current with the latest technologies, and my goal is to
                build user-friendly, efficient software for both businesses and individuals.
              </p>
              <p>
                Beyond code, I lead communities — as <strong>Rwanda Nation Director at UNMUTE</strong>,
                an <strong>Ambassador at unfounders</strong>, and a Young Member of the{' '}
                <strong>New York Academy of Sciences</strong>. I thrive in collaborative
                environments and believe diverse ideas build the best solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring hiking trails or reading about the
                latest in tech. I'm always up for a conversation about anything tech-related.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="about-card">
              {values.map((v) => (
                <div className="about-value" key={v.title}>
                  <span className="about-value-icon">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About