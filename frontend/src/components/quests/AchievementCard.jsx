export default function AchievementCard({ achievement }) {
  return (
    <article className="achievement-card achievement-card-locked">
      <div className="achievement-icon-wrap">
        <div className="achievement-icon">{achievement.icon}</div>
        <span className="achievement-lock">{"\uD83D\uDD12"}</span>
      </div>
      <h3>{achievement.title}</h3>
      <p>{achievement.description}</p>
    </article>
  );
}
