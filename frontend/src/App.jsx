import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CharacterPage from "./pages/character/CharacterPage";
import HabitsPage from "./pages/habits/HabitsPage";
import QuestsPage from "./pages/quests/QuestsPage";

const pages = {
  Dashboard,
  Habits: HabitsPage,
  Character: CharacterPage,
  Quests: QuestsPage,
  Analytics: AnalyticsPage,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const CurrentPage = pages[currentPage];

  return <CurrentPage onNavigate={setCurrentPage} />;
}
