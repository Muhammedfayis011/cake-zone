import { buildWhatsAppLink } from '../data.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function Occasions() {
  const tags = [
    "🎂 Birthdays", "💍 Weddings", "🎓 Graduation", "💝 Anniversary",
    "🎉 Baby Shower", "🏠 Housewarming", "🌙 Ramadan", "🎁 Eid Gifts",
    "💼 Corporate", "❤️ Valentine's", "👩 Mother's Day", "🎊 Celebration",
  ];

  const occCells = [
    { emoji: "🎂", label: "Birthday" },
    { emoji: "💍", label: "Wedding" },
    { emoji: "🎓", label: "Graduation" },
    { emoji: "🌙", label: "Eid" },
    { emoji: "💝", label: "Anniversary" },
    { emoji: "🎉", label: "Celebration" },
  ];

  const waLink = buildWhatsAppLink(
    "Hi Cake Zone! I need a custom cake/gift for a special occasion. Can you help? 🎂"
  );

  return (
    <section className="occasions container" id="occasions">
      <div className="occasions-inner">
        {/* Visual grid */}
        <div className="occasions-visual">
          {occCells.slice(0,4).map((o, i) => (
            <div className={`occ-cell${i === 0 ? ' tall' : ''}`} key={i}>
              <span style={{ fontSize: '2.4rem' }}>{o.emoji}</span>
              <span>{o.label}</span>
            </div>
          ))}
        </div>

        {/* Text */}
        <div>
          <div className="section-label">Every Occasion</div>
          <h2 className="section-title">The Perfect Gift for Every Special Moment</h2>
          <p className="section-desc" style={{ marginBottom: 24 }}>
            Whatever the occasion — a birthday surprise, Eid celebration, wedding cake or corporate gift —
            we craft something beautiful that makes memories last.
          </p>

          <div className="occasions-tags">
            {tags.map((t, i) => (
              <span className="occ-tag" key={i}>{t}</span>
            ))}
          </div>

          <a href={waLink} target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ marginTop: 10 }}>
            <WhatsAppIcon />
            Order for Your Occasion
          </a>
        </div>
      </div>
    </section>
  );
}
