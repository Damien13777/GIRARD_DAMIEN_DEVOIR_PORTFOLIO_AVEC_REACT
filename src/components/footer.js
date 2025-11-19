import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container className="footer-container">
        <Row>
          {/* Colonne 1 : Informations personnelles + Réseaux sociaux */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-white mb-2">John Doe</h5>
            <address className="mb-3">
              <p className="mb-1">40 rue Laure Diebold</p>
              <p className="mb-1">69009 Lyon, France</p>
              <p className="mb-1">10 20 30 40 50</p>
              <p className="mb-3">john.doe@gmail.com</p>
            </address>

            {/* Icônes réseaux sociaux */}
            <div className="social-icons d-flex gap-2">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <i class="bi bi-github fs-3"></i>
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter fs-3"></i>
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin fs-3"></i>
              </a>
            </div>
          </Col>

          {/* Colonne 2 : Liens utiles */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-white mb-2">Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="footer-link text-decoration-none">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="footer-link text-decoration-none"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="footer-link text-decoration-none"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="footer-link text-decoration-none"
                >
                  Me contacter
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/legal"
                  className="footer-link text-decoration-none"
                >
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </Col>

          {/* Colonne 3 : Mes dernières réalisations */}
          <Col md={4}>
            <h5 className="text-white mb-2">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/portfolio"
                  className="footer-link text-decoration-none"
                >
                  Fresh Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="footer-link text-decoration-none"
                >
                  Restaurant Akira
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="footer-link text-decoration-none"
                >
                  Espace bien-être
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="footer-link text-decoration-none"
                >
                  SEO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="footer-link text-decoration-none"
                >
                  Création d'une API
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="footer-link text-decoration-none"
                >
                  Maquette d'un site
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
