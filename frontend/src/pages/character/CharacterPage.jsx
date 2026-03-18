import { useState } from "react";
import GameMasterPanel from "../../components/assistant/GameMasterPanel";
import CharacterCard from "../../components/character/CharacterCard";
import InventoryPanel from "../../components/character/InventoryPanel";
import ItemCard from "../../components/character/ItemCard";
import Tabs from "../../components/character/Tabs";
import Sidebar from "../../components/layout/Sidebar";

const shopItems = [
  {
    name: "Wooden Sword",
    description: "A starter blade for future battles.",
    price: "25 Gold",
    icon: "\uD83D\uDDE1\uFE0F",
  },
  {
    name: "Apprentice Cloak",
    description: "Soft defense with a little RPG flair.",
    price: "40 Gold",
    icon: "\uD83E\uDDE5",
  },
  {
    name: "Potion Flask",
    description: "Useful later when your HP finally rises.",
    price: "15 Gold",
    icon: "\uD83E\uDDEA",
  },
];

export default function CharacterPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("Inventory");

  return (
    <div className="app-shell">
      <Sidebar activeItem="Character" onNavigate={onNavigate} />

      <main className="page-main">
        <section className="page-header">
          <div>
            <p className="eyebrow">Character</p>
            <h1>Character &amp; Gear</h1>
            <p className="page-subtitle">Manage your stats, inventory, and shop.</p>
          </div>

          <div className="gold-badge">
            <span className="gold-badge-icon">{"\u2726"}</span>
            <span>0 Gold Coins</span>
          </div>
        </section>

        <section className="character-layout">
          <CharacterCard />

          <div className="character-detail-panel">
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === "Inventory" ? (
              <InventoryPanel />
            ) : (
              <section className="shop-panel">
                <div className="shop-grid">
                  {shopItems.map((item) => (
                    <ItemCard key={item.name} item={item} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>

      <GameMasterPanel />
    </div>
  );
}
