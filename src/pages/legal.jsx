import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { useSEO } from "../hooks/useSEO.js";
import LegalAccordion from "../components/legalaccordion";
import "../styles/legal.css";

export default function Legal() {

  // SEO setup by calling custom hook
  useSEO(
    'Mentions légales - John Doe',
    'Mentions légales, crédits et informations légales du site.'
  );

  // Prevent indexing of this page by search engines
  React.useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    
    metaRobots.content = 'noindex, nofollow';

    // Cleanup function to reset robots meta tag when component unmounts
    return () => {
      if (metaRobots) {
        metaRobots.content = 'index, follow';
      }
    };
  }, []);

  
  return (
    <>

      {/* HERO SECTION */}
      <section className="legal-hero text-center py-5">
        <Container>
          <h1 className="legal-main-title mb-3">Mentions légales</h1>
          <div className="hero-underline mx-auto"></div>
        </Container>
      </section>

      {/* LEGAL CONTENT SECTION */}
      <section className="legal-content-section py-5">
        <Container>
          <div className="legal-accordion-wrapper">
            {/* Bootstrap Accordion - First item open by default */}
            <Accordion defaultActiveKey="0" className="legal-accordion">
              {/* ACCORDION 1 - Site Editor */}
              <LegalAccordion eventKey="0" title="Éditeur du site">
                <div className="legal-info-block">
                  <h3 className="legal-subtitle mb-2">John Doe</h3>

                  <div className="legal-info-item d-flex align-items-start">
                    <i className="bi bi-map legal-icon me-2"></i>
                    <span>40 rue Laure Diebold</span>
                  </div>

                  <div className="legal-info-item d-flex align-items-start">
                    <i className="bi bi-geo-alt legal-icon me-2"></i>
                    <span>69009 Lyon, France</span>
                  </div>

                  <div className="legal-info-item d-flex align-items-center">
                    <i className="bi bi-phone legal-icon me-2"></i>
                    <span>10 20 30 40 50</span>
                  </div>

                  <div className="legal-info-item d-flex align-items-center">
                    <i className="bi bi-envelope-at legal-icon me-2"></i>
                    <span>john.doe@gmail.com</span>
                  </div>
                </div>
              </LegalAccordion>

              {/* ACCORDION 2 - Web Host */}
              <LegalAccordion eventKey="1" title="Hébergeur">
                <div className="legal-info-block">
                  <h3 className="legal-subtitle mb-2 fs-3">alwaysdata</h3>

                  <p className="mb-2">
                    91 Rue du Faubourg Saint-Honoré, 75008 Paris
                  </p>

                  <div className="legal-info-item d-flex align-items-center">
                    <i className="bi bi-globe legal-icon me-2"></i>
                    <a
                      href="https://www.alwaysdata.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="legal-link"
                    >
                      www.alwaysdata.com
                    </a>
                  </div>
                </div>
              </LegalAccordion>

              {/* ACCORDION 3 - Credits */}
              <LegalAccordion eventKey="2" title="Crédits">
                <div className="legal-info-block">
                  <h3 className="legal-subtitle mb-2">Crédits</h3>

                  <p className="mb-2">
                    Ce site a été réalisé par John Doe, étudiant au{" "}
                    <a
                      href="https://www.centre-europeen-formation.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="legal-link"
                    >
                      Centre Européen de formation
                    </a>
                    .
                  </p>

                  <p className="mb-2">
                    <em>
                      Les images utilisées sur ce site sont libres de droits et
                      ont été obtenues sur le site{" "}
                    </em>
                    <a
                      href="https://pixabay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="legal-link"
                    >
                      Pixabay
                    </a>
                  </p>

                  <p className="mb-0">
                    <em>La favicon de ce site a été fournie par </em>
                    <a
                      href="https://www.flaticon.com/free-icons/john-doe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="legal-link"
                      title="john doe icons"
                    >
                      John doe Icons erstellt von Freepik - Flaticon
                    </a>
                  </p>
                </div>
              </LegalAccordion>
            </Accordion>
          </div>
        </Container>
      </section>
    </>
  );
}
