const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeeklyChart() {
  return (
    <section className="analytics-chart-card">
      <div className="analytics-chart-header">
        <h2>Weekly Habit Completion</h2>
        <p>Your consistency over the last 7 days</p>
      </div>

      <div className="weekly-chart">
        <div className="weekly-chart-grid">
          {labels.map((label, index) => (
            <div key={label} className="weekly-chart-column">
              <div className="weekly-chart-bar-wrap">
                <div
                  className="weekly-chart-bar"
                  style={{ height: `${index === 3 ? 10 : index === 5 ? 6 : 4}px` }}
                  title="0 completed"
                />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
