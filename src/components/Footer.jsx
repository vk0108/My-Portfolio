import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="footer__over">
          GAME SAVED <span className="blink">▮</span>
        </p>
        <p className="footer__meta">
          © {new Date().getFullYear()} {profile.name} · built with React + pastel pixels
        </p>
        <p className="footer__hint">psst — try ↑ ↑ ↓ ↓ ← → ← → B A</p>
      </div>
    </footer>
  );
}
