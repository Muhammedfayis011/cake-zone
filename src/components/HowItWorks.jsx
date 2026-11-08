import { buildWhatsAppLink } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function HowItWorks() {
  const steps = [
    { num: "01", emoji: "📱", title: "Browse Our Menu", desc: "Explore our cakes, flowers and gifts right here on this page and find what you love." },
    { num: "02", emoji: "💬", title: "Message on WhatsApp", desc: "Tap 'Order' on any product to open WhatsApp. Tell us your design, size & delivery details." },
    { num: "03", emoji: "🎨", title: "We Craft It Fresh", desc: "Our talented bakers & designers handcraft your order with premium ingredients." },
    { num: "04", emoji: "🚚", title: "Delivered to Your Door", desc: "Same-day or scheduled delivery across Qatar — right to your doorstep, fresh & beautiful." },
  ];

  const waLink = buildWhatsAppLink(
    "Hi Cake Zone! 🎂 I'd like to start my order. Can you help me?"
  );

  return (
    <section className="how-it-works" id="how">
      <div className="container">
        <div className="how-header">
          <div className="section-label">Simple &amp; Easy</div>
          <h2 className="section-title">How to Order</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,.65)', margin: '10px auto 0' }}>
            No accounts. No complicated checkout. Just WhatsApp — the easiest way to order your dream cake.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{s.num}</div>
              <div className="step-emoji">{s.emoji}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="how-cta">
          <a href={waLink} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <WhatsAppIcon />
            Start Your Order Now
          </a>
          <p>Average response time: under 5 minutes · Available 8AM–11PM daily</p>
        </div>
      </div>
    </section>
  );
}
