export default function Tabs({ activeTab, onTabChange }) {
  const tabs = ["Inventory", "Item Shop"];

  return (
    <div className="character-tabs" role="tablist" aria-label="Character sections">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={activeTab === tab}
          className={`character-tab ${activeTab === tab ? "character-tab-active" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
