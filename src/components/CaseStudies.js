import React from "react";


export default function CaseStudies() {
  return (
    <section className="hero">
  <div className="hero-slide left">
    <div className="image-card">
      <img src="/assets/sari.jpeg" alt="Saree 1" />
    </div>
    <div className="image-card">
      <img src="assets/sari.jpeg" alt="Saree 2" />
    </div>
    <div className="image-card">
      <img src="assets/sari.jpeg" alt="Saree 3" />
    </div>
    <h2 className="title">ELEGANCE</h2>
  </div>

  <div className="hero-slide right">
    <img src="/assets/shoes.jpeg" alt="Sneaker" className="sneaker" />
    <h2 className="title">NEW SNEAKER</h2>
  </div>
</section>

  );
}
