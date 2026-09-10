import { useMemo } from "react";

const GLYPHS = ["✦", "◆", "★", "▪", "+", "◇", "·"];
const TONES = ["mint", "lav", "sky", "pink", "peach", "lemon"];

/* Slow-drifting pixel sprites behind everything. Deterministic so it doesn't reshuffle on re-render. */
export default function Ambience() {
  const sprites = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        glyph: GLYPHS[i % GLYPHS.length],
        tone: TONES[(i * 5) % TONES.length],
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 10 + ((i * 7) % 14),
        dur: 14 + ((i * 3) % 12),
        delay: -((i * 1.7) % 12),
      })),
    []
  );

  return (
    <div className="ambience" aria-hidden="true">
      <div className="ambience__blob ambience__blob--a" />
      <div className="ambience__blob ambience__blob--b" />
      <div className="ambience__blob ambience__blob--c" />
      {sprites.map((s, i) => (
        <span
          key={i}
          className={`ambience__sprite a-${s.tone}`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.glyph}
        </span>
      ))}
    </div>
  );
}
