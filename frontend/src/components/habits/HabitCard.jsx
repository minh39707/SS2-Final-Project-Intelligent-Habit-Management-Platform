const habitIcons = {
  droplet: "\uD83D\uDCA7",
  book: "\uD83D\uDCD8",
  bolt: "\u26A1",
  leaf: "\uD83C\uDF3F",
};

export default function HabitCard({ habit }) {
  return (
    <article className="habit-card">
      <div className="habit-card-top">
        <div className={`habit-icon habit-icon-${habit.difficulty}`}>{habitIcons[habit.icon]}</div>

        <div className="habit-card-heading">
          <h3>{habit.title}</h3>
          <div className="habit-badges">
            <span className="habit-category-badge">{habit.category}</span>
            <span className={`difficulty-badge difficulty-${habit.difficulty}`}>
              {habit.difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className="habit-meta-grid">
        <div className="habit-meta-block">
          <span className="habit-meta-label">TYPE</span>
          <strong>{habit.type}</strong>
        </div>

        <div className="habit-meta-block">
          <span className="habit-meta-label">REWARD</span>
          <strong className="habit-reward-value">{habit.reward}</strong>
        </div>

        <div className="habit-meta-block">
          <span className="habit-meta-label">STREAK</span>
          <strong>{habit.streak}</strong>
        </div>
      </div>
    </article>
  );
}
