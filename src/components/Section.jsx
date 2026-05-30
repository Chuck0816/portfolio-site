export default function Section({ eyebrow, title, children, id, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <div className="section-heading max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
