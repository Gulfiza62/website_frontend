import React from "react";

const reviews = [
  {
    name: "Viji K",
    text: "Working with Wincible has been a game-changer for our business.",
  },
  {
    name: "Ashim Dhawan",
    text: "Their SEO and marketing helped us stand out.",
  },
  {
    name: "Damini Tripathi",
    text: "Committed and transparent — highly recommend.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews">
      <h2 className="section-title">Reviews</h2>
      <div className="row">
        {reviews.map((r, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="card">
              <div className="card-body">
                <p className="mb-1">"{r.text}"</p>
                <small className="text-muted">— {r.name}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <a href="/reviews" className="btn btn-outline-primary">
          View All Reviews
        </a>
      </div>
    </section>
  );
}
