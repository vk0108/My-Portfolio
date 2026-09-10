import { skillTree } from "../data/portfolio";
import { useReveal } from "../hooks";
import SectionHead from "./SectionHead";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section section--alt" ref={ref} data-reveal-root="">
      <div className="shell">
        <SectionHead
          kicker="02 / abilities"
          title="SKILL TREE"
          note="unlocked nodes"
        />

        <div className="tree">
          {skillTree.map((branch, i) => (
            <article
              className={`branch pxcard reveal a-${branch.color}`}
              key={branch.branch}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <header className="branch__head">
                <span className="branch__icon">{branch.icon}</span>
                <h3>{branch.branch}</h3>
                <span className="branch__count">
                  {branch.skills.length} NODES
                </span>
              </header>

              <ul className="branch__list">
                {branch.skills.map((s) => (
                  <li className="node" key={s.name}>
                    <div className="node__top">
                      <span className="node__name">{s.name}</span>
                      <span className="node__lvl">{s.level}</span>
                    </div>
                    <span className="node__pips" aria-hidden="true">
                      {Array.from({ length: 10 }).map((_, p) => (
                        <i key={p} className={p * 10 < s.level ? "on" : ""} />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
