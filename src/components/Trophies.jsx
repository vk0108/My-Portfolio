import { certifications } from "../data/portfolio";
import { useReveal } from "../hooks";
import SectionHead from "./SectionHead";

const TIER_ICON = { gold: "★", silver: "✦", bronze: "◆" };

export default function Trophies() {
  const ref = useReveal();
  const unlocked = certifications.length;

  return (
    <section id="trophies" className="section" ref={ref} data-reveal-root="">
      <div className="shell">
        <SectionHead
          kicker="05 / certifications"
          title="TROPHY CASE"
          note={`${unlocked} badges unlocked`}
        />

        <div className="trophies">
          {certifications.map((c, i) => (
            <article
              className={`trophy pxcard reveal t-${c.tier}`}
              key={c.name}
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              <div className="trophy__medal">
                <span>{TIER_ICON[c.tier]}</span>
              </div>
              <div className="trophy__text">
                <h3>{c.name}</h3>
                <p>
                  {c.issuer} <span className="trophy__date">· {c.date}</span>
                </p>
                {c.note && <span className="trophy__note">✧ {c.note}</span>}
              </div>
              <span className="trophy__tier">{c.tier.toUpperCase()}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
