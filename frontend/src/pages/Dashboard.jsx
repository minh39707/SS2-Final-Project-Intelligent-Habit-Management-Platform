import Sidebar from "../components/layout/Sidebar";
import StatsCard from "../components/dashboard/StatsCard";
import QuestList from "../components/dashboard/QuestList";
import GameMasterPanel from "../components/assistant/GameMasterPanel";

const quests = [
  {
    id: 1,
    title: "Drink Water",
    difficulty: "easy",
    expReward: 10,
    hpReward: 5,
    progress: "0 / 8",
    icon: "droplet",
  },
  {
    id: 2,
    title: "Read 30 mins",
    difficulty: "medium",
    expReward: 25,
    hpReward: 0,
    progress: "0 / 30",
    icon: "book",
  },
  {
    id: 3,
    title: "Morning Workout",
    difficulty: "hard",
    expReward: 50,
    hpReward: 10,
    progress: "0 / 1",
    icon: "bolt",
  },
  {
    id: 4,
    title: "No Sugar",
    difficulty: "hard",
    expReward: 30,
    hpReward: 15,
    progress: "0 / 1",
    icon: "shield",
  },
];

export default function Dashboard({ onNavigate }) {
  return (
    <div className="app-shell">
      <Sidebar activeItem="Dashboard" onNavigate={onNavigate} />

      <main className="dashboard-main">
        <section className="hero-section">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1>Welcome back, Hero!</h1>
            <p className="hero-subtitle">Ready to conquer your day?</p>
          </div>

          <div className="streak-card">
            <div className="streak-icon">{"\uD83D\uDD25"}</div>
            <div>
              <p className="streak-label">CURRENT STREAK</p>
              <p className="streak-value">0 Days</p>
            </div>
          </div>
        </section>

        <StatsCard />
        <QuestList quests={quests} />
      </main>

      <GameMasterPanel />
    </div>
  );
}
