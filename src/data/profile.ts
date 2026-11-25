export const site = {
  name: 'Jean Marie Gatare',
  firstName: 'Jean Marie',
  role: 'Software Developer',
  headline: 'Co-Founder  (Kwanda Group)',
  location: 'Kigali City, Rwanda',
  // TODO: replace with your real contact email before publishing.
  email: 'gatarepatrick05@gmail.com',
  phone: '+250 791 723 030',
  phoneHref: '+250791723030',
  linkedin: 'https://www.linkedin.com/in/jean-marie-gatare/',
  linkedinLabel: 'linkedin.com/in/jean-marie-gatare',
  github: 'https://github.com/gary-glacker',
  githubLabel: 'github.com/gary-glacker',
  companyUrl: 'https://www.kwandacorporation.org',
  companyLinkedIn: 'https://www.linkedin.com/company/kwanda-group',
  profilePhoto: '/images/portrait.webp',
}

export const roles = [
  'Software Developer',
  'Co-Founder ',
  'Full-Stack Builder',
  'Community Leader',
  'Problem Solver',
]

export interface CompanyLogo {
  initials: string
  from: string
  to: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  companyTag?: string
  period: string
  location?: string
  type: string
  summary: string
  highlights: string[]
  link?: string
  current?: boolean
  logo: CompanyLogo
}

export const experiences: ExperienceItem[] = [
  {
    id: 'kwandacorporation',
    role: 'Co-Founder ',
    company: 'Kwanda Corporation ',
    companyTag: 'Software Development',
    period: '2023 – Present',
    location: 'Kigali, Rwanda',
    type: 'Entrepreneurship',
    summary:
      'Co-founded and lead a Kigali-based software company building websites, mobile apps, and complete digital products for businesses across Rwanda and beyond.',
    highlights: [
      'Lead a team delivering graphic design, web development, mobile apps, and video production.',
      'Define the product roadmap, client relationships, and technical architecture for every project.',
      'Grow the business into a trusted digital partner, expanding capabilities every year.',
    ],
    link: 'https://www.linkedin.com/company/kwanda-group',
    current: true,
    logo: { initials: 'GN', from: '#6366f1', to: '#22d3ee' },
  },
  {
    id: 'unmute',
    role: 'Rwanda Nation Director',
    company: 'UNMUTE',
    companyTag: 'Community & Leadership',
    period: 'Jul 2024 – Aug 2025',
    location: 'Rwanda',
    type: 'Leadership',
    summary:
      "Directed UNMUTE's operations in Rwanda, championing youth voice, creativity, and technology as tools for positive change.",
    highlights: [
      'Represented UNMUTE nationally, coordinating programs with young leaders and creators.',
      'Empowered youth to explore technology, music, and innovation as career paths.',
    ],
    logo: { initials: 'UM', from: '#a855f7', to: '#ec4899' },
  },
  {
    id: 'unfounders',
    role: 'Ambassador',
    company: 'unfounders',
    companyTag: 'Community',
    period: '2025 – Present',
    location: 'Remote',
    type: 'Community',
    summary:
      'Ambassador for unfounders, connecting with founders and builders to grow an international community of creators.',
    highlights: [
      'Share and promote resources that help founders and developers turn ideas into products.',
      'Build bridges between the Rwandan tech ecosystem and the global startup community.',
    ],
    logo: { initials: 'uf', from: '#f97316', to: '#facc15' },
  },
  {
    id: 'nyas',
    role: 'Young Member',
    company: 'The New York Academy of Sciences',
    companyTag: 'Science & Learning',
    period: '2023 – 2022',
    location: 'Global',
    type: 'Membership',
    summary:
      'Part of a global community of young scientists, innovators, and thinkers advancing knowledge and collaborative problem-solving.',
    highlights: [
      'Engage with cutting-edge research in science and technology.',
      'Network with young professionals from around the world.',
    ],
    logo: { initials: 'NY', from: '#3b82f6', to: '#f59e0b' },
  },
  
]

export type Project = {
  id: string
  name: string
  tagline: string
  description: string
  tech: string[]
  link?: string
  category: string
  featured?: boolean
}


