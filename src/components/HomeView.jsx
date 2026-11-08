import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WhatsAppIcon } from './Icons.jsx';
import {
  BUSINESS_CONFIG,
  discoveryCategories,
  hampersCatalogue,
  occasionsData,
  cakesCatalogue,
  whyChooseUs,
  instagramPosts,
  getProductWhatsAppUrl,
  getGeneralWhatsAppUrl,
  cakesCarousel,
  flowersCarousel,
  chocolatesCarousel,
  comboGiftsCarousel,
} from '../data.js';

// ─── Reusable horizontal product carousel ───────────────────────────────────
function ProductCarousel({ items, accentColor }) {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 480) setVisibleCount(1);
      else if (window.innerWidth <= 768) setVisibleCount(2);
      else if (window.innerWidth <= 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIdx = Math.max(0, items.length - visibleCount);

  const applyTransform = useCallback((idx) => {
    if (trackRef.current && trackRef.current.firstChild) {
      const cardW = trackRef.current.firstChild.offsetWidth;
      const gap = window.innerWidth <= 768 ? 14 : 20;
      trackRef.current.style.transform = `translateX(-${idx * (cardW + gap)}px)`;
    }
  }, []);

  const goTo = useCallback((idx) => {
    const clamped = Math.min(Math.max(idx, 0), maxIdx);
    setActiveIdx(clamped);
    applyTransform(clamped);
  }, [maxIdx, applyTransform]);

  // Recalculate on window resize
  useEffect(() => {
    applyTransform(activeIdx);
  }, [visibleCount, activeIdx, applyTransform]);

  // Auto-advance every 3.5s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => {
        const next = prev >= maxIdx ? 0 : prev + 1;
        applyTransform(next);
        return next;
      });
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [maxIdx, applyTransform]);

  return (
    <div className="pcarousel-wrap">
      {/* prev arrow */}
      <button
        className="pcarousel-arrow pcarousel-prev"
        onClick={() => goTo(activeIdx - 1)}
        aria-label="Previous"
        style={{ '--accent': accentColor }}
      >&#8249;</button>

      <div className="pcarousel-viewport">
        <div className="pcarousel-track" ref={trackRef}>
          {items.map((item) => {
            const waUrl = getProductWhatsAppUrl(item.name, item.price);
            return (
              <div className="pcarousel-card" key={item.id}>
                <div className="pcarousel-img-wrap">
                  {item.tag && <span className="pcarousel-tag" style={{ background: accentColor }}>{item.tag}</span>}
                  <img src={item.image} alt={item.name} />
                  <div className="pcarousel-hover-overlay">
                    <a href={waUrl} target="_blank" rel="noreferrer" className="pcarousel-order-btn">
                      <WhatsAppIcon size={16} /> Order Now
                    </a>
                  </div>
                </div>
                <div className="pcarousel-info">
                  <h4>{item.name}</h4>
                  <div className="pcarousel-price-row">
                    <span className="pcarousel-price">
                      <small>QAR</small> {item.price}
                    </span>
                    <a href={waUrl} target="_blank" rel="noreferrer" className="pcarousel-wa-link">
                      Enquire →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* next arrow */}
      <button
        className="pcarousel-arrow pcarousel-next"
        onClick={() => goTo(activeIdx + 1)}
        aria-label="Next"
        style={{ '--accent': accentColor }}
      >&#8250;</button>

      {/* dots */}
      <div className="pcarousel-dots">
        {Array.from({ length: maxIdx + 1 }).map((_, i) => (
          <button
            key={i}
            className={`pcarousel-dot ${i === activeIdx ? 'active' : ''}`}
            style={i === activeIdx ? { background: accentColor } : {}}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Category section wrapper ────────────────────────────────────────────────
function CategorySection({ id, emoji, label, title, desc, items, accentColor, viewAll }) {
  return (
    <section className="cat-section" id={id}>
      <div className="container">
        <div className="cat-header">
          <div className="cat-header-left">
            <span className="section-label">{emoji} {label}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-desc">{desc}</p>
          </div>
          <button
            type="button"
            className="cat-view-all-btn"
            style={{ borderColor: accentColor, color: accentColor }}
            onClick={viewAll}
          >
            View All →
          </button>
        </div>
        <ProductCarousel items={items} accentColor={accentColor} />
      </div>
    </section>
  );
}

const heroSlides = [
  {
    image: '/hero1.jpg',
    alt: 'Cake Zone – Artisan Bakes & Gift Sets',
    headline: 'Make Every Moment a',
    accent: 'Little More Special.',
    sub: 'Thoughtfully curated hampers, beautiful gifts and delicious cakes for every celebration in Qatar.',
  },
  {
    image: '/hero2.jpg',
    alt: 'Cake Zone – Fresh Bakes & Valentine Gifts',
    headline: 'Celebrate Love with',
    accent: 'Sweet Perfection.',
    sub: 'From artisan croissants to luxury hampers — delivered fresh across Qatar with same-day service.',
  },
  {
    image: '/hero3.jpg',
    alt: 'Cake Zone – Gift Cookies & Sweet Treats',
    headline: 'Gift Something They',
    accent: 'Will Never Forget.',
    sub: 'Handcrafted cookie boxes, premium sweets & personalised gifting — the perfect way to show you care.',
  },
];

function HeroSlider({ heroWaUrl, setCurrentView }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % heroSlides.length);
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const slide = heroSlides[current];

  return (
    <section className="hero-slider-section">
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''} ${animating && i === current ? 'fade-out' : ''}`}
          aria-hidden={i !== current}
        >
          <img src={s.image} alt={s.alt} className="hero-slide-img" />
          <div className="hero-slide-overlay" />
        </div>
      ))}

      {/* Text Content */}
      <div className="hero-slider-content">
        <div className="container">
          <div className="hero-text-wrap">
            <div className="hero-kicker">
              <span>🎁</span>
              <span>Gifting &amp; Celebration Boutique · Qatar</span>
            </div>
            <h1 className="hero-headline" key={current}>
              {slide.headline} <span className="accent">{slide.accent}</span>
            </h1>
            <p className="hero-copy" key={`copy-${current}`}>{slide.sub}</p>
            <div className="hero-ctas">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => { setCurrentView('hampers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Explore Our Hampers →
              </button>
              <a href={heroWaUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp-action">
                <WhatsAppIcon size={18} /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button className="slider-arrow slider-arrow-prev" onClick={prev} aria-label="Previous slide">&#8249;</button>
      <button className="slider-arrow slider-arrow-next" onClick={next} aria-label="Next slide">&#8250;</button>

      {/* Dots */}
      <div className="slider-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function HomeView({ setCurrentView, onSelectProduct, onSelectOccasion }) {
  const featuredHampers = hampersCatalogue.filter((h) => h.isFeatured);
  const heroWaUrl = getGeneralWhatsAppUrl("Explore Luxury Hampers & Gifts");
  const finalWaUrl = getGeneralWhatsAppUrl("Special Occasion Planning");

  return (
    <div className="home-view">
      {/* 01 · HERO SLIDER */}
      <HeroSlider heroWaUrl={heroWaUrl} setCurrentView={setCurrentView} />

      {/* 02 · CAKES CAROUSEL */}
      <CategorySection
        id="cakes-carousel"
        emoji="🎂"
        label="Fresh From Our Kitchen"
        title="Artisan Cakes for Every Celebration."
        desc="Handcrafted with premium ingredients — from celebration classics to bespoke creations, delivered fresh across Qatar."
        items={cakesCarousel}
        accentColor="#A66D68"
        viewAll={() => { setCurrentView('cakes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />

      {/* 03 · FLOWERS CAROUSEL */}
      <CategorySection
        id="flowers-carousel"
        emoji="🌸"
        label="Bloom & Flourish"
        title="Fresh Flower Arrangements & Bouquets."
        desc="Ecuadorian roses, preserved blooms, and seasonal arrangements — gifted with love and delivered same-day across Qatar."
        items={flowersCarousel}
        accentColor="#C57A8B"
        viewAll={() => { setCurrentView('hampers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />

      {/* 04 · CHOCOLATES CAROUSEL */}
      <CategorySection
        id="chocolates-carousel"
        emoji="🍫"
        label="Pure Indulgence"
        title="Luxury Chocolates & Sweet Treats."
        desc="Belgian pralines, gold-dusted truffles, stuffed Medjool dates and more — the perfect edible gift for every occasion."
        items={chocolatesCarousel}
        accentColor="#7B5B3A"
        viewAll={() => { setCurrentView('hampers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />

      {/* 05 · COMBO GIFTS CAROUSEL */}
      <CategorySection
        id="combos-carousel"
        emoji="🎁"
        label="Everything in One Box"
        title="Combo Gift Sets — Cake, Flowers & Chocolates."
        desc="Why choose one when you can have it all? Our curated combo sets combine cakes, fresh blooms and luxe chocolates in one stunning gift."
        items={comboGiftsCarousel}
        accentColor="#C59D5F"
        viewAll={() => { setCurrentView('hampers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />

      {/* 04 · OCCASION-BASED GIFTING */}
      <section className="occasions-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Celebrate Life's Moments</span>
            <h2 className="section-title">There's a Gift for Every Occasion.</h2>
            <p className="section-desc">
              Big celebrations, little surprises or moments when words aren't enough. Find a gift that makes the moment memorable.
            </p>
          </div>

          <div className="occasions-grid">
            {occasionsData.map((occ) => (
              <div
                key={occ.id}
                className="occasion-card"
                onClick={() => {
                  onSelectOccasion(occ);
                  setCurrentView('occasions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img src={occ.image} alt={occ.title} />
                <div className="occasion-overlay">
                  <h3>{occ.title}</h3>
                  <p>{occ.description}</p>
                  <span className="occasion-btn">
                    Browse {occ.title} Gifts →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · WHY CHOOSE US */}
      <section className="why-us-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Cake Zone Promise</span>
            <h2 className="section-title">It's Not Just a Gift. It's the Feeling Behind It.</h2>
            <p className="section-desc">
              We understand that behind every gift is a story, a connection, and a person who matters. Here is why Qatar trusts us with their most cherished celebrations.
            </p>
          </div>

          <div className="why-us-grid">
            {whyChooseUs.map((benefit, idx) => (
              <div key={idx} className="why-us-card">
                <div className="why-us-icon-wrap">
                  {benefit.icon === 'sparkles' && '👑'}
                  {benefit.icon === 'gift' && '🎁'}
                  {benefit.icon === 'calendar' && '📅'}
                  {benefit.icon === 'heart' && '🤍'}
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · CAKES & TREATS TEASER (Supporting Category, Kept Smaller) */}
      <section className="cakes-teaser-section">
        <div className="container">
          <div className="cakes-teaser-card">
            <div className="cakes-teaser-content">
              <span className="section-label" style={{ textAlign: 'left', display: 'inline-block' }}>
                Secondary Boutique Range
              </span>
              <h3>A Little Sweetness Makes Every Celebration Better.</h3>
              <p>
                Complete your celebrations with delicious cakes and sweet treats from Cake Zone. Whether it's a birthday, anniversary or a simple get-together, make every occasion a little sweeter.
              </p>

              <div className="cakes-teaser-list">
                <div className="cakes-teaser-item">
                  <span className="bullet">✓</span>
                  <span>Signature Honey Cake (Medovik)</span>
                </div>
                <div className="cakes-teaser-item">
                  <span className="bullet">✓</span>
                  <span>Custom Milestone Creations</span>
                </div>
                <div className="cakes-teaser-item">
                  <span className="bullet">✓</span>
                  <span>Belgian Ganache &amp; Red Velvet</span>
                </div>
                <div className="cakes-teaser-item">
                  <span className="bullet">✓</span>
                  <span>Gourmet Macarons &amp; Cupcakes</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-rose"
                onClick={() => {
                  setCurrentView('cakes');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Explore Our Cakes →
              </button>
            </div>

            <div className="cakes-teaser-visual">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
                alt="Cake Zone Signature Honey Cake"
              />
              <img
                src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80"
                alt="Belgian Chocolate Celebration Cake"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 07 · INSTAGRAM GALLERY */}
      <section className="instagram-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Follow Our Journey</span>
            <h2 className="section-title">A Peek Into Our World of Gifting.</h2>
            <p className="section-desc">
              Capturing daily celebration deliveries, hamper arrangements, packaging details, and joyful unboxing memories across Qatar.
            </p>
          </div>

          <div className="instagram-grid">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="instagram-item"
              >
                <img src={post.image} alt={post.caption} />
                <div className="instagram-overlay">
                  <p>{post.caption}</p>
                  <span>♥ {post.likes} likes</span>
                </div>
              </a>
            ))}
          </div>

          <div className="instagram-cta-bar">
            <a
              href={BUSINESS_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ig-follow"
            >
              <span>📷</span> Follow Us on Instagram {BUSINESS_CONFIG.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      {/* 08 · FINAL ENQUIRY BANNER */}
      <section className="final-enquiry-section">
        <div className="container">
          <div className="final-enquiry-box">
            <h2>Have a Special Occasion Coming Up?</h2>
            <p>
              Let us help you find the perfect gift. Get in touch with Cake Zone and make someone's day extra special.
            </p>

            <div className="final-enquiry-ctas">
              <a
                href={finalWaUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp-action"
                style={{ padding: '16px 36px', fontSize: '1rem' }}
              >
                <WhatsAppIcon size={20} /> Chat with Us on WhatsApp
              </a>

              <a
                href={`tel:+${BUSINESS_CONFIG.phoneRaw}`}
                className="btn btn-primary"
                style={{ padding: '16px 36px', fontSize: '1rem' }}
              >
                <span>📞</span> Call Us: {BUSINESS_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
