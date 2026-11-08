import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS_CONFIG, getGeneralWhatsAppUrl } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
  },
  {
    id: 'cakes',
    label: 'Cakes',
    icon: '🎂',
    dropdown: [
      { label: 'Birthday Cakes', sub: 'Custom & themed' },
      { label: 'Celebration Cakes', sub: 'Honey, Red Velvet & more' },
      { label: 'Chocolate Ganache', sub: 'Belgian dark & milk' },
      { label: 'Cupcakes & Desserts', sub: 'Party packs & boxes' },
      { label: 'Bespoke / Custom', sub: 'Your design, our craft' },
    ],
  },
  {
    id: 'flowers',
    label: 'Flowers',
    icon: '🌸',
    dropdown: [
      { label: 'Rose Bouquets', sub: 'Ecuadorian long-stem roses' },
      { label: 'Preserved Flowers', sub: 'Lasts forever, no water' },
      { label: 'Mixed Bloom Boxes', sub: 'Peonies, tulips & more' },
      { label: 'Sunflower Arrangements', sub: 'Bright & cheerful' },
      { label: 'Luxury Floral Sets', sub: 'For premium gifting' },
    ],
  },
  {
    id: 'chocolates',
    label: 'Chocolates',
    icon: '🍫',
    dropdown: [
      { label: 'Belgian Truffles', sub: '16 & 24 pcs luxury boxes' },
      { label: 'Gold-Dusted Pralines', sub: '24k edible gold finish' },
      { label: 'Stuffed Medjool Dates', sub: 'Arabic sweet tradition' },
      { label: 'Artisan Chocolate Bars', sub: 'Single-origin dark cocoa' },
      { label: 'Ramadan Chocolate Trunk', sub: 'Seasonal special' },
    ],
  },
  {
    id: 'combos',
    label: 'Combo Gifts',
    icon: '🎁',
    dropdown: [
      { label: 'Cake + Flowers', sub: 'The classic duo' },
      { label: 'Chocolate + Flowers', sub: 'Romantic indulgence' },
      { label: 'Birthday Hamper Supreme', sub: 'Complete celebration set' },
      { label: 'Premium Signature Hamper', sub: 'Royal luxury gifting' },
      { label: 'Eid Celebration Combo', sub: 'Seasonal festive set' },
    ],
  },
  {
    id: 'occasions',
    label: 'Occasions',
    icon: '🎉',
    dropdown: [
      { label: 'Birthdays', sub: 'Make their day unforgettable' },
      { label: 'Anniversaries', sub: 'Celebrate your love story' },
      { label: 'Newborn Celebrations', sub: 'Welcome the little angel' },
      { label: 'Corporate Gifting', sub: 'VIP & team appreciation' },
      { label: 'Eid & Ramadan', sub: 'Sacred gifting traditions' },
    ],
  },
  {
    id: 'about',
    label: 'About Us',
    icon: '📖',
  },
];

const tickerItems = [
  "🔥 Special Celebration Offer — Up to 20% OFF on Selected Luxury Hampers & Combos!",
  "Freshly Baked with Love Every Morning in Doha · 100% Artisan Quality Cakes",
  "🚚 Same-Day Delivery Across All Qatar Municipalities — Order Before 3 PM",
  "🎂 Custom Milestone & Birthday Cakes Handcrafted to Your Design",
  "🌸 Fresh Ecuadorian Long-Stem Roses & Preserved Luxury Blooms",
  "🍫 Handcrafted Belgian Chocolate Pralines & Stuffed Medjool Dates",
  "💬 Instant WhatsApp Concierge — Order Directly with No Login Needed!",
];

