/* 16x16 sprite sheet — one character per pixel, mapped to the pastel palette. */
const SPRITE = [
  "................",
  "....HHHHHHHH....",
  "...HHHHHHHHHH...",
  "..PPHHHHHHHHPP..",
  "..PPSSSSSSSSPP..",
  "..PPSESSSSESPP..",
  "..PPSSSSSSSSPP..",
  "...SSSMMMMSSS...",
  "....SSSSSSSS....",
  "...HBBBBBBBBH...",
  "..BBBBBBBBBBBB..",
  ".ABBBBBBBBBBBBA.",
  ".ABBBBBBBBBBBBA.",
  ".AALLLLLLLLLLAA.",
  "...LLLLLLLLLL...",
  "................",
];

const COLORS = {
  H: "#8b7ae0", // hair
  S: "#ffd9c0", // skin
  E: "#2a2440", // eyes
  M: "#ff9ec4", // mouth
  P: "#8fe3c4", // headphones
  B: "#96d3f5", // hoodie
  A: "#b8aaf5", // sleeves
  L: "#ffa8cd", // laptop
};

const PX = 12;

export default function PixelAvatar() {
  const rects = [];
  SPRITE.forEach((row, y) => {
    row.split("").forEach((ch, x) => {
      if (ch === ".") return;
      rects.push(
        <rect
          key={`${x}-${y}`}
          x={x * PX}
          y={y * PX}
          width={PX}
          height={PX}
          fill={COLORS[ch]}
        />
      );
    });
  });

  return (
    <div className="avatar">
      <div className="avatar__frame pxcard">
        <div className="avatar__titlebar">
          <span className="avatar__dots">
            <i /> <i /> <i />
          </span>
          <span>player_01.spr</span>
        </div>

        <div className="avatar__stage">
          <div className="avatar__glow" aria-hidden="true" />
          <svg
            className="avatar__sprite"
            viewBox={`0 0 ${16 * PX} ${16 * PX}`}
            role="img"
            aria-label="Pixel art avatar of a developer wearing headphones at a laptop"
          >
            {rects}
          </svg>
          <span className="avatar__float avatar__float--1">★</span>
          <span className="avatar__float avatar__float--2">◆</span>
          <span className="avatar__float avatar__float--3">✦</span>
        </div>

        <div className="avatar__meters">
          <Meter label="HP" value={96} tone="mint" />
          <Meter label="MP" value={88} tone="sky" />
          <Meter label="XP" value={72} tone="pink" />
        </div>
      </div>

      <span className="avatar__plate">LVL 04 · FINAL YEAR</span>
    </div>
  );
}

function Meter({ label, value, tone }) {
  return (
    <div className={`meter a-${tone}`}>
      <span className="meter__label">{label}</span>
      <span className="meter__track">
        <span className="meter__fill" style={{ width: `${value}%` }} />
      </span>
    </div>
  );
}
