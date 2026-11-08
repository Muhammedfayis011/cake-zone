import { useState } from 'react';
import { buildWhatsAppLink, WHATSAPP_NUMBER } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', item: '', date: '', occasion: '', notes: ''
  });

  const occasions = [
    'Birthday', 'Wedding', 'Anniversary', 'Baby Shower', 'Graduation',
    'Eid / Ramadan', 'Corporate Event', 'Valentine\'s Day', 'Other'
  ];

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const msg =
`Hello Cake Zone Qatar! 🎂

*New Order Request*
👤 Name: ${form.name}
📱 Phone: ${form.phone}
🎂 Item Requested: ${form.item}
📅 Delivery Date: ${form.date}
🎉 Occasion: ${form.occasion}
📝 Notes: ${form.notes || 'None'}

Please confirm availability and details. Thank you!`;
    window.open(buildWhatsAppLink(msg), '_blank');
  };

  const contactLinks = [
    {
      icon: <WhatsAppIcon size={20} color="#25D366" />, cls: 'wa',
      label: 'WhatsApp (Primary)',
      val: '+974 5551 2345',
      href: buildWhatsAppLink("Hello! I'd like to place an order 🎂"),
    },
    {
      icon: '📸', cls: 'ig',
      label: 'Instagram',
      val: '@cakezone.qatar',
      href: 'https://instagram.com/cakezone.qatar',
    },
    {
      icon: '📞', cls: 'ph',
      label: 'Phone / Call',
      val: '+974 5551 2345',
      href: `tel:+${WHATSAPP_NUMBER}`,
    },
    {
      icon: '📧', cls: 'em',
      label: 'Email',
      val: 'orders@cakezone.qa',
      href: 'mailto:orders@cakezone.qa',
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Info */}
          <div className="contact-info">
            <div className="section-label">Get in Touch</div>
            <h2>Order or Ask Us Anything</h2>
            <p>
              Have a question? Want a custom design? Ready to order?<br />
              Reach out via WhatsApp — we reply within minutes, 8AM–11PM daily.
            </p>

            <div className="contact-links">
              {contactLinks.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer" className="contact-link-item">
                  <div className={`ci-icon ${c.cls}`}>{c.icon}</div>
                  <div>
                    <div className="ci-label">{c.label}</div>
                    <div className="ci-val">{c.val}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ marginTop: 32, padding: 20, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,.07)' }}>
              <strong style={{ display: 'block', marginBottom: 8, color: 'var(--brown)' }}>📍 Delivery Area</strong>
              <p style={{ fontSize: '.85rem', color: 'var(--brown-mid)', margin: 0 }}>
                We deliver across all of Qatar including Doha, Lusail, Al Wakrah, Al Rayyan,
                The Pearl, West Bay, Al Khor, and more.
              </p>
            </div>
          </div>

          {/* Order Form */}
          <div className="order-form-card">
            <h3>🎂 Place Your Order</h3>
            <p>Fill in the details below and we'll confirm via WhatsApp instantly.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text" name="name" required
                    placeholder="e.g. Fatima Al-Mansouri"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>WhatsApp Number *</label>
                  <input
                    type="tel" name="phone" required
                    placeholder="+974 xxxxxxxx"
                    value={form.phone} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>What would you like? *</label>
                <input
                  type="text" name="item" required
                  placeholder="e.g. Chocolate birthday cake for 20 people"
                  value={form.item} onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Delivery Date *</label>
                  <input
                    type="date" name="date" required
                    value={form.date} onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="form-group">
                  <label>Occasion</label>
                  <select name="occasion" value={form.occasion} onChange={handleChange}>
                    <option value="">Select occasion</option>
                    {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Special Notes / Design Request</label>
                <textarea
                  name="notes"
                  placeholder="Any specific design, colors, message on the cake, dietary requirements..."
                  value={form.notes} onChange={handleChange}
                />
              </div>

              <button type="submit" className="form-submit">
                <WhatsAppIcon />
                Send Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