export default function Navbar({ currentView, setCurrentView }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const headerWaUrl = getGeneralWhatsAppUrl('General Order & Delivery Enquiry');
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  // close dropdown on outside click
  useEffect(() => {
    const handler = () => setOpenDropdown(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const navigate = (id) => {
    setCurrentView(id);
    setMobileOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Continuous Moving Announcement Ticker (Top of Navbar) ── */}
      <div className="nb-ticker-bar">
        <div className="nb-ticker-track">
          <div className="nb-ticker-content">
            {tickerItems.map((text, idx) => (
              <span key={`t1-${idx}`} className="nb-ticker-item">
                {text}
              </span>
            ))}
          </div>
          <div className="nb-ticker-content" aria-hidden="true">
            {tickerItems.map((text, idx) => (
              <span key={`t2-${idx}`} className="nb-ticker-item">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <header className={`nb-header ${scrolled ? 'nb-scrolled' : ''}`}>
        {/* ── Row 1: Logo · Search · Icons ── */}
        <div className="nb-top-row">
          <div className="container nb-top-inner">

            {/* Logo */}
            <div className="nb-logo" onClick={() => navigate('home')}>
              <div className="nb-logo-icon">🎂</div>
              <div className="nb-logo-text">
                <span className="nb-brand">Cake Zone</span>
                <span className="nb-sub">Qatar · Gifting Boutique</span>
              </div>
            </div>

            {/* Search bar */}
            <div className={`nb-search-wrap ${searchOpen ? 'open' : ''}`}>
              <input
                ref={searchRef}
                className="nb-search-input"
                type="text"
                placeholder="Search cakes, flowers, chocolates…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="nb-search-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
                🔍
              </button>
            </div>

            {/* Right icons */}
            <div className="nb-icons">
              <a href={headerWaUrl} target="_blank" rel="noreferrer" className="nb-icon-btn nb-wa-pill">
                <WhatsAppIcon size={16} /><span className="nb-icon-label">WhatsApp</span>
              </a>
              <button className="nb-icon-btn" onClick={() => navigate('about')} aria-label="Contact">
                <span>📞</span><span className="nb-icon-label">Contact</span>
              </button>
              <button
                className="nb-hamburger"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                <span className={mobileOpen ? 'open' : ''} />
                <span className={mobileOpen ? 'open' : ''} />
                <span className={mobileOpen ? 'open' : ''} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Row 2: Main nav links with dropdowns ── */}
        <nav className="nb-nav-row">
          <div className="container nb-nav-inner">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="nb-nav-item"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={`nb-nav-link ${currentView === item.id ? 'active' : ''}`}
                  onClick={() => navigate(item.id)}
                >
                  {item.label}
                  {item.dropdown && <span className="nb-chevron">▾</span>}
                </button>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.id && (
                  <div className="nb-dropdown">
                    <div className="nb-dropdown-inner">
                      {item.dropdown.map((d, i) => (
                        <button
                          key={i}
                          className="nb-dropdown-item"
                          onClick={() => navigate(item.id)}
                        >
                          <span className="nb-dd-label">{d.label}</span>
                          <span className="nb-dd-sub">{d.sub}</span>
                        </button>
                      ))}
                      <div className="nb-dropdown-cta">
                        <button className="nb-dd-cta-btn" onClick={() => navigate(item.id)}>
                          View All {item.label} →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="nb-mobile-drawer">
          <div className="nb-mobile-search">
            <input
              type="text"
              placeholder="Search cakes, flowers…"
              className="nb-search-input"
            />
            <span>🔍</span>
          </div>

          {navItems.map((item) => (
            <div key={item.id} className="nb-mobile-item">
              <button
                className={`nb-mobile-link ${currentView === item.id ? 'active' : ''}`}
                onClick={() => {
                  if (item.dropdown) {
                    setMobileExpanded(mobileExpanded === item.id ? null : item.id);
                  } else {
                    navigate(item.id);
                  }
                }}
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <span className="nb-mobile-chevron">
                    {mobileExpanded === item.id ? '▴' : '▾'}
                  </span>
                )}
              </button>

              {item.dropdown && mobileExpanded === item.id && (
                <div className="nb-mobile-sub">
                  {item.dropdown.map((d, i) => (
                    <button key={i} className="nb-mobile-sublink" onClick={() => navigate(item.id)}>
                      {d.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a href={headerWaUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp-action nb-mobile-wa">
            <WhatsAppIcon size={18} /> Chat on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
