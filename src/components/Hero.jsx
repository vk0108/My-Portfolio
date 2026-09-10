import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import { useTypewriter } from "../hooks";
import PixelAvatar from "./PixelAvatar";

const BOOT = [
  "> initializing portfolio.exe ...",
  "> loading agent modules ....... OK",
  "> mounting pastel renderer .... OK",
  "> player found: KRITHIKA",
];

export default function Hero() {
  const typed = useTypewriter(profile.taglines);
  const [line, setLine] = useState(0);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (line >= BOOT.length) {
      const t = setTimeout(() => setBooted(true), 420);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLine((l) => l + 1), line === 0 ? 260 : 420);
    return () => clearTimeout(t);
  }, [line]);

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__left">
          <div className="hero__boot" aria-hidden="true">
            {BOOT.slice(0, line).map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>

          <div className={`hero__reveal ${booted ? "is-in" : ""}`}>
            <h1 className="hero__name">
              KRITHIKA
              <br />
              <span className="hero__name-2">VENKATESH</span>
            </h1>

            <p className="hero__typed">
              <span className="hero__prompt">$</span> {typed}
              <span className="hero__caret blink">▮</span>
            </p>

            <div className="hero__cta">
              <a className="btn btn-primary" href="#projects">
                ▶ VIEW BUILDS
              </a>
              <a className="btn" href="#contact">
                ✉ CONTACT
              </a>
            </div>
          </div>
        </div>

        <div className={`hero__right ${booted ? "is-in" : ""}`}>
          <PixelAvatar />
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about">
        <span>SCROLL</span>
        <span className="hero__arrow">▼</span>
      </a>
    </section>
  );
}
