export default function GameMasterPanel() {
  return (
    <aside className="assistant-panel">
      <div className="assistant-header">
        <div className="assistant-badge">{"\u2726"}</div>
        <div>
          <h2>Game Master AI</h2>
          <p>Your quest companion</p>
        </div>
      </div>

      <div className="assistant-chat">
        <div className="assistant-message">
          Welcome back! I&apos;m your Game Master. Tell me about your day or ask for a
          quest!
        </div>
      </div>

      <div className="assistant-composer">
        <div className="input-group">
          <input type="text" placeholder="Tell me what you did..." readOnly />
          <button type="button">Send</button>
        </div>

        <div className="quick-actions">
          <p>QUICK ACTIONS</p>
          <button type="button" className="quick-action-button">
            <span>{"\u2726"}</span>
            <span>Generate Side Quest</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
