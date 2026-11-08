import React, { useState } from 'react';
import {
  occasionsData,
  hampersCatalogue,
  getOccasionWhatsAppUrl,
  getProductWhatsAppUrl
} from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function OccasionsView({ activeOccasion, onSelectProduct }) {
  const [selectedOccasion, setSelectedOccasion] = useState(
    activeOccasion || occasionsData[0]
  );

  // Match hampers recommended for this occasion
  const matchingHampers = hampersCatalogue.filter((h) =>
    selectedOccasion.recommendedHampers.some((recName) =>
      h.name.toLowerCase().includes(recName.toLowerCase()) ||
      recName.toLowerCase().includes(h.name.toLowerCase())
    )
  );

  const occWhatsAppUrl = getOccasionWhatsAppUrl(selectedOccasion.title);

  return (
    <div className="occasions-view-page" style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <span className="section-label">Occasion-Led Discovery</span>
          <h1 className="section-title">Gifts Curated by Occasion.</h1>
          <p className="section-desc">
            Whether you are celebrating a yearly milestone, expressing eternal love, or celebrating a new blessing, find gifts designed specifically for your moment.
          </p>
        </div>

        {/* Selected Occasion Feature Spotlight Banner */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '60px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}
        >
          <div style={{ height: '360px' }}>
            <img
              src={selectedOccasion.image}
              alt={selectedOccasion.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              padding: '44px 38px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <span className="section-label" style={{ textAlign: 'left', display: 'inline-block' }}>
              Celebration Spotlight
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.2rem',
                color: 'var(--color-espresso)',
                marginBottom: '12px'
              }}
            >
              {selectedOccasion.title}
            </h2>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.98rem',
                color: 'var(--color-muted-rose)',
                fontWeight: 600,
                marginBottom: '16px'
              }}
            >
              {selectedOccasion.subtitle}
            </h4>
            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--color-text-body)',
                lineHeight: '1.7',
                marginBottom: '28px'
              }}
            >
              {selectedOccasion.description}
            </p>

            <div>
              <a
                href={occWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp-action"
              >
                <WhatsAppIcon size={18} /> Custom {selectedOccasion.title} Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Hampers Tailored for this occasion */}
        <div style={{ marginBottom: '36px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              color: 'var(--color-espresso)',
              marginBottom: '8px'
            }}
          >
            Recommended for {selectedOccasion.title}
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Handpicked hampers designed to surprise and delight for this celebration.
          </p>
        </div>

        <div className="products-grid">
          {matchingHampers.map((hamper) => {
            const waUrl = getProductWhatsAppUrl(
              `${hamper.name} (for ${selectedOccasion.title})`,
              hamper.price
            );
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
                    <span className="quick-view-btn">View Details &amp; Options</span>
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
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
