export default function SectionHead({ kicker, title, note }) {
  return (
    <header className="section-head reveal">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">
        <span className="tspark">◆</span>
        {title}
        {note && <span className="section-note">// {note}</span>}
      </h2>
      <div className="section-rule" />
    </header>
  );
}
