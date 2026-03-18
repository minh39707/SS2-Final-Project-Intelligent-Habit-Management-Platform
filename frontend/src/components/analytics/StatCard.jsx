export default function StatCard({ stat }) {
  return (
    <article className={`analytics-stat-card analytics-stat-card-${stat.tone}`}>
      <div className="analytics-stat-icon">{stat.icon}</div>
      <div>
        <p>{stat.label}</p>
        <strong>{stat.value}</strong>
      </div>
    </article>
  );
}
