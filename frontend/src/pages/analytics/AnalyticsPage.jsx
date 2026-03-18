import GameMasterPanel from "../../components/assistant/GameMasterPanel";
import ExpChart from "../../components/analytics/ExpChart";
import StatsGrid from "../../components/analytics/StatsGrid";
import WeeklyChart from "../../components/analytics/WeeklyChart";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

const stats = [
  { label: "Completion Rate", value: "0%", icon: "\u2713", tone: "purple" },
  { label: "Total EXP Earned", value: "0", icon: "\u2726", tone: "blue" },
  { label: "Active Days", value: "0", icon: "\uD83D\uDCC5", tone: "green" },
  { label: "Habits Mastered", value: "0", icon: "\uD83C\uDFC6", tone: "gold" },
];

export default function AnalyticsPage({ onNavigate }) {
  return (
    <div className="app-shell">
      <Sidebar activeItem="Analytics" onNavigate={onNavigate} />

      <main className="page-main">
        <Header
          eyebrow="Analytics"
          title="Analytics Dashboard"
          subtitle="Track your progress and level up your life."
        />

        <StatsGrid stats={stats} />

        <section className="analytics-charts-grid">
          <WeeklyChart />
          <ExpChart />
        </section>
      </main>

      <GameMasterPanel />
    </div>
  );
}
