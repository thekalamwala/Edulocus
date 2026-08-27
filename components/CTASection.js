import Link from 'next/link'

const BOOK_URL = 'https://bookasloth.com/theedulocusway'

export default function CTASection({ title, subtitle, href = BOOK_URL, label = 'Book a Free Consultation', id }) {
  const isExternal = href.startsWith('http')
  return (
    <section className="section section--tight" id={id}>
      <div className="container">
        <div className="cta-section reveal">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          {isExternal ? (
            <a className="btn btn-accent" href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ) : (
            <Link className="btn btn-accent" href={href}>
              {label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
