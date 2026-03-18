function FilterGlyph() {
  return (
    <span className="filter-glyph" aria-hidden="true">
      <span className="filter-line long" />
      <span className="filter-line medium" />
      <span className="filter-line short" />
    </span>
  );
}

export default function HabitFilter({ filters, activeFilter }) {
  return (
    <section className="habit-filter-bar">
      <div className="habit-filter-label">
        <FilterGlyph />
        <span>Filter:</span>
      </div>

      <div className="habit-filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-tab ${filter === activeFilter ? "filter-tab-active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
