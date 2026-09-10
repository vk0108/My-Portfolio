import { useEffect, useRef, useState } from "react";
import { education, profile, stats } from "../data/portfolio";
import { useCountUp, useReveal } from "../hooks";
import SectionHead from "./SectionHead";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section" ref={ref} data-reveal-root="">
      <div className="shell">
        <SectionHead
          kicker="01 / profile"
          title="PLAYER CARD"
          note="who's behind the keyboard"
        />

        <div className="about">
          <article className="about__bio pxcard reveal">
            <div className="about__bioHead">
              <span className="about__avatarChip">◈</span>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
              </div>
            </div>
            <p className="about__summary">{profile.summary}</p>

            <div className="about__facts">
              <Fact k="CLASS" v={profile.className} />
              <Fact k="BASE" v={profile.location} />
              <Fact k="GUILD" v="Easwari Engineering College" />
              <Fact k="STATUS" v="Open to AI / ML roles" tone="mint" />
            </div>
          </article>

          <div className="about__stats">
            {stats.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="edu">
          <h3 className="edu__title">
            <span className="tspark">▚</span> SKILL ORIGIN — EDUCATION
          </h3>
          <div className="edu__list">
            {education.map((e, i) => (
              <div className="edu__row pxcard reveal" key={e.degree} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="edu__marker">{String(i + 1).padStart(2, "0")}</div>
                <div className="edu__body">
                  <h4>{e.degree}</h4>
                  <p>{e.school}</p>
                  <span className="edu__detail">{e.detail}</span>
                </div>
                <div className="edu__meta">
                  <span className="edu__period">{e.period}</span>
                  <span
                    className={`edu__status ${
                      e.status === "IN PROGRESS" ? "is-active" : ""
                    }`}
                  >
                    {e.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v, tone }) {
  return (
    <div className={`fact ${tone ? `a-${tone}` : ""}`}>
      <span className="fact__k">{k}</span>
      <span className="fact__v">{v}</span>
    </div>
  );
}

function StatTile({ label, value, max, icon }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  const n = useCountUp(value, seen);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const decimals = Number.isInteger(value) ? 0 : 2;
  const pct = (value / max) * 100;

  return (
    <div className="stat pxcard reveal" ref={ref}>
      <span className="stat__icon">{icon}</span>
      <span className="stat__value">{n.toFixed(decimals)}</span>
      <span className="stat__label">{label}</span>
      <span className="stat__bar">
        <span style={{ width: seen ? `${pct}%` : 0 }} />
      </span>
    </div>
  );
}
