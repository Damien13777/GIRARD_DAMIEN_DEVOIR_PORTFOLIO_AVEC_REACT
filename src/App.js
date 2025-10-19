import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/styles/App.css";

//import des pages
import Contact from "./pages/contact";
import Home from "./pages/home";
import Legal from "./pages/legal";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";

//import des components
import Footer from "./components/footer.js";
import Navigation from "./components/navbar.js";

export default function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <nav>
        <Navigation />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>

      <Footer />
    </div>
  );
}
