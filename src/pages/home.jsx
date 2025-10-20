import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
} from "react-bootstrap";
import "../styles/home.css";
import photoJohnDoe from "../assets/john-doe-about.jpg";
import GitHubModal from '../components/modal.js';

export default function Home() {
  // État pour la modal GitHub
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Récupération des données GitHub au chargement de la page
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/github-john-doe"
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données GitHub");
        }

        const data = await response.json();
        setGithubData(data);
      } catch (err) {
        console.error("Erreur GitHub API:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Récupération une seule fois au chargement
    fetchGithubData();
  }, []); // Tableau vide = exécution unique

  // Gestion de la modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* SECTION HERO - Image plein écran avec titres centrés */}
      <section className="hero-section d-flex align-items-center justify-content-center text-white">
        <Container className="mx-auto">
          <Row>
            <Col className="text-center">
              <h1 className="display-3 mb-3">Bonjour, je suis John Doe</h1>
              <h2 className="h4 mb-4">Développeur web full stack</h2>
              <Button
                variant="danger"
                size="lg"
                onClick={handleShowModal}
                className="btn-hero px-3 py-2"
              >
                En savoir plus
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION À PROPOS & COMPÉTENCES */}
      <section className="about-skills-section py-5">
        <Container className="mx-auto">
          <Row className="about-skills-box m-4 g-5">
            {/* COLONNE À PROPOS */}
            <Col md={6} className="about-responsive-margin">
              <div className="about-box p-0">
                <h2 className="section-title pb-3 mb-5">A propos</h2>

                {/* Photo en bloc (pas de float) */}
                <img
                  src={photoJohnDoe}
                  alt="John Doe"
                  className="about-image mb-4"
                />

                {/* 3 paragraphes de texte */}
                <p className="about-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio,
                  necessitatibus consectetur tempora nostrum, ex delectus
                  reiciendis impedit aut iure enim placeat? Natus, neque at?
                </p>
                <p className="about-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio,
                  necessitatibus consectetur tempora nostrum, ex delectus
                  reiciendis impedit aut iure enim placeat? Natus, neque at?
                </p>
                <p className="about-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio,
                  necessitatibus consectetur tempora nostrum, ex delectus
                  reiciendis impedit aut iure enim placeat? Natus, neque at?
                </p>
              </div>
            </Col>

            {/* COLONNE MES COMPÉTENCES */}
            <Col md={6} className="skills-responsive-margin">
              <div className="skills-box">
                <h2 className="section-title pb-3 mb-5">Mes compétences</h2>

                {/* HTML5 - 90% */}
                <div className="skill-item">
                  <div className="skill-label mb-2">HTML5 90%</div>
                  <ProgressBar
                    now={90}
                    variant="danger"
                    className="skill-progress"
                  />
                </div>

                {/* CSS3 - 80% */}
                <div className="skill-item">
                  <div className="skill-label mb-2">CSS3 80%</div>
                  <ProgressBar
                    now={80}
                    variant="info"
                    className="skill-progress"
                  />
                </div>

                {/* JAVASCRIPT - 70% */}
                <div className="skill-item">
                  <div className="skill-label mb-2">JAVASCRIPT 70%</div>
                  <ProgressBar
                    now={70}
                    variant="warning"
                    className="skill-progress"
                  />
                </div>

                {/* PHP - 60% */}
                <div className="skill-item">
                  <div className="skill-label mb-2">PHP 60%</div>
                  <ProgressBar
                    now={60}
                    variant="success"
                    className="skill-progress"
                  />
                </div>

                {/* REACT - 50% */}
                <div className="skill-item">
                  <div className="skill-label mb-2">REACT 50%</div>
                  <ProgressBar
                    now={50}
                    variant="primary"
                    className="skill-progress"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ajout de la modal github */}
      <GitHubModal 
        show={showModal}
        onHide={handleCloseModal}
        githubData={githubData}
        loading={loading}
        error={error}
      />
    </>
  );
}
