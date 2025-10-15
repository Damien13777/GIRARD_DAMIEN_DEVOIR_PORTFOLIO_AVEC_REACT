import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";

//import des pages
import Contact from "./pages/contact";
import Home from "./pages/home";
import Legal from "./pages/legal";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column min-vh-100">
        <h1> Hello World</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