export const projects: Project[] = [
  {
    id: 'kwanda-corporation',
    name: 'Kwanda Corporation',
    tagline: 'Company product & service site',
    description:
      'The digital home of Kwanda Corporation’s product and service offerings — built with a modern TypeScript stack to showcase what the company does: web, mobile, design, and photography.',
    tech: ['TypeScript', 'React', 'Frontend'],
    link: 'https://www.kwandacorporation.org',
    category: 'Business',
    featured: true,
  },
  {
    id: 'eduresource',
    name: 'EduResource Rwanda',
    tagline: 'Open education for every Rwandan student',
    description:
      'An education platform helping students in Rwanda access the study resources they need — from lower secondary through upper secondary education, aligned with national education curricula and learning standards.',
    tech: ['React', 'CSS', 'EdTech'],
    link: 'https://eduresource.netlify.app/',
    category: 'EdTech',
    featured: true,
  },
  {
    id: 'mc-paradise-apartment',
    name: 'MC Paradise Apartment',
    tagline: 'Modern apartment booking & property management',
    description:
      'A digital apartment management and booking platform designed to simplify property operations, tenant management, accommodation reservations, and customer experiences. Bringing apartment administration, tenant services, booking management, and property operations into one connected system.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://mcparadiseapartment.com',
    category: 'Real Estate',
    featured: true,
  },
  {
    id: 'katisha',
    name: 'Katisha',
    tagline: 'Smart digital bus ticketing & travel platform',
    description:
      'A digital transportation platform designed to make bus travel easier and more accessible. Connecting passengers with transport services through convenient route discovery, online ticket booking, and digital travel management, with a vision of transforming public transportation across East Africa.',
    tech: ['Flutter', 'Dart', 'API Integration', 'Mobile Development'],
    category: 'Transportation',
    featured: true,
  },
  {
    id: 'vaigyanikinda',
    name: 'Vaigyanikinda',
    tagline: 'Education platform & innovation platform',
    description:
      'A technology-focused digital platform developed to support innovation, learning, and access to technical knowledge. Showcasing modern software engineering and the application of digital solutions to real-world challenges.',
    tech: ['React', 'TypeScript', 'Web Development'],
    link: 'https://www.vaigyaanikindia.com',
    category: 'Technology',
    featured: true,
  },
  {
    id: 'katisha-today',
    name: 'Katisha.today',
    tagline: 'Official digital platform for Katisha',
    description:
      'The official web platform for Katisha, bringing digital bus ticket booking and transportation services closer to customers. Designed to provide an accessible online experience for discovering travel options, connecting with transport services, and managing journeys.',
    tech: ['React', 'TypeScript', 'Web Development', 'API Integration'],
    link: 'https://katisha.today',
    category: 'Transportation',
    featured: true,
  },
  {
    id: 'gs-des-parents',
    name: 'GS des Parents',
    tagline: 'School website & digital communication platform',
    description:
      'A digital platform developed to strengthen the online presence of GS des Parents and improve communication between the school, students, parents, and the wider community. Providing an organized online space to showcase school information, educational activities, announcements, and institutional services.',
    tech: ['React', 'TypeScript', 'Web Development'],
    link: 'https://www.gsphuye.com',
    category: 'Education',
    featured: true,
  }
];

export type SkillGroup = {
  title: string
  blurb: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    blurb: 'Interfaces people love',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Responsive Design'],
  },
  {
    title: 'Backend & Data',
    blurb: 'The logic under the hood',
    skills: ['Node.js', 'PHP', 'Python', 'SQL', 'API Design'],
  },
  {
    title: 'Web3 & Emerging',
    blurb: 'Building for tomorrow',
    skills: ['Blockchain', 'MetaMask Integration', 'Web3 Wallets'],
  },
  {
    title: 'Tools & Craft',
    blurb: 'How I ship quality',
    skills: ['Git & GitHub', 'Vite', 'npm', 'Problem Solving', 'Team Collaboration'],
  },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '5+', label: 'Years Experience' },
  { value: '19+', label: 'Projects Built' },
  { value: '2', label: 'Companies Founded' },
  { value: '3+', label: 'Leadership Roles' },
]

export const socials = [
  { name: 'LinkedIn', url: site.linkedin, icon: 'linkedin' },
  { name: 'GitHub', url: site.github, icon: 'github' },
  { name: 'Kwandacorporation', url: site.companyUrl, icon: 'globe' },
]