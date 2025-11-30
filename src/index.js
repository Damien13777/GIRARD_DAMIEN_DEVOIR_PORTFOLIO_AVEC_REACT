import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React from "react";
import ReactDOM from "react-dom/client";
// Import of react-helmet-async for managing meta tags
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
