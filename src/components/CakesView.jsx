import React from 'react';
import { cakesCatalogue, getProductWhatsAppUrl, BUSINESS_CONFIG } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function CakesView({ onSelectProduct }) {
  return (
    <div className="cakes-catalogue-page" style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Page Header (Brief Page 5 Section 05) */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-label">Secondary Catalogue</span>
          <h1 className="section-title">Sweet Creations for Beautiful Celebrations.</h1>
          <p className="section-desc">
            From delightful birthday cakes to special celebration creations, discover sweet treats that add something extra to your memorable moments.
          </p>
        </div>

        {/* Cakes Grid */}
        <div className="products-grid">
          {cakesCatalogue.map((cake) => {
            const waUrl = getProductWhatsAppUrl(cake.name, cake.price);

            // Adapt cake object for product detail modal if clicked
            const modalCake = {
              ...cake,
              shortDescription: cake.description,
              included: [
                `Freshly baked gourmet cake (${cake.servings})`,
                'Cake Zone signature luxury celebration box',
                'Complimentary birthday candles & cake knife',
                'Custom handwritten message card'
              ],
              customization: 'Flavor, lettering message, and dietary adjustments (eggless/gluten-friendly on request).'
            };

            return (
              <div key={cake.id} className="product-card">
                <div
                  className="product-media-wrap"
                  onClick={() => onSelectProduct(modalCake)}
                >
                  <span className="product-badge-pill" style={{ backgroundColor: 'var(--color-espresso)', color: '#FFFFFF' }}>
                    {cake.servings}
                  </span>
                  <img src={cake.image} alt={cake.name} />
                  <div className="product-quick-view-overlay">
                    <span className="quick-view-btn">View Flavors &amp; Customization</span>
                  </div>
                </div>

                <div className="product-content">
                  <div className="product-meta-row">
                    <span className="product-cat">{cake.category}</span>
                    <span className="product-price">
                      <small>QAR</small> {cake.price}
                    </span>
                  </div>

                  <h3
                    className="product-name"
                    onClick={() => onSelectProduct(modalCake)}
                  >
                    {cake.name}
                  </h3>

                  <p className="product-one-line">{cake.description}</p>

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
                      onClick={() => onSelectProduct(modalCake)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Cake Enquiry Box */}
        <div
          style={{
            marginTop: '70px',
            backgroundColor: 'var(--color-ivory-light)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            padding: '40px',
            textAlign: 'center',
            maxWidth: '820px',
            margin: '70px auto 0'
          }}
        >
          <span className="badge badge-rose" style={{ marginBottom: '12px' }}>
            Custom Cake Studio
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.9rem',
              color: 'var(--color-espresso)',
              marginBottom: '12px'
            }}
          >
            Have an Inspiring Cake Design or Pinterest Idea?
          </h3>
          <p
            style={{
              fontSize: '0.94rem',
              color: 'var(--color-text-body)',
              lineHeight: '1.7',
              marginBottom: '24px'
            }}
          >
            Send your reference photo or vision directly to our pastry team on WhatsApp. We accommodate personalized themes, tier sizes, edible sugar flowers, and flavor customizations.
          </p>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent("Hello Cake Zone! I would like to enquire about a custom cake design with reference photos.")}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <WhatsAppIcon size={18} /> Share Your Reference Photo on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
