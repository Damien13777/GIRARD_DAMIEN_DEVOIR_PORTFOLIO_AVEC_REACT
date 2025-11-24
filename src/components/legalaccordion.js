import React from "react";
import { Accordion } from "react-bootstrap";
import "./legalaccordion.css";

/**
 * Reusable Accordion Component for Legal Pages
 * @param {string} eventKey - Unique identifier for the accordion item
 * @param {string} title - Accordion header title
 * @param {React.ReactNode} children - Accordion body content
 */
export default function LegalAccordion({ eventKey, title, children }) {
  return (
    <Accordion.Item eventKey={eventKey} className="legal-accordion-item">
      <Accordion.Header className="legal-accordion-header">
        {title}
      </Accordion.Header>
      <Accordion.Body className="legal-accordion-body">
        {children}
      </Accordion.Body>
    </Accordion.Item>
  );
}
