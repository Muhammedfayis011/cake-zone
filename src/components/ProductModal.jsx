import React, { useState } from 'react';
import { getProductWhatsAppUrl, BUSINESS_CONFIG } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [customRibbon, setCustomRibbon] = useState('Classic Gold');
  const [customNote, setCustomNote] = useState('');

  const images = [product.image, ...(product.additionalImages || [])];

  const handleWhatsAppEnquiry = () => {
    let customDetails = "";
    if (customRibbon || customNote) {
      customDetails = `\n(Custom Ribbon: ${customRibbon}${customNote ? ` | Card Message: "${customNote}"` : ""})`;
    }
    const fullProductName = `${product.name}${customDetails}`;
    const url = getProductWhatsAppUrl(fullProductName, product.price);
    window.open(url, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="product-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          ✕
        </button>

        <div className="modal-grid">
          {/* Gallery View */}
          <div className="modal-gallery">
            <img src={selectedImage} alt={product.name} className="modal-main-image" />
            {images.length > 1 && (
              <div className="modal-thumbs">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className={`modal-thumb ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            )}
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <span className="badge badge-gold">Verified Cake Zone Boutique Quality</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="modal-details">
            <span className="product-cat">{product.category}</span>
            <h2>{product.name}</h2>

            <div className="modal-price-box">
              <span className="modal-price-val">
                <small>QAR</small> {product.price}
              </span>
              {product.leadTime && (
                <span className="modal-lead-chip">
                  🚚 {product.leadTime}
                </span>
              )}
            </div>

            <p className="modal-desc">{product.shortDescription}</p>

            {/* What's Included */}
            {product.included && product.included.length > 0 && (
              <div className="modal-spec-block">
                <h5>What's Included in This Hamper:</h5>
                <ul>
                  {product.included.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Customization Options */}
            {product.customization && (
              <div className="modal-spec-block" style={{ backgroundColor: '#FAF6F0' }}>
                <h5>Personalisation & Options:</h5>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-body)', marginBottom: '10px' }}>
                  {product.customization}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-espresso)' }}>
                      Ribbon Color
                    </label>
                    <select
                      value={customRibbon}
                      onChange={(e) => setCustomRibbon(e.target.value)}
                      style={{ width: '100%', padding: '6px 10px', fontSize: '0.78rem', borderRadius: '6px', border: '1px solid var(--color-border)' }}
                    >
                      <option value="Classic Gold">Classic Gold</option>
                      <option value="Rose Blush">Rose Blush</option>
                      <option value="Warm Ivory">Warm Ivory</option>
                      <option value="Espresso Silk">Espresso Silk</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-espresso)' }}>
                      Gift Note / Card
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Happy Birthday Sarah!"
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      style={{ width: '100%', padding: '6px 10px', fontSize: '0.78rem', borderRadius: '6px', border: '1px solid var(--color-border)' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-whatsapp-action"
                style={{ width: '100%', padding: '14px 20px', fontSize: '0.95rem' }}
                onClick={handleWhatsAppEnquiry}
              >
                <WhatsAppIcon size={18} /> Enquire on WhatsApp · Instant Reply
              </button>
              
              <a
                href={`tel:+${BUSINESS_CONFIG.phoneRaw}`}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '10px 20px', fontSize: '0.85rem' }}
              >
                📞 Call Boutique Directly: {BUSINESS_CONFIG.phoneDisplay}
              </a>

              <p className="modal-hint">
                No payment or account required on website. Our gifting concierge confirms availability, custom cards & delivery time directly with you on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
