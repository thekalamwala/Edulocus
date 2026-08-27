export default function StatsStrip({ stats, className = '' }) {
  return (
    <div className={`stats ${className}`}>
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          {s.icon && <i className={s.icon} aria-hidden="true" />}
          <div>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
