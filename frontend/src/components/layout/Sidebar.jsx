const navItems = [
  { label: "Dashboard", icon: "grid" },
  { label: "Habits", icon: "check" },
  { label: "Character", icon: "user" },
  { label: "Quests", icon: "flag" },
  { label: "Analytics", icon: "chart" },
];

const utilityItems = [
  { label: "Settings", icon: "gear" },
  { label: "Logout", icon: "logout", danger: true },
];

function SidebarIcon({ type }) {
  const icons = {
    grid: (
      <>
        <span />
        <span />
        <span />
        <span />
      </>
    ),
    check: <span className="icon-check" />,
    user: <span className="icon-user" />,
    flag: <span className="icon-flag" />,
    chart: (
      <>
        <span className="icon-bar short" />
        <span className="icon-bar medium" />
        <span className="icon-bar tall" />
      </>
    ),
    gear: <span className="icon-gear" />,
    logout: <span className="icon-logout" />,
  };

  return <span className={`sidebar-icon sidebar-icon-${type}`}>{icons[type]}</span>;
}

export default function Sidebar({ activeItem = "Dashboard", onNavigate }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand">
          <div className="brand-mark">H</div>
          <div>
            <p className="brand-title">HabitRPG</p>
            <p className="brand-subtitle">Level up your routine</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`nav-item ${item.label === activeItem ? "nav-item-active" : ""}`}
              onClick={() => onNavigate?.(item.label)}
            >
              <SidebarIcon type={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        {utilityItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`nav-item nav-item-utility ${item.danger ? "nav-item-danger" : ""}`}
          >
            <SidebarIcon type={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
