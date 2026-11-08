import { buildWhatsAppLink } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function Hero() {
  const browseLink = "#products";
  const waLink = buildWhatsAppLink(
    "Hello Cake Zone! 🎂 I'd like to browse your menu and place an order."
  );

  return (
    <section className="hero" id="home">
      <div className="hero-bg-pattern" />
      <div className="hero-inner">
        {/* Left */}
        <div className="hero-content">
          <div className="hero-badge">
            Premium Bakery &amp; Gifting · Qatar
          </div>

          <h1 className="hero-title">
            Celebrate Every<br />
            Moment with <em>Sweet</em><br />
            Perfection
          </h1>

          <p className="hero-desc">
            Artisan cakes, fresh flowers &amp; luxury gifts crafted with love
            and delivered fresh across Qatar. Order effortlessly via WhatsApp —
            no account needed.
          </p>

          <div className="hero-actions">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <WhatsAppIcon />
              Order via WhatsApp
            </a>
            <a href={browseLink} className="btn-outline">
              Browse Menu ↓
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">500+</div>
              <div className="hero-stat-label">Happy Customers</div>
            </div>
            <div>
              <div className="hero-stat-num">36+</div>
              <div className="hero-stat-label">Menu Items</div>
            </div>
            <div>
              <div className="hero-stat-num">Same</div>
              <div className="hero-stat-label">Day Delivery</div>
            </div>
          </div>
        </div>

        {/* Right — floating card */}
        <div className="hero-visual">
          <div className="hero-image-stack">
            <div className="hero-card-main">
              <div className="cake-img" style={{background:"linear-gradient(135deg,#f9d9b7,#e8a46a)"}}>
                🎂
              </div>
              <div className="card-info">
                <h4>Royal Chocolate Dream</h4>
                <p>3-layer dark chocolate · Gold leaf finish</p>
                <a
                  href={buildWhatsAppLink("Hi! I'd like to order the Royal Chocolate Dream cake 🎂")}
                  target="_blank" rel="noreferrer"
                  className="wa-btn"
                >
                  <WhatsAppIcon /> Order Now — 180 QAR
                </a>
              </div>
            </div>

            <div className="hero-float-badge delivery">
              <div className="dot" />
              Same-day Delivery 🚚
            </div>

            <div className="hero-float-badge rating">
              5.0 Customer Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
