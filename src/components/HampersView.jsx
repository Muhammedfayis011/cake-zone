import React, { useState } from 'react';
import {
  hampersCatalogue,
  getProductWhatsAppUrl,
  BUSINESS_CONFIG
} from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function HampersView({ onSelectProduct }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHampers = hampersCatalogue.filter((hamper) => {
    return (
      hamper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hamper.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="hampers-catalogue-page" style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Page Header (Brief Page 5 Section 04) */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-label">Main Catalogue</span>
          <h1 className="section-title">Gifts That Make Every Moment Special.</h1>
          <p className="section-desc">
            Explore our collection of thoughtfully curated hampers and beautiful gifts, created to bring happiness to the people who matter.
          </p>
        </div>

        {/* Search & Notice Bar */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 36px',
            display: 'flex',
            gap: '12px'
          }}
        >
          <input
            type="text"
            placeholder="Search hampers by keyword (e.g. chocolate, roses, luxury, birthday)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flexGrow: 1,
              padding: '12px 20px',
              borderRadius: '9999px',
              border: '1.5px solid var(--color-border)',
              backgroundColor: '#FFFFFF',
              fontSize: '0.9rem',
              outline: 'none',
              color: 'var(--color-espresso)'
            }}
          />
          {searchQuery && (
            <button
              className="btn btn-secondary"
              onClick={() => setSearchQuery('')}
              style={{ padding: '8px 18px', fontSize: '0.8rem' }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredHampers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-espresso)', marginBottom: '12px' }}>
              No hampers found matching your selection
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              Looking for a custom arrangement or specific gift items?
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSearchQuery('');
              }}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredHampers.map((hamper) => {
              const waUrl = getProductWhatsAppUrl(hamper.name, hamper.price);
              return (
                <div key={hamper.id} className="product-card">
                  <div
                    className="product-media-wrap"
                    onClick={() => onSelectProduct(hamper)}
                  >
                    {hamper.badge && (
                      <span className="product-badge-pill">{hamper.badge}</span>
                    )}
                    <img src={hamper.image} alt={hamper.name} />
                    <div className="product-quick-view-overlay">
                      <span className="quick-view-btn">View Details &amp; What's Included</span>
                    </div>
                  </div>

                  <div className="product-content">
                    <div className="product-meta-row">
                      <span className="product-cat">{hamper.category}</span>
                      <span className="product-price">
                        <small>QAR</small> {hamper.price}
                      </span>
                    </div>

                    <h3
                      className="product-name"
                      onClick={() => onSelectProduct(hamper)}
                    >
                      {hamper.name}
                    </h3>

                    <p className="product-one-line">{hamper.shortDescription}</p>

                    <div className="product-card-actions">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-enquire-wa"
                      >
                        <WhatsAppIcon size={16} /> Enquire on WhatsApp
                      </a>
                      <button
                        type="button"
                        className="btn-details"
                        onClick={() => onSelectProduct(hamper)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Note on Ordering / Bleems QA Standard */}
        <div
          style={{
            marginTop: '60px',
            padding: '28px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            textAlign: 'center',
            maxWidth: '780px',
            margin: '60px auto 0'
          }}
        >
          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-espresso)', marginBottom: '8px' }}>
            Personalized Corporate &amp; Bulk Gifting in Qatar
          </h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
            Need custom branded ribbons, company logo plaques, or bulk deliveries across multiple offices in Doha? We tailor every detail with direct concierge service.
          </p>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent("Hello Cake Zone! I would like to enquire about Corporate & Bulk Gift Hampers.")}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '0.84rem', padding: '10px 22px' }}
          >
            <WhatsAppIcon size={16} /> Enquire for Corporate &amp; Bulk Orders
          </a>
        </div>
      </div>
    </div>
  );
}
