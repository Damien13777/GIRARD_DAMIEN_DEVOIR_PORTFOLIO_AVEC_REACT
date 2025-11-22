import React from "react";
import { Button, Card } from "react-bootstrap";
import "./portfoliocard.css";

export default function PortfolioCard({
  image,
  title,
  description,
  technologies,
  link,
}) {
  return (
    <Card className="portfolio-card h-100">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        className="portfolio-card-image"
      />

      <Card.Body className="d-flex flex-column">
        {/* Titre du projet */}
        <Card.Title className="portfolio-card-title mb-3">{title}</Card.Title>

        {/* Description */}
        <Card.Text className="portfolio-card-description text-muted mb-3 flex-grow-1">
          {description}
        </Card.Text>

        {/* Bouton "Voir le site" */}
        <Button
          variant="primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-card-button"
        >
          Voir le site
        </Button>
      </Card.Body>

      {/* footer de la card */}
      <Card.Footer className="portfolio-card-footer text-muted">
        {technologies}
      </Card.Footer>
    </Card>
  );
}
