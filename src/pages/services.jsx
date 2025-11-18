import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from '../components/servicecard';
import "../styles/services.css";
import bannerImage from "../assets/banner.jpg";

export default function Services() {
  // Données des services
  const services = [
    {
      id: 1,
      icon: 'bi-brush',
      title: 'UX Design',
      description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
    },
    {
      id: 2,
      icon: 'bi-code-slash',
      title: 'Développement web',
      description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)"
    },
    {
      id: 3,
      icon: 'bi-search',
      title: 'Référencement',
      description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
    }
  ];

  return (
    <>
    <section className="services-banner">
        <Container fluid className="p-0">
          <img 
            src={bannerImage}
            alt="Bannière services"
            className="services-banner-image"
          />
        </Container>
      </section>
      
      {/* SECTION HERO */}
      <section className="services-hero d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="display-4 fw-bold">
                Mon offre de services
              </h1>
              <p className="lead">
                Voici les prestations sur lesquelles je peux intervenir
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION SERVICES CARDS */}
      <section className="services-section pb-5 pt-0 bg-white">
        <Container>
          <Row className="g-4">
            {services.map((service) => (
              <Col key={service.id} lg={4} md={4} sm={12}>
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      
    </>
  );
}
