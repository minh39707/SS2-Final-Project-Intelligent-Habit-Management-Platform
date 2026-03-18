function ProgressRow({ icon, label, value, tone }) {
  return (
    <div className="progress-row">
      <div className="progress-meta">
        <span className={`progress-icon progress-icon-${tone}`}>{icon}</span>
        <span className="progress-label">{label}</span>
      </div>
      <div className="progress-track">
        <div className={`progress-fill progress-fill-${tone}`} style={{ width: "0%" }} />
      </div>
      <span className="progress-value">{value}</span>
    </div>
  );
}

export default function StatsCard() {
  return (
    <section className="stats-card">
      <div className="avatar-block">
        <div className="avatar-frame">
          <span className="avatar-glyph">{"\uD83D\uDEE1\uFE0F"}</span>
        </div>
        <span className="level-pill">Lvl 0</span>
      </div>

      <div className="stats-progress">
        <ProgressRow icon={"\u2665"} label="HP" value="0 / 100" tone="hp" />
        <ProgressRow icon={"\u2726"} label="EXP" value="0 / 100" tone="exp" />
      </div>

      <div className="power-card">
        <div className="power-icon">{"\u2726"}</div>
        <span className="power-label">Power</span>
        <strong className="power-value">0</strong>
      </div>
    </section>
  );
}
