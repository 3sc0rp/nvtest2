export default function SectionTitle({ overline, title, subtitle }) {
  return (
    <div>
      {overline && <div className="text-xs tracking-widest uppercase text-olive">{overline}</div>}
      <h2 className="font-serif text-3xl md:text-4xl mt-2">{title}</h2>
      {subtitle && <p className="mt-3 opacity-80 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
