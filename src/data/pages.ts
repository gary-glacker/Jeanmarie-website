import { experiences, projects, skillGroups, stats, site } from './profile'

/* ------------------------------------------------------------------------- *
 * Shared page model — the portfolio is content-driven from this file.
 * ------------------------------------------------------------------------- */

export type Block =
  | { type: 'text'; text: string; lead?: boolean }
  | { type: 'paragraphs'; items: string[] }
  | { type: 'facts'; items: { value: string; label: string }[] }
  | {
      type: 'timeline'
      items: { time: string; title: string; org?: string; description: string }[]
    }
  | {
      type: 'cards'
      items: { tag?: string; title: string; description: string; meta?: string; href?: string }[]
    }
  | { type: 'tags'; groups: { title: string; items: string[] }[] }
  | { type: 'quotes'; items: { quote: string; author: string; context?: string }[] }
  | { type: 'logos'; items: { name: string; image?: string; href?: string }[] }
  | {
      type: 'actions'
      items: { label: string; href: string; primary?: boolean; external?: boolean }[]
    }
  | { type: 'availability'; text: string }
  | { type: 'scrollhint'; text: string }

export interface Chapter {
  id: string
  nav: string
  tag: string
  chip: string
  word: string
  eyebrow: string
  title: string
  emphasis: string
  blocks: Block[]
}

export interface PageConfig {
  brand: string
  brandShort: string
  brandRole: string
  chaptersLabel: string
  linkedin: string
  github: string
  companyUrl: string
  stage: { kind: 'portrait'; src: string; alt: string }
  chapters: Chapter[]
  footerNote: string
}

const statFacts = stats.map((s) => ({ value: s.value, label: s.label }))
const projectCards = projects.map((p) => ({
  tag: p.tagline,
  title: p.name,
  description: p.description,
  meta: [p.category, ...p.tech].join(' · '),
  href: p.link,
}))
const journey = experiences.map((e) => ({
  time: e.period,
  title: e.role,
  org: e.company,
  description: e.summary,
}))
const skillTagGroups = skillGroups.map((g) => ({ title: g.title, items: g.skills }))

// Logos extracted from the original HTML design.
const teams = [
  {
    name: 'Kwanda Group',
    image: '/images/kwanda-group-logo.webp',
    href: site.companyLinkedIn,
  },
  { name: 'unfounders', image: '/images/unfounders-logo.webp' },
  { name: 'UNMUTE' },
  { name: 'The New York Academy of Sciences' },
]

export const personalPage: PageConfig = {
  brand: site.name,
  brandShort: 'JG',
  brandRole: 'Developer & founder',
  chaptersLabel: 'a story in eight chapters',
  linkedin: site.linkedin,
  github: site.github,
  companyUrl: site.companyUrl,
  stage: {
    kind: 'portrait',
    src: '/images/portrait.webp',
    alt: `Portrait of ${site.name}, software developer and founder`,
  },
  footerNote: 'Built with purpose in Kigali, Rwanda.',
  chapters: [
    {
      id: 'top',
      nav: 'Intro',
      tag: 'hello',
      chip: 'Chapter 1',
      word: 'story',
      eyebrow: 'Introduction',
      title: 'Hello, I’m Jean Marie.',
      emphasis: 'This is my story.',
      blocks: [
        {
          type: 'text',
          lead: true,
          text: 'Software developer and founder building technology that solves real problems for people across Africa.',
        },
        {
          type: 'actions',
          items: [
            { label: 'Explore my work', href: '#work', primary: true },
            { label: 'LinkedIn', href: site.linkedin, external: true },
          ],
        },
        { type: 'scrollhint', text: 'Scroll and the story turns with you ↓' },
      ],
    },
    {
      id: 'about',
      nav: 'About',
      tag: 'who I am',
      chip: 'Chapter 2',
      word: 'me',
      eyebrow: 'About',
      title: 'Who I am,',
      emphasis: 'beyond the title.',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'I’m a software developer who started as a curious teenager taking computers apart, and I now build software that changes how people live and work. I learn fast, I love new technology, and I aim for products that are simple, reliable and useful.',
            'I do my best work in teams. I believe diverse perspectives lead to the best solutions, and I’m always happy to learn from others and share what I know. Away from the screen, you’ll find me on a new hiking trail or reading about the latest in tech.',
          ],
        },
        { type: 'facts', items: statFacts },
      ],
    },
    {
      id: 'journey',
      nav: 'Journey',
      tag: 'the road',
      chip: 'Chapter 3',
      word: 'path',
      eyebrow: 'Journey',
      title: 'The road',
      emphasis: 'so far.',
      blocks: [{ type: 'timeline', items: journey }],
    },
    {
      id: 'work',
      nav: 'Work',
      tag: 'the work',
      chip: 'Chapter 4',
      word: 'build',
      eyebrow: 'Selected work',
      title: 'Things I’ve',
      emphasis: 'built and led.',
      blocks: [{ type: 'cards', items: projectCards }],
    },
    {
      id: 'skills',
      nav: 'Skills',
      tag: 'my toolkit',
      chip: 'Chapter 5',
      word: 'tools',
      eyebrow: 'Skills',
      title: 'The tools',
      emphasis: 'I work with.',
      blocks: [{ type: 'tags', groups: skillTagGroups }],
    },
    {
      id: 'teams',
      nav: 'Teams',
      tag: 'my teams',
      chip: 'Chapter 6',
      word: 'team',
      eyebrow: 'Teams & collaborators',
      title: 'Where I’ve',
      emphasis: 'worked.',
      blocks: [{ type: 'logos', items: teams }],
    },
    {
      id: 'words',
      nav: 'Words',
      tag: 'my words',
      chip: 'Chapter 7',
      word: 'words',
      eyebrow: 'In my words',
      title: 'What I',
      emphasis: 'believe.',
      blocks: [
        {
          type: 'quotes',
          items: [
            {
              quote:
                'I believe technology should not exist simply to look innovative. It should solve problems that ordinary people experience in their everyday lives.',
              author: site.name,
              context: 'on building Katisha',
            },
            {
              quote:
                'What if African innovators built more of the solutions that Africans need every day?',
              author: site.name,
              context: 'on the vision of Kwanda Group',
            },
          ],
        },
      ],
    },
    {
      id: 'contact',
      nav: 'Contact',
      tag: 'your turn',
      chip: 'The end',
      word: 'hi',
      eyebrow: 'Contact',
      title: 'Let’s write',
      emphasis: 'the next chapter.',
      blocks: [
        {
          type: 'text',
          text: 'Have a project, a partnership or an idea for Africa’s digital future? I’d love to hear it.',
        },
        { type: 'availability', text: 'Open to new collaborations' },
        {
          type: 'actions',
          items: [
            { label: 'Email me', href: `mailto:${site.email}`, primary: true },
            { label: 'Connect on LinkedIn', href: site.linkedin, external: true },
            { label: 'GitHub', href: site.github, external: true },
            { label: 'Visit GN IntelleX', href: site.companyUrl, external: true },
          ],
        },
      ],
    },
  ],
}

export default personalPage
