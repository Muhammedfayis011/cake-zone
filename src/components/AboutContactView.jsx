import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function AboutContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: 'Birthday Celebration',
    date: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Hello Cake Zone Qatar!

*New Enquiry from Website*:
👤 Name: ${formData.name}
📱 Phone/WhatsApp: ${formData.phone}
🎉 Occasion: ${formData.occasion}
📅 Preferred Date: ${formData.date || 'Flexible'}
💬 Message / Gifting Idea: ${formData.message || 'Looking for recommendations'}

Could you please connect with me with options and availability? Thank you!`;

    const waUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
  };

  const contactWaUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent("Hello Cake Zone! I would like to get in touch regarding a gifting enquiry.")}`;

  return (
    <div className="about-contact-page">
      {/* About Brand Story Section (Page 5 Section 06) */}
      <section className="about-hero-section">
        <div className="container-narrow">
          <span className="section-label">Our Story &amp; Philosophy</span>
          <h1 className="section-title">Making Every Celebration More Meaningful.</h1>
          <p className="section-desc">
            At Cake Zone, we believe that the best gifts are those that create lasting memories.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 60px' }}>
        <div className="container">
          <div className="about-story-grid">
            <div className="story-copy">
              <h3>Thoughtful Gifts. Beautiful Memories.</h3>
              <p>
                At Cake Zone, we believe that the best gifts are those that create lasting memories. Whether it's a beautifully arranged hamper, a thoughtful surprise or a delicious cake, we bring together creativity, presentation and attention to detail to make every occasion special.
              </p>
              <p>
                From personal celebrations to thoughtful gestures for friends, family and colleagues, we're here to help you find the perfect way to express your feelings across Qatar.
              </p>
              <p>
                Inspired by the elegance of Qatar's hospitality traditions and modern luxury gifting aesthetics, every hamper is hand-assembled in Doha with signature ribbons, wax seals, and personalized greeting cards.
              </p>
              <div className="story-signature">
                Cake Zone Qatar – Thoughtful Gifts. Beautiful Memories.
              </div>
            </div>

            <div className="story-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80"
                alt="Cake Zone Qatar Boutique Gifting Assembly"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Contact Section (Page 5 Section 06 & Page 6) */}
          <div className="section-header" style={{ marginTop: '70px', marginBottom: '40px' }}>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let's Make Someone's Day Special.</h2>
            <p className="section-desc">
              Have a gifting idea in mind? Looking for a special hamper, planning a celebration or interested in corporate gifting? We'd love to hear from you.
            </p>
          </div>

          <div className="contact-layout-grid">
            {/* Contact Channels */}
            <div className="contact-card-box">
              <h3>Connect With Cake Zone</h3>
              <p className="intro">
                Direct concierge communication. No automated bots or payment friction — real gifting specialists ready to assist you.
              </p>

              <div className="contact-info-list">
                {/* WhatsApp */}
                <a
                  href={contactWaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-entry"
                >
                  <div className="contact-icon-bubble" style={{ color: 'var(--color-whatsapp)' }}>
                    <WhatsAppIcon size={22} color="#25D366" />
                  </div>
                  <div className="contact-entry-text">
                    <h5>WhatsApp Enquiry (Instant Reply)</h5>
                    <p>{BUSINESS_CONFIG.phoneDisplay}</p>
                    <small>Available daily 9:00 AM – 11:00 PM for orders</small>
                  </div>
                </a>

                {/* Click to call */}
                <a
                  href={`tel:+${BUSINESS_CONFIG.phoneRaw}`}
                  className="contact-info-entry"
                >
                  <div className="contact-icon-bubble">
                    📞
                  </div>
                  <div className="contact-entry-text">
                    <h5>Click-to-Call Phone Number</h5>
                    <p>{BUSINESS_CONFIG.phoneDisplay}</p>
                    <small>Direct boutique customer service line</small>
                  </div>
                </a>

                {/* Business email */}
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="contact-info-entry"
                >
                  <div className="contact-icon-bubble">
                    ✉️
                  </div>
                  <div className="contact-entry-text">
                    <h5>Business Email Address</h5>
                    <p>{BUSINESS_CONFIG.email}</p>
                    <small>Corporate proposals, invoices &amp; partnerships</small>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-entry"
                >
                  <div className="contact-icon-bubble" style={{ color: '#E1306C' }}>
                    📷
                  </div>
                  <div className="contact-entry-text">
                    <h5>Instagram Profile</h5>
                    <p>{BUSINESS_CONFIG.instagramHandle}</p>
                    <small>Browse daily stories &amp; customer unboxing reels</small>
                  </div>
                </a>

                {/* Location */}
                <div className="contact-info-entry">
                  <div className="contact-icon-bubble">
                    📍
                  </div>
                  <div className="contact-entry-text">
                    <h5>Boutique Kitchen &amp; Delivery Hub</h5>
                    <p>{BUSINESS_CONFIG.location}</p>
                    <small>{BUSINESS_CONFIG.deliveryAreas}</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Enquiry Form (Page 6) */}
            <div className="contact-card-box">
              <h3>Enquiry Form</h3>
              <p className="intro">
                Fill in your details below to instantly open a pre-filled WhatsApp conversation with our gifting team.
              </p>

              <form onSubmit={handleFormSubmit} className="enquiry-form">
                <div className="form-field">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Fatima Al-Kuwari"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+974 5500 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="occasion">Occasion *</label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                  >
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Anniversary & Romance">Anniversary &amp; Romance</option>
                    <option value="Newborn & Baby Shower">Newborn &amp; Baby Shower</option>
                    <option value="Corporate Appreciation">Corporate Appreciation</option>
                    <option value="Ramadan & Eid Mubarak">Ramadan &amp; Eid Mubarak</option>
                    <option value="Graduation & Success">Graduation &amp; Success</option>
                    <option value="Wedding & Engagement">Wedding &amp; Engagement</option>
                    <option value="Other Special Gesture">Other Special Gesture</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="date">Delivery Date in Qatar (Optional)</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message / Gifting Idea</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us what hamper or gift you have in mind, special cards, or customized colors..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp-action"
                  style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
                >
                  <WhatsAppIcon size={18} /> Send Enquiry to WhatsApp
                </button>

                {formSubmitted && (
                  <p style={{ color: 'var(--color-whatsapp)', fontSize: '0.85rem', textAlign: 'center', marginTop: '6px' }}>
                    ✓ Opening WhatsApp conversation with your enquiry details!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
