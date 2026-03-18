import GameMasterPanel from "../../components/assistant/GameMasterPanel";
import AchievementGrid from "../../components/quests/AchievementGrid";
import QuestList from "../../components/quests/QuestList";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

const quests = [
  {
    title: "Hydration Master",
    description: "Drink 8 glasses of water for 3 days",
    progress: "0 / 3",
    rewardText: "Health Potion",
    expReward: "+100 EXP",
    icon: "\uD83D\uDCA7",
  },
  {
    title: "Bookworm",
    description: "Read for a total of 2 hours this week",
    progress: "0 / 120",
    rewardText: "",
    expReward: "+150 EXP",
    icon: "\uD83D\uDCD8",
  },
];

const achievements = [
  {
    title: "First Blood",
    description: "Complete your first habit",
    icon: "\u2694",
  },
  {
    title: "Streak Master",
    description: "Reach a 7-day streak",
    icon: "\uD83D\uDD25",
  },
  {
    title: "Level Up",
    description: "Reach level 10",
    icon: "\u2B50",
  },
  {
    title: "Hydration God",
    description: "Drink 100 glasses of water",
    icon: "\uD83D\uDCA7",
  },
  {
    title: "Bookworm Supreme",
    description: "Read 50 books",
    icon: "\uD83D\uDCD6",
  },
  {
    title: "Iron Will",
    description: "Maintain a 30-day streak",
    icon: "\uD83D\uDEE1\uFE0F",
  },
];

export default function QuestsPage({ onNavigate }) {
  return (
    <div className="app-shell">
      <Sidebar activeItem="Quests" onNavigate={onNavigate} />

      <main className="page-main">
        <Header
          eyebrow="Quests"
          title="Quests & Achievements"
          subtitle="Complete challenges to earn epic rewards."
        />

        <section className="quests-layout">
          <QuestList quests={quests} />
          <AchievementGrid achievements={achievements} />
        </section>
      </main>

      <GameMasterPanel />
    </div>
  );
}
