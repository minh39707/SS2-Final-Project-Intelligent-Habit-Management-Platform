export default function Header({ eyebrow, title, subtitle, action }) {
  return (
    <section className="page-header">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>

      {action ? <div>{action}</div> : null}
    </section>
  );
}
