export default function QuestCard({ quest }) {
  return (
    <article className="quest-journey-card">
      <div className="quest-journey-header">
        <div className="quest-journey-icon">{quest.icon}</div>
        <div className="quest-journey-copy">
          <h3>{quest.title}</h3>
          <p>{quest.description}</p>
        </div>
        <span className="quest-exp-badge">{quest.expReward}</span>
      </div>

      <div className="quest-journey-progress">
        <div className="progress-track">
          <div className="progress-fill progress-fill-exp" style={{ width: "0%" }} />
        </div>
        <div className="quest-journey-footer">
          <span className="quest-progress-value">{quest.progress}</span>
          {quest.rewardText ? (
            <span className="quest-reward-note">Reward: {quest.rewardText}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
