export default function InventoryPanel() {
  return (
    <section className="inventory-panel">
      <div className="inventory-empty-state">
        <div className="inventory-empty-icon">{"\uD83C\uDF92"}</div>
        <h3>No items yet</h3>
        <p>Your inventory is empty. Finish quests and build streaks to unlock gear.</p>
      </div>
    </section>
  );
}
