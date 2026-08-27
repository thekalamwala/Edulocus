import Link from 'next/link'

export default function CTASection({ title, subtitle, href = '/contact', label = 'Book a Free Consultation', id }) {
  return (
    <section className="section section--tight" id={id}>
      <div className="container">
        <div className="cta-section reveal">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          <Link className="btn btn-accent" href={href}>
            {label}
          </Link>
        </div>
      </div>
    </section>
  )
}
