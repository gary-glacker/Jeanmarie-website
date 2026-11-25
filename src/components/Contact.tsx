import { site } from '../data/profile'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

const contacts = [
  {
    icon: 'mail',
    label: 'Email me',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: 'phone',
    label: 'Call / WhatsApp',
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: site.linkedinLabel,
    href: site.linkedin,
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: site.githubLabel,
    href: site.github,
  },
  {
    icon: 'globe',
    label: 'My Company',
    value: 'Kwanda Corporation',
    href: site.companyUrl,
  },
  {
    icon: 'briefcase',
    label: 'Company on LinkedIn',
    value: 'Kwanda Group',
    href: site.companyLinkedIn,
  },
]

export function Contact() {
  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Let's Connect
            </span>
            <h2 className="contact-title">
              Let's build something <span className="gradient-text">great together</span>
            </h2>
            <p className="contact-sub">
              Whether it's a project, a partnership, or just a conversation about technology — my
              inbox is always open. I'll get back to you quickly.
            </p>

            <div className="contact-links">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  className="contact-link"
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="contact-link-icon">
                    <Icon name={c.icon} size={24} />
                  </span>
                  <span className="contact-link-label">{c.label}</span>
                  <span className="contact-link-value">{c.value}</span>
                </a>
              ))}
            </div>

            <a className="btn btn-primary" href={`mailto:${site.email}?subject=Hello%20Jean%20Marie`}>
              Send Me an Email
              <Icon name="arrowUpRight" size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact