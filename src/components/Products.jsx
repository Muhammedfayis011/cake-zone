import { useState, useEffect, useRef } from 'react';
import { categories, products, buildWhatsAppLink } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

function ProductCard({ product }) {
  const msg = `Hi Cake Zone! 🎂\nI'd like to order:\n*${product.name}*\nPrice: ${product.price} ${product.currency}\n\nPlease let me know the available sizes and delivery details. Thank you!`;
  const link = buildWhatsAppLink(msg);

  const badgeLabel = { bestseller: "Best Seller", new: "New", sale: "Sale" };

  return (
    <div className="product-card">
      <div className="product-img">
        <div className="emoji-img" style={{ background: product.bg }}>
          {product.emoji}
        </div>
        {product.badge && (
          <span className={`product-badge ${product.badge}`}>
            {badgeLabel[product.badge]}
          </span>
        )}
      </div>
      <div className="product-body">
        <div className="product-category">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-desc">{product.desc}</div>
        <div className="product-footer">
          <div className="product-price">
            <span className="currency">{product.currency} </span>
            {product.price}
          </div>
          <a href={link} target="_blank" rel="noreferrer" className="btn-order">
            <WhatsAppIcon />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="products container" id="products" ref={ref}>
      {/* Categories */}
      <section className="categories">
        <div className="categories-header">
          <div className="section-label">Our Menu</div>
          <h2 className="section-title">What Would You Like?</h2>
          <p className="section-desc">
            From bespoke celebration cakes to luxury floral arrangements — everything made fresh to order.
          </p>
        </div>
        <div className="categories-grid">
          {categories.map(cat => (
            <div
              key={cat.id}
              className={`cat-card${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <div className="cat-emoji">{cat.emoji}</div>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-count">{cat.count} items</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <div className="products-header">
        <div>
          <div className="section-label">Fresh &amp; Handmade</div>
          <h2 className="section-title">
            {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name}
          </h2>
        </div>
        <a
          href={buildWhatsAppLink("Hi! I'd like to see the full menu of Cake Zone Qatar 🎂")}
          target="_blank" rel="noreferrer"
          className="btn-whatsapp"
        >
          <WhatsAppIcon /> Custom Order
        </a>
      </div>
      <div className="products-grid">
        {filtered.map(p => (
          <div key={p.id} className="reveal">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
