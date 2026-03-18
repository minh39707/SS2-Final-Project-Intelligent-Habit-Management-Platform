import StatCard from "./StatCard";

export default function StatsGrid({ stats }) {
  return (
    <section className="analytics-stats-grid">
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </section>
  );
}
