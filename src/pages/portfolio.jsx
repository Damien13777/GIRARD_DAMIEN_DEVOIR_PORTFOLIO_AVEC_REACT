import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from '../components/portfoliocard';
import '../styles/portfolio.css';

import freshFoodImg from '../assets/portfolio/fresh-food.jpg';
import akiraImg from '../assets/portfolio/restaurant-japonais.jpg';
import siteClochette from '../assets/portfolio/site-clochette-nails.png';
import seoImg from '../assets/portfolio/seo.jpg';
import apiImg from '../assets/portfolio/coder.jpg';
import maquetteImg from '../assets/portfolio/screens.jpg';
import bannerImage from "../assets/banner.jpg";


export default function Portfolio() {
  // Données des projets
  const projects = [
    {
      id: 1,
      image: freshFoodImg,
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne',
      technologies: 'Site réalisé avec PHP et MySQL',
      link: '#'
    },
    {
      id: 2,
      image: akiraImg,
      title: 'Restaurant Akira',
      description: 'Site de vente de produits frais en ligne',
      technologies: 'Site réalisé avec WordPress',
      link: '#'
    },
    {
      id: 3,
      image: siteClochette,
      title: 'Site Clochette Nails',
      description: 'Site vitrine pour un salon de manucure avec prise de rendez-vous en ligne',
      technologies: 'Site réalisé en HTML, CSS, JavaScript et PHP',
      link: 'https://clochette-nails.fr'
    },
    {
      id: 4,
      image: seoImg,
      title: 'SEO',
      description: 'Amélioration du référencement d\'un site e-commerce',
      technologies: 'Utilisation des outils SEO',
      link: '#'
    },
    {
      id: 5,
      image: apiImg,
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      technologies: 'PHP - SYMFONY',
      link: '#'
    },
    {
      id: 6,
      image: maquetteImg,
      title: "Maquette d'un site",
      description: 'Création du prototype d\'un site',
      technologies: 'Réalisé avec FIGMA',
      link: '#'
    }
  ];

  return (
    <>
      {/* SECTION HERO */}
      <section className="services-banner">
        <Container fluid className="p-0">
          <img 
            src={bannerImage}
            alt="Bannière services"
            className="services-banner-image"
          />
        </Container>
      </section>

      <section className="services-hero d-flex align-items-center justify-content-center">
              <Container>
                <Row>
                  <Col className="text-center">
                    <h1 className="portfolio-main-title mb-3">
                      Portfolio
                    </h1>
                    <p className="portfolio-subtitle text-muted mb-3">
                      Voici quelques-unes de mes réalisations
                    </p>
                    <div className="hero-underline mx-auto"></div>
                  </Col>
                </Row>
              </Container>
            </section>


      {/* SECTION PORTFOLIO CARDS */}
      <section className="portfolio-section pb-5 pt-0 bg-white">
        <Container>
          <Row className="g-4">
            {projects.map((project) => (
              <Col key={project.id} lg={4} md={6} sm={12}>
                <PortfolioCard 
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

