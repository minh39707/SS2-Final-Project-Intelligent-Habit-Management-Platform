import AchievementCard from "./AchievementCard";

export default function AchievementGrid({ achievements }) {
  return (
    <section className="achievement-column-card">
      <div className="content-section-header">
        <div className="content-section-title">
          <span className="content-section-icon content-section-icon-gold">{"\u2726"}</span>
          <h2>Achievements</h2>
        </div>
      </div>

      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.title} achievement={achievement} />
        ))}
      </div>
    </section>
  );
}
