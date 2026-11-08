import React from 'react';
import { BUSINESS_CONFIG, getGeneralWhatsAppUrl } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function Footer({ setCurrentView }) {
  const handleNav = (viewId) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerWaUrl = getGeneralWhatsAppUrl("General Order & Gifting Enquiry");

  const deliveryLocations = [
    "Doha", "The Pearl-Qatar", "Lusail Marina", "West Bay", 
    "Al Wakrah", "Al Rayyan", "Al Khor", "All Qatar Areas"
  ];

  return (
    <footer className="site-footer">
      {/* ── Pre-Footer Trust & Service Highlights Bar ── */}
      <div className="footer-highlights-bar">
        <div className="container">
          <div className="footer-highlights-grid">
            <div className="f-highlight-item">
              <span className="f-highlight-icon">🚚</span>
              <div>
                <h5>Same-Day Qatar Delivery</h5>
                <p>Swift delivery across Doha, Lusail &amp; all municipalities</p>
              </div>
            </div>
            <div className="f-highlight-item">
              <span className="f-highlight-icon">🎂</span>
              <div>
                <h5>100% Artisan Handcrafted</h5>
                <p>Baked daily with premium ingredients &amp; Belgian chocolate</p>
              </div>
            </div>
            <div className="f-highlight-item">
              <span className="f-highlight-icon">💌</span>
              <div>
                <h5>Calligraphy Greeting Cards</h5>
                <p>Custom handwritten messages &amp; luxury wax seal finish</p>
              </div>
            </div>
            <div className="f-highlight-item">
              <span className="f-highlight-icon">💬</span>
              <div>
                <h5>Effortless WhatsApp Orders</h5>
                <p>No login or checkout friction — instant concierge reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="container">
        <div className="footer-top-grid">

          {/* Column 1: Brand & Philosophy */}
          <div className="footer-brand">
            <div className="footer-logo" onClick={() => handleNav('home')}>
              <span className="f-brand-name">Cake Zone</span>
              <span className="f-brand-sub">Qatar · Luxury Gifting Boutique</span>
            </div>
            <p className="f-brand-desc">
              Thoughtful Gifts. Beautiful Memories. Qatar's premier destination for bespoke celebration cakes, Ecuadorian rose arrangements, handcrafted Belgian chocolates, and curated luxury gift trunks.
            </p>

            <div className="footer-brand-actions">
              <a
                href={footerWaUrl}
                target="_blank"
                rel="noreferrer"
                className="f-btn f-btn-wa"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon size={16} /> Order on WhatsApp
              </a>
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="f-btn f-btn-ig"
                aria-label="Instagram"
              >
                <span>📷</span> {BUSINESS_CONFIG.instagramHandle}
              </a>
            </div>
          </div>

          {/* Column 2: Curated Boutique Collections */}
          <div className="footer-links-col">
            <h4>Boutique Collections</h4>
            <ul>
              <li>
                <button onClick={() => handleNav('cakes')}>Artisan Celebration Cakes</button>
              </li>
              <li>
                <button onClick={() => handleNav('flowers')}>Fresh &amp; Preserved Flowers</button>
              </li>
              <li>
                <button onClick={() => handleNav('chocolates')}>Luxury Belgian Chocolates</button>
              </li>
              <li>
                <button onClick={() => handleNav('combos')}>Combo Sets (Cake &amp; Flowers)</button>
              </li>
              <li>
                <button onClick={() => handleNav('hampers')}>Curated Gifting Hampers</button>
              </li>
              <li>
                <button onClick={() => handleNav('about')}>Custom Milestone Cakes</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Occasion-Led Gifting */}
          <div className="footer-links-col">
            <h4>Occasion Gifting</h4>
            <ul>
              <li>
                <button onClick={() => handleNav('occasions')}>Birthday Milestones</button>
              </li>
              <li>
                <button onClick={() => handleNav('occasions')}>Anniversaries &amp; Romance</button>
              </li>
              <li>
                <button onClick={() => handleNav('occasions')}>Newborn &amp; Baby Showers</button>
              </li>
              <li>
                <button onClick={() => handleNav('occasions')}>Corporate VIP Gestures</button>
              </li>
              <li>
                <button onClick={() => handleNav('occasions')}>Eid Mubarak &amp; Ramadan Trunks</button>
              </li>
              <li>
                <button onClick={() => handleNav('occasions')}>Graduation &amp; Achievements</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Concierge & Location */}
          <div className="footer-links-col footer-contact-col">
            <h4>Boutique Concierge</h4>
            
            <a
              href={footerWaUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-card"
            >
              <div className="f-card-icon f-wa-bg">
                <WhatsAppIcon size={18} color="#FFFFFF" />
              </div>
              <div>
                <span className="f-card-label">WhatsApp Concierge</span>
                <span className="f-card-val">{BUSINESS_CONFIG.phoneDisplay}</span>
              </div>
            </a>

            <a
              href={`tel:+${BUSINESS_CONFIG.phoneRaw}`}
              className="footer-contact-card"
            >
              <div className="f-card-icon f-phone-bg">
                <span>📞</span>
              </div>
              <div>
                <span className="f-card-label">Telephone Order Line</span>
                <span className="f-card-val">{BUSINESS_CONFIG.phoneDisplay}</span>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS_CONFIG.email}`}
              className="footer-contact-card"
            >
              <div className="f-card-icon f-email-bg">
                <span>✉️</span>
              </div>
              <div>
                <span className="f-card-label">Email Enquiries</span>
                <span className="f-card-val">{BUSINESS_CONFIG.email}</span>
              </div>
            </a>

            <div className="footer-contact-card">
              <div className="f-card-icon f-loc-bg">
                <span>📍</span>
              </div>
              <div>
                <span className="f-card-label">Boutique Kitchen &amp; Studio</span>
                <span className="f-card-val">{BUSINESS_CONFIG.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Qatar Delivery Areas Strip ── */}
        <div className="footer-delivery-strip">
          <span className="f-delivery-label">Delivering Daily Across:</span>
          <div className="f-delivery-tags">
            {deliveryLocations.map((loc, i) => (
              <span key={i} className="f-delivery-tag">
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom-bar">
          <div className="f-bottom-copy">
            © {new Date().getFullYear()} <strong>Cake Zone Qatar</strong>. All rights reserved.
          </div>
          <div className="f-bottom-tagline">
            Thoughtful Gifts. Beautiful Memories. Made with Love in Doha.
          </div>
          <div className="f-bottom-links">
            <button onClick={() => handleNav('about')}>About Us</button>
            <span>•</span>
            <button onClick={() => handleNav('about')}>Contact</button>
            <span>•</span>
            <a href={footerWaUrl} target="_blank" rel="noreferrer">Same-Day Delivery FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
