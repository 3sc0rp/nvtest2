export default function GalleryGrid({ images = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {images.map((src, i) => (
        <figure key={i} className="card">
          <img src={src} alt={`Gallery ${i+1}`} className="w-full h-64 object-cover" />
        </figure>
      ))}
    </div>
  );
}
