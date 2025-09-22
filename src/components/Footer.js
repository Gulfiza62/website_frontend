import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>sk</h5>
            <p>
              Team@sk.com
              <br />
              Awadiyan Kalan Square, Above Dominos, Bhopal
            </p>
          </div>
          <div className="col-md-4">
            <h6>Services</h6>
            <ul className="list-unstyled">
              <li>SEO</li>
              <li>Content Marketing</li>
              <li>Website Design</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Contact</h6>
            <p>
              <a href="mailto:team@SK.com" className="text-white">
                team@SK.com
              </a>
            </p>
            <a href="#contact" className="btn btn-primary btn-sm">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>© {new Date().getFullYear()} SK — All rights reserved</small>
        </div>
      </div>
    </footer>
  );
}
