import { galleryItems } from '../data.js';

export default function Gallery() {
  return (
    <section className="gallery container" id="gallery">
      <div className="gallery-header">
        <div className="section-label">Our Creations</div>
        <h2 className="section-title">A Taste of What We Make</h2>
        <p className="section-desc" style={{ margin: '10px auto 0', textAlign: 'center' }}>
          Every item is handcrafted with premium ingredients and delivered fresh across Qatar.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="gal-item"
            style={{ background: item.bg }}
          >
            <span style={{ fontSize: i === 0 ? '5rem' : '3.5rem' }}>{item.emoji}</span>
            <div className="gal-overlay">View {item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
