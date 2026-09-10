import { quests } from "../data/portfolio";
import { useReveal } from "../hooks";
import SectionHead from "./SectionHead";

export default function Quests() {
  const ref = useReveal();

  return (
    <section id="quests" className="section" ref={ref} data-reveal-root="">
      <div className="shell">
        <SectionHead
          kicker="03 / experience"
          title="QUEST LOG"
          note="internships & missions"
        />

        <div className="quests">
          {quests.map((q, i) => (
            <article className="quest pxcard reveal" key={q.role + q.org} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className={`quest__rank rank-${q.rank}`}>{q.rank}</span>

              <div className="quest__main">
                <header className="quest__head">
                  <div>
                    <h3 className="quest__role">{q.role}</h3>
                    <p className="quest__org">
                      {q.org} <span>· {q.place}</span>
                    </p>
                  </div>
                  <div className="quest__meta">
                    <span className="quest__period">{q.period}</span>
                    <span
                      className={`quest__status ${
                        q.status === "ACTIVE" ? "is-active" : "is-done"
                      }`}
                    >
                      {q.status === "ACTIVE" && <i className="pulse" />}
                      {q.status}
                    </span>
                  </div>
                </header>

                <ul className="quest__objectives">
                  {q.objectives.map((o) => (
                    <li key={o}>
                      <span className="quest__check">▸</span>
                      {o}
                    </li>
                  ))}
                </ul>

                <footer className="quest__loot">
                  <span className="quest__lootLabel">LOOT</span>
                  <div className="chip-row">
                    {q.loot.map((l) => (
                      <span className="chip" key={l}>
                        {l}
                      </span>
                    ))}
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
