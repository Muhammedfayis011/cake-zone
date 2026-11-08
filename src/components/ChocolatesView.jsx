import React from 'react';
import { chocolatesCarousel, getProductWhatsAppUrl, getGeneralWhatsAppUrl } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function ChocolatesView() {
  const waGeneral = getGeneralWhatsAppUrl('Chocolate Gift Enquiry');

  return (
    <div className="page-view" style={{ paddingBottom: '100px' }}>
      {/* Page Banner */}
      <div className="page-banner" style={{ background: 'linear-gradient(135deg,#f5ede3 0%,#faf4ee 100%)' }}>
        <div className="container">
          <span className="section-label">🍫 Pure Indulgence</span>
          <h1 className="section-title">Luxury Chocolates &amp; Sweet Gifts</h1>
          <p className="section-desc">
            Belgian pralines, gold-dusted truffles, stuffed Medjool dates &amp; artisan chocolate gifts — crafted for the sweetest moments.
          </p>
          <a href={waGeneral} target="_blank" rel="noreferrer" className="btn btn-whatsapp-action" style={{ marginTop: '20px' }}>
            <WhatsAppIcon size={18} /> Custom Chocolate Box on WhatsApp
          </a>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container" style={{ paddingTop: '40px' }}>
        <div className="products-grid-3">
          {chocolatesCarousel.map((item) => {
            const waUrl = getProductWhatsAppUrl(item.name, item.price);
            return (
              <div className="pg3-card" key={item.id}>
                <div className="pg3-img-wrap">
                  {item.tag && <span className="pg3-tag" style={{ background: '#7B5B3A' }}>{item.tag}</span>}
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
