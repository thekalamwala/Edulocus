import Link from 'next/link'

export default function PageHero({ eyebrow, title, subtitle, crumbs }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        {crumbs && crumbs.length > 0 && (
          <div className="breadcrumb">
            {crumbs.map((c, i) =>
              c.href ? (
                <span key={i}>
                  <Link href={c.href}>{c.label}</Link>
                  {i < crumbs.length - 1 && ' / '}
                </span>
              ) : (
                <span key={i}>{c.label}</span>
              )
            )}
          </div>
        )}
        {eyebrow && <div className="hero-chip">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
