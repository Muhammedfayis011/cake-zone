import { WhatsAppIcon } from './Icons.jsx';

export default function TrustBar() {
  const items = [
    { icon: "🚚", text: <><strong>Same-Day Delivery</strong> across Qatar</> },
    { icon: "✅", text: <><strong>Fresh &amp; Handmade</strong> daily</> },
    { icon: <WhatsAppIcon size={20} color="#25D366" />, text: <><strong>WhatsApp Ordering</strong> — instant response</> },
    { icon: "🎨", text: <><strong>Custom Designs</strong> available</> },
    { icon: "🏆", text: <><strong>Top Rated</strong> by 500+ customers</> },
  ];
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {items.map((item, i) => (
          <div className="trust-item" key={i}>
            <span className="icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
