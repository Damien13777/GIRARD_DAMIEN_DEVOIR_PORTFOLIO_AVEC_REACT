import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";

//import des pages
import Contact from "./pages/contact";
import Home from "./pages/home";
import Legal from "./pages/legal";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";

export default function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/legal">Legal</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </div>
  );
}
