import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="container py-5 " style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}>
          <Services />
        </div>
        <div className="container py-5" style={{margin:"0px", padding:"0px", boxSizing:"border-box"}}>
          <CaseStudies />
        </div>
        <div className="container py-5">
          <Testimonials />
        </div>
        <div className="container py-5">
          <Contact />
        </div>
        
      </main>
      <Footer />
    </>
  );
}

export default App;  