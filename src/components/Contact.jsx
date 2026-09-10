import { useState } from "react";
import { profile } from "../data/portfolio";
import { useReveal } from "../hooks";
import SectionHead from "./SectionHead";

const CHANNELS = [
  { key: "EMAIL", value: profile.email, href: `mailto:${profile.email}`, icon: "✉", tone: "pink", copy: true },
  { key: "LINKEDIN", value: "in/krithika-venkatesh-a951a3289", href: profile.linkedin, icon: "in", tone: "sky" },
  { key: "GITHUB", value: `@${profile.handle}`, href: profile.github, icon: "</>", tone: "lav" },
];

const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent(profile.emailSubject)}`;

export default function Contact() {
  const ref = useReveal();
  const [copied, setCopied] = useState("");

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1600);
    } catch {
      /* clipboard unavailable — the link still works */
    }
  };

  return (
    <section id="contact" className="section section--alt" ref={ref} data-reveal-root="">
      <div className="shell">
        <SectionHead kicker="06 / contact" title="MULTIPLAYER MODE" note="send an invite" />

        <div className="contact">
          <div className="contact__pitch pxcard reveal">
            <span className="contact__prompt">PLAYER 2, READY?</span>
            <h3>Let's build something intelligent together.</h3>
            <p>
              I'm looking for AI engineering and ML roles where I can design agentic systems
              and ship them to production. Internships, full-time roles and interesting side
              projects are all welcome.
            </p>
            <a className="btn btn-primary" href={GMAIL_URL} target="_blank" rel="noreferrer">
              ▶ PRESS START
            </a>
          </div>

          <div className="contact__channels">
            {CHANNELS.map((c, i) => (
              <div
                className={`channel pxcard reveal a-${c.tone}`}
                key={c.key}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="channel__icon">{c.icon}</span>
                <a
                  className="channel__body"
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <span className="channel__key">{c.key}</span>
                  <span className="channel__value">{c.value}</span>
                </a>
                {c.copy ? (
                  <button
                    className="channel__copy"
                    onClick={() => copy(c.value, c.key)}
                    aria-label={`Copy ${c.key.toLowerCase()}`}
                  >
                    {copied === c.key ? "COPIED!" : "COPY"}
                  </button>
                ) : (
                  <span className="channel__go" aria-hidden="true">↗</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
