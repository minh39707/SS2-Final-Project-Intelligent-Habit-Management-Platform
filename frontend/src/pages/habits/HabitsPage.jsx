import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import GameMasterPanel from "../../components/assistant/GameMasterPanel";
import HabitFilter from "../../components/habits/HabitFilter";
import HabitCard from "../../components/habits/HabitCard";
import CreateHabitModal from "../../components/habits/CreateHabitModal";

const filters = ["All", "Health", "Learning", "Fitness", "Diet"];

const habits = [
  {
    id: 1,
    title: "Drink Water",
    category: "Health",
    difficulty: "easy",
    type: "Quantity",
    reward: "+10 EXP",
    streak: 0,
    icon: "droplet",
  },
  {
    id: 2,
    title: "Read 30 mins",
    category: "Learning",
    difficulty: "medium",
    type: "Time",
    reward: "+25 EXP",
    streak: 0,
    icon: "book",
  },
  {
    id: 3,
    title: "Morning Workout",
    category: "Fitness",
    difficulty: "hard",
    type: "Boolean",
    reward: "+50 EXP",
    streak: 0,
    icon: "bolt",
  },
  {
    id: 4,
    title: "No Sugar",
    category: "Diet",
    difficulty: "hard",
    type: "Avoid",
    reward: "+30 EXP",
    streak: 0,
    icon: "leaf",
  },
];

export default function HabitsPage({ onNavigate }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <div className={`app-shell ${isCreateModalOpen ? "app-shell-modal-open" : ""}`}>
        <Sidebar activeItem="Habits" onNavigate={onNavigate} />

        <main className="page-main habits-main">
          <section className="page-header">
            <div>
              <p className="eyebrow">Habits</p>
              <h1>Habit Management</h1>
              <p className="page-subtitle">Organize your daily routines and quests.</p>
            </div>

            <button
              type="button"
              className="primary-action-button"
              onClick={() => setIsCreateModalOpen(true)}
            >
              + Create New Habit
            </button>
          </section>

          <HabitFilter filters={filters} activeFilter="All" />

          <section className="habits-grid">
            {habits.map((habit) => (
              <HabitCard key={habit.id} habit={habit} />
            ))}
          </section>
        </main>

        <GameMasterPanel />
      </div>

      <CreateHabitModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
}
