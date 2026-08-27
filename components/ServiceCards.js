import Link from 'next/link'

export default function ServiceCards({ items }) {
  return (
    <div className="svc3-grid">
      {items.map((s, i) => (
        <Link
          key={s.title}
          href={s.href}
          className="svc3-card reveal"
          data-delay={i % 3}
          style={{ '--ac': s.accent }}
          aria-label={`${s.title} — explore service`}
        >
          <span className="svc3-no">{s.no}</span>
          <div className="svc3-media">
            <span className="svc3-blob" aria-hidden="true" />
            <img className="svc3-photo" src={s.img} alt={`${s.title} at Edulocus`} loading="lazy" />
            <span className="svc3-ico" aria-hidden="true">
              <i className={`fa-solid ${s.icon}`} />
            </span>
          </div>
          <div className="svc3-body">
            <h3>{s.title}</h3>
            <p className="svc3-desc">{s.desc}</p>
            <ul className="svc3-tags">
              {s.tags.map((t) => (
                <li key={t.label}>
                  <i className={`fa-solid ${t.icon}`} aria-hidden="true" />
                  {t.label}
                </li>
              ))}
            </ul>
            <div className="svc3-div" aria-hidden="true" />
            <span className="svc3-cta">
              Explore service <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </span>
          </div>
          <span className="svc3-dots" aria-hidden="true" />
        </Link>
      ))}
    </div>
  )
}
