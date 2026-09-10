import { useEffect, useState } from "react";
import { navItems, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks";

const IDS = navItems.map((n) => n.id);

export default function Nav({ theme, onToggleTheme }) {
  const active = useActiveSection(IDS);
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 24);
      const h = document.body.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${stuck ? "nav--stuck" : ""}`}>
      <div className="nav__bar shell">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__coin">◈</span>
          <span className="nav__brandtext">
            {profile.brand}
            <em>{profile.brandExt}</em>
          </span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              <span className="nav__icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__tools">
          <button
            className="nav__toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title="Toggle theme"
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
          <button
            className="nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className="nav__progress">
        <span style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}
