export default function ProcessTimeline({ steps }) {
  return (
    <div className="process">
      {steps.map((s, i) => (
        <div className="process-step" key={i}>
          <div className="p-dot">{String(i + 1).padStart(2, '0')}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
