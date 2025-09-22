import React from "react";


const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-heading">
          Discover <span>Our Services</span>
        </h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon">S</div>
            <h3 className="service-title">SEO</h3>
            <p className="service-desc">
           The best digital Marketing Agency in Gwalior.
            </p>
            </div>

          <div className="service-card">
            <div className="icon">C</div>
            <h3 className="service-title">Content Marketing</h3>
            <p className="service-desc">
             The best digital Marketing Agency in Gwalior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
