import QuestCard from "./QuestCard";

export default function QuestList({ quests }) {
  return (
    <section className="quest-column-card">
      <div className="content-section-header">
        <div className="content-section-title">
          <span className="content-section-icon">{"\u2694"}</span>
          <h2>Active Quests</h2>
        </div>
      </div>

      <div className="quest-journey-list">
        {quests.map((quest) => (
          <QuestCard key={quest.title} quest={quest} />
        ))}
      </div>
    </section>
  );
}
