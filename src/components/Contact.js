import React from "react";

function Contact() {
  return (
    <section className="contact-section py-5 text-center text-white">
      <div className="container">
        <h2 className="fw-bold mb-4">Let’s Talk!</h2>
        <form className="mx-auto" style={{ maxWidth: "600px" }}>
          <input type="text" placeholder="Name" className="form-control mb-3" />
          <input type="text" placeholder="Phone" className="form-control mb-3" />
          <input type="email" placeholder="Email" className="form-control mb-3" />
          <textarea placeholder="Message" className="form-control mb-3" rows="4"></textarea>
          <button type="submit" className="btn btn-warning px-5 fw-bold">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
