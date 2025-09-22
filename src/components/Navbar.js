import React from "react";

export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-white" href="#">
            <span className="text-danger">Sparsh</span> Kharya
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">HOME</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#about">ABOUT</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">SERVICES</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">PROJECTS</a></li>
              <li className="nav-item"><a className="nav-link" href="#reviews">REVIEWS</a></li>
              <li className="nav-item"><a className="nav-link" href="#blog">BLOG</a></li>
              <li className="nav-item"><a className="nav-link" href="#marketian">MARKETIAN.IO</a></li>
            </ul>
            <a href="#contact" className="btn btn-warning rounded-pill px-4 fw-bold">
              CONTACT US →
            </a>
          </div>
        </div>
      </nav>

      

  );
}
