const difficultyLabels = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const questIcons = {
  droplet: "\uD83D\uDCA7",
  book: "\uD83D\uDCD8",
  bolt: "\u26A1",
  shield: "\uD83D\uDEE1\uFE0F",
};

export default function QuestItem({ quest }) {
  return (
    <article className="quest-card">
      <div className="quest-leading">
        <div className="quest-checkbox" />
        <div className={`quest-icon quest-icon-${quest.difficulty}`}>{questIcons[quest.icon]}</div>
      </div>

      <div className="quest-body">
        <div className="quest-topline">
          <h3>{quest.title}</h3>
          <span className={`difficulty-badge difficulty-${quest.difficulty}`}>
            {difficultyLabels[quest.difficulty]}
          </span>
        </div>

        <p className="quest-reward">
          <span className="reward-exp">+{quest.expReward} EXP</span>
          {quest.hpReward > 0 ? <span className="reward-hp">+{quest.hpReward} HP</span> : null}
        </p>
      </div>

      <div className="quest-progress">
        <span className="quest-progress-label">Progress</span>
        <strong>{quest.progress}</strong>
      </div>
    </article>
  );
}
