export default function ExpChart() {
  return (
    <section className="analytics-chart-card">
      <div className="analytics-chart-header">
        <h2>EXP Growth</h2>
        <p>Experience points gained over time</p>
      </div>

      <div className="exp-chart">
        <div className="exp-chart-grid" />
        <svg
          className="exp-chart-line"
          viewBox="0 0 420 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0 146 C 70 146, 70 145, 140 145 S 210 145, 280 144 S 350 144, 420 143"
            fill="none"
            stroke="url(#expLineGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="expLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#90a0ff" />
              <stop offset="100%" stopColor="#7c5cff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="exp-chart-labels">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </section>
  );
}
