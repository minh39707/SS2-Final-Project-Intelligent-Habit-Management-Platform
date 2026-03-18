export default function CreateHabitModal({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="create-habit-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-habit-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="create-habit-title">Create New Habit</h2>
          <button
            type="button"
            className="modal-close-button"
            aria-label="Close modal"
            onClick={onClose}
          >
            <span />
            <span />
          </button>
        </div>

        <div className="modal-form-grid">
          <label className="form-field form-field-full">
            <span className="form-label">Habit Name</span>
            <input
              type="text"
              placeholder="e.g. Meditate for 10 mins"
              defaultValue=""
              readOnly
            />
          </label>

          <label className="form-field">
            <span className="form-label">Icon (Emoji)</span>
            <div className="emoji-select-display">{"\uD83E\uDDD8"}</div>
          </label>

          <label className="form-field">
            <span className="form-label">Category</span>
            <select defaultValue="Health">
              <option>Health</option>
              <option>Learning</option>
              <option>Fitness</option>
              <option>Diet</option>
            </select>
          </label>

          <label className="form-field">
            <span className="form-label">Type</span>
            <select defaultValue="Simple Check (Yes/No)">
              <option>Simple Check (Yes/No)</option>
              <option>Quantity</option>
              <option>Time</option>
              <option>Avoid</option>
            </select>
          </label>

          <label className="form-field">
            <span className="form-label">Difficulty</span>
            <select defaultValue="Medium">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </label>
        </div>

        <div className="modal-actions">
          <button type="button" className="modal-cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="modal-primary-button">
            Create Habit
          </button>
        </div>
      </div>
    </div>
  );
}
