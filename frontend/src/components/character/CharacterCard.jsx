function StatRow({ icon, label, value, tone }) {
  return (
    <div className="character-stat-row">
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

export default function CharacterCard() {
  return (
    <section className="character-card">
      <div className="character-card-header">
        <div className="character-avatar-shell">
          <div className="character-avatar">{"\uD83E\uDDD9"}</div>
        </div>
        <h2>Hero Name</h2>
        <p>Level 0 Novice</p>
      </div>

      <div className="character-card-body">
        <StatRow icon={"\u2665"} label="HP" value="0 / 100" tone="hp" />
        <StatRow icon={"\u2726"} label="EXP" value="0 / 500" tone="exp" />

        <div className="character-power-block">
          <div className="character-power-icon">{"\u2694"}</div>
          <div>
            <span className="habit-meta-label">Combat Power</span>
            <strong>0</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
