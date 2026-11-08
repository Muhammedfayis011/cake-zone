import React from 'react';
import { flowersCarousel, getProductWhatsAppUrl, getGeneralWhatsAppUrl, BUSINESS_CONFIG } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function FlowersView() {
  const waGeneral = getGeneralWhatsAppUrl('Flower Arrangement Enquiry');

  return (
    <div className="page-view" style={{ paddingBottom: '100px' }}>
      {/* Page Banner */}
      <div className="page-banner" style={{ background: 'linear-gradient(135deg,#f7e8f0 0%,#fdf4f8 100%)' }}>
        <div className="container">
          <span className="section-label">🌸 Fresh &amp; Preserved</span>
          <h1 className="section-title">Beautiful Flower Arrangements</h1>
          <p className="section-desc">
            Ecuadorian roses, luxury bouquets &amp; forever-preserved blooms — delivered same-day across Qatar with love.
          </p>
          <a href={waGeneral} target="_blank" rel="noreferrer" className="btn btn-whatsapp-action" style={{ marginTop: '20px' }}>
            <WhatsAppIcon size={18} /> Custom Flower Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container" style={{ paddingTop: '40px' }}>
        <div className="products-grid-3">
          {flowersCarousel.map((item) => {
            const waUrl = getProductWhatsAppUrl(item.name, item.price);
            return (
              <div className="pg3-card" key={item.id}>
                <div className="pg3-img-wrap">
                  {item.tag && <span className="pg3-tag" style={{ background: '#C57A8B' }}>{item.tag}</span>}
                  <img src={item.image} alt={item.name} />
                  <div className="pg3-hover">
                    <a href={waUrl} target="_blank" rel="noreferrer" className="pg3-order-btn">
                      <WhatsAppIcon size={16} /> Order Now
                    </a>
                  </div>
                </div>
                <div className="pg3-info">
                  <h3>{item.name}</h3>
                  <div className="pg3-price-row">
                    <span className="pg3-price"><small>QAR</small> {item.price}</span>
                    <a href={waUrl} target="_blank" rel="noreferrer" className="pg3-enquire">Enquire →</a>
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
