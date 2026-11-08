import { testimonials } from '../data.js';

function Stars({ count }) {
  return <div className="review-stars">5.0 / 5.0 Rating</div>;
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-label">Customer Love</div>
          <h2 className="section-title">What Qatar Says About Us</h2>
          <p className="section-desc" style={{ margin: '10px auto 0', textAlign: 'center' }}>
            Over 500 happy customers across Qatar trust Cake Zone for their most special moments.
          </p>
        </div>
        <div className="reviews-grid">
          {testimonials.map(r => (
            <div className="review-card" key={r.id}>
              <Stars count={r.stars} />
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                <div className="author-avatar">{r.initials}</div>
                <div>
                  <div className="author-name">{r.name}</div>
                  <div className="author-loc">📍 {r.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
