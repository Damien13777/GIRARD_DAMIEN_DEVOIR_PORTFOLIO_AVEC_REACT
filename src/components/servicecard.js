import React from "react";
import { Card } from "react-bootstrap";
import "./servicecard.css";

export default function ServiceCard({ icon, title, description }) {
  return (
    <Card className="service-card h-100">
      <Card.Body className="d-flex flex-column align-items-center text-center p-3">
        {/* Icon */}
        <div className="service-icon mb-3">
          <i className={`bi ${icon}`}></i>
        </div>

        {/* Title */}
        <Card.Title className="service-title mb-3">{title}</Card.Title>

        {/* Description */}
        <Card.Text className="service-description text-muted">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
