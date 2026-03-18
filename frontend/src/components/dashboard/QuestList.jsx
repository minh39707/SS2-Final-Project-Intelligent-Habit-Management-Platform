import QuestItem from "./QuestItem";

export default function QuestList({ quests }) {
  return (
    <section className="quest-section">
      <div className="section-heading">
        <div>
          <h2>Today&apos;s Quests</h2>
          <p>Small wins become epic progress.</p>
        </div>
        <a href="#" className="view-all-link">
          View All
        </a>
      </div>

      <div className="quest-list">
        {quests.map((quest) => (
          <QuestItem key={quest.id} quest={quest} />
        ))}
      </div>
    </section>
  );
}
