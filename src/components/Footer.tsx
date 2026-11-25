import type { PageConfig } from '../data/pages'

export function Footer({ page }: { page: PageConfig }) {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {page.brand}
      </span>
      <span>{page.footerNote}</span>
      <span className="footer-links">
        <a href={page.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a href={page.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href={page.companyUrl} target="_blank" rel="noopener noreferrer">
          Kwanda Corporation ↗
        </a>
        <a href="#top">Back to top ↑</a>
      </span>
    </footer>
  )
}

export default Footer
