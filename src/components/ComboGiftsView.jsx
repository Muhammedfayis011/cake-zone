import React from 'react';
import { comboGiftsCarousel, getProductWhatsAppUrl, getGeneralWhatsAppUrl } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function ComboGiftsView() {
  const waGeneral = getGeneralWhatsAppUrl('Combo Gift Enquiry');

  return (
    <div className="page-view" style={{ paddingBottom: '100px' }}>
      {/* Page Banner */}
      <div className="page-banner" style={{ background: 'linear-gradient(135deg,#fdf5e4 0%,#fffbf2 100%)' }}>
        <div className="container">
          <span className="section-label">🎁 Everything in One Box</span>
          <h1 className="section-title">Combo Gift Sets — Cake, Flowers &amp; Chocolates</h1>
          <p className="section-desc">
            Why choose one when you can have it all? Curated gift combos that combine cakes, fresh blooms &amp; luxury chocolates in one stunning presentation.
          </p>
          <a href={waGeneral} target="_blank" rel="noreferrer" className="btn btn-whatsapp-action" style={{ marginTop: '20px' }}>
            <WhatsAppIcon size={18} /> Build Your Custom Combo on WhatsApp
          </a>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container" style={{ paddingTop: '40px' }}>
        <div className="products-grid-3">
          {comboGiftsCarousel.map((item) => {
            const waUrl = getProductWhatsAppUrl(item.name, item.price);
            return (
              <div className="pg3-card" key={item.id}>
                <a href={waUrl} target="_blank" rel="noreferrer" className="pg3-img-wrap" aria-label={`Order ${item.name} on WhatsApp`}>
                  {item.tag && <span className="pg3-tag" style={{ background: '#C59D5F' }}>{item.tag}</span>}
                  <img src={item.image} alt={item.name} />
                </a>
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
