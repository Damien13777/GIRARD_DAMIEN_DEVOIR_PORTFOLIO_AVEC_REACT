import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "./modal.css";

export default function GitHubModal({
  show,
  onHide,
  githubData,
  loading,
  error,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="github-modal"
      contentClassName="github-modal-content"
    >
      {/* HEADER */}
      <Modal.Header closeButton className="github-modal-header bg-dark">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>

      {/* BODY */}
      <Modal.Body className="github-modal-body bg-dark p-0">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-danger py-5">
            <i className="bi bi-exclamation-triangle fs-1"></i>
            <p>Erreur de chargement</p>
          </div>
        ) : githubData ? (
          <Row className="g-0 h-100">
            {/* COLONNE GAUCHE */}
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center p-4"
            >
              <img
                src={githubData.avatar_url}
                alt={githubData.name || githubData.login}
                className="img-fluid"
                style={{ maxWidth: "100%" }}
              />
            </Col>

            {/* COLONNE DROITE */}
            <Col
              md={6}
              className="p-4 d-flex flex-column justify-content-center"
            >
              {/* Nom avec icône */}
              <div className="underline-content pb-2 mb-2 d-flex align-items-start">
                <i className="bi bi-person me-3"></i>
                <a
                  href={githubData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  {githubData.name || githubData.login}
                </a>
              </div>

              {/* Localisation */}
              <div className="underline-content pb-2 mb-2 d-flex align-items-start">
                <i className="bi bi-geo-alt me-3"></i>
                <span className="text-white">{githubData.location || ""}</span>
              </div>

              {/* Bio */}
              <div className="underline-content pb-2 mb-2 d-flex align-items-start">
                <i className="bi bi-card-text me-3"></i>
                <p className="mb-0 text-white" style={{ lineHeight: "1.6" }}>
                  {githubData.bio ||
                    "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known."}
                </p>
              </div>

              {/* Repositories */}
              <div className="underline-content pb-2 mb-2 d-flex align-items-center">
                <i className="bi bi-box me-3"></i>
                <span className="text-white">
                  Repositories : {githubData.public_repos}
                </span>
              </div>

              {/* Followers */}
              <div className="underline-content pb-2 mb-2 d-flex align-items-center">
                <i className="bi bi-people me-3"></i>
                <span className="text-white">
                  Followers : {githubData.followers}
                </span>
              </div>

              {/* Following */}
              <div className="mb-2 d-flex align-items-center">
                <i className="bi bi-people me-3"></i>
                <span className="text-white">
                  Following : {githubData.following}
                </span>
              </div>
            </Col>
          </Row>
        ) : null}
      </Modal.Body>

      {/* FOOTER */}
      <Modal.Footer className="github-modal-footer bg-dark">
        <Button
          variant="secondary"
          onClick={onHide}
          className="github-close-btn"
        >
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
