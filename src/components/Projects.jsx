import { projects } from "../data/portfolio";
import { useReveal } from "../hooks";
import SectionHead from "./SectionHead";

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section section--alt" ref={ref} data-reveal-root="">
      <div className="shell">
        <SectionHead
          kicker="04 / projects"
          title="BUILD GALLERY"
          note="select a cartridge"
        />

        <div className="builds">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`build pxcard reveal a-${p.color}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <header className="build__head">
                <span className="build__icon">{p.icon}</span>
                <span className="build__titles">
                  <h3>{p.name}</h3>
                  <span className="build__sub">{p.subtitle}</span>
                </span>
                <span className={`build__diff diff-${p.difficulty.toLowerCase()}`}>
                  {p.difficulty}
                </span>
              </header>

              <div className="build__inner">
                <p className="build__blurb">{p.blurb}</p>
                <ul className="build__features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="build__bullet">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="build__stack">
                  <span className="build__stackLabel">EQUIPPED</span>
                  <div className="chip-row">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
