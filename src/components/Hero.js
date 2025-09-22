import React from "react";

export default function Hero() {
  return (
  
      <section className="hero-section d-flex align-items-center text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">
            The Best <span className="highlight">Digital</span> <br />
            Marketing Agency in Gwalior.
          </h1>
          <p className="lead mt-3">
            We believe in combining innovative design, sustainable practices, and <br />
            exceptional craftsmanship to bring your vision to life.
          </p>
          <a href="Contact" className="btn btn-warning rounded-pill px-5 mt-4 fw-bold">
            CONTACT US →
          </a>
        </div>
      </section>
   
  );
}
