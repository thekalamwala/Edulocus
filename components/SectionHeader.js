import Link from 'next/link'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', cta, id, className = '' }) {
  return (
    <div
      id={id}
      className={`section-head ${align === 'left' ? 'section-head--left' : ''} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {cta && (
        <p style={{ marginTop: '22px' }}>
          <Link className="btn btn-primary" href={cta.href}>
            {cta.label}
          </Link>
        </p>
      )}
    </div>
  )
}
