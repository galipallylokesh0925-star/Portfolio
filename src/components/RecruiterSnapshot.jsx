export function RecruiterSnapshot({ stats }) {
  return (
    <section className="section snapshot-section">
      <div className="container">
        <div className="section-header center-align">
          <p className="eyebrow">Recruiter Snapshot</p>
        </div>

        <div className="snapshot-grid">
          {stats.map((item) => (
            <div key={`${item.label}-${item.value}`} className="snapshot-card">
              <span className="snapshot-value">{item.label}</span>
              <span className="snapshot-label">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
