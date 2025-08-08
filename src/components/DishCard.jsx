export default function DishCard({ name, image, desc, price, tags = [] }) {
  return (
    <article className="card">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-serif text-xl">{name}</h4>
          <span className="font-semibold text-olive">${price.toFixed(2)}</span>
        </div>
        <p className="mt-2 text-sm opacity-90">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs bg-olive/10 text-olive px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
