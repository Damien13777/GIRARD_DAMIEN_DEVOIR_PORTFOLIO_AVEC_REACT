import React from "react";
import { Route, Routes } from "react-router-dom";

// Import of react-helmet-async for managing meta tags
import { HelmetProvider } from "react-helmet-async";

//Pages import
import Contact from "./pages/contact";
import Home from "./pages/home";
import Legal from "./pages/legal";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";

//components import
import Footer from "./components/footer.js";
import Navigation from "./components/navbar.js";

export default function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}
