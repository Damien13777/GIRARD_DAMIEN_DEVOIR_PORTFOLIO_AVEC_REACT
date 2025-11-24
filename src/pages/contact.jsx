import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import '../styles/contact.css';

export default function Contact() {
  // États du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // Tous les champs sont valides
      console.log('Formulaire soumis:', formData);
      setShowSuccess(true);
      setValidated(false);
      
      // Réinitialiser le formulaire 3 secondes après l'envoi
      setTimeout(() => {
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: ''
        });
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* SECTION HERO */}
      <section className="contact-hero text-center py-5">
        <Container>
          <h1 className="contact-main-title mb-3">Contact</h1>
          <p className="contact-subtitle text-muted mb-3">
            Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact
          </p>
          <div className="hero-underline mx-auto"></div>
        </Container>
      </section>

      {/* SECTION CONTENU */}
      <section className="contact-content-section py-5">
        <Container>
          <div className="contact-main-block bg-white p-4 p-md-5 shadow">
            <Row className="g-4 g-md-5">

              {/* COLONNE GAUCHE - FORMULAIRE */}
              <Col lg={6}>
                <h2 className="contact-block-title mb-4">
                  Formulaire de contact
                </h2>
                
                {/* Message de succès */}
                {showSuccess && (
                  <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    Votre message a été envoyé avec succès !
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  {/* Nom */}
                  <Form.Group className="mb-3" controlId="formNom">
                    <Form.Control
                      type="text"
                      placeholder="Votre nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez saisir votre nom.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Votre adresse email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez saisir une adresse email valide.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Téléphone */}
                  <Form.Group className="mb-3" controlId="formTelephone">
                    <Form.Control
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      pattern="[0-9\s\-\+\(\)]{10,}"
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez saisir un numéro de téléphone valide.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Sujet */}
                  <Form.Group className="mb-3" controlId="formSujet">
                    <Form.Control
                      type="text"
                      placeholder="Sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez saisir le sujet de votre message.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Message */}
                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Votre message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      Veuillez saisir votre message.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Bouton Envoyer */}
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="contact-submit-btn"
                  >
                    Envoyer
                  </Button>
                </Form>
              </Col>

              {/* COLONNE DROITE - COORDONNÉES + MAP */}
              <Col lg={6}>
                <h2 className="contact-block-title mb-4">
                  Mes coordonnées
                </h2>
                
                <div className="contact-info-item mb-2">
                  <span className="contact-info-title">John Doe</span>
                </div>

                <div className="contact-info-item d-flex align-items-start">
                  <i className="bi bi-map contact-info-icon me-2"></i>
                  <span className="contact-info-text">40 rue Laure Diebold</span>
                </div>

                <div className="contact-info-item d-flex align-items-start">
                  <i className="bi bi-geo-alt contact-info-icon me-2"></i>
                  <span className="contact-info-text">69009 Lyon, France</span>
                </div>

                <div className="contact-info-item d-flex align-items-center">
                  <i className="bi bi-phone contact-info-icon me-2"></i>
                  <span className="contact-info-text">10 20 30 40 50</span>
                </div>

                <div className="contact-info-item mb-4 d-flex align-items-center">
                  <i className="bi bi-envelope-at contact-info-icon me-2"></i>
                  <a href="mailto:john.doe@gmail.com" className="contact-info-link">
                    john.doe@gmail.com
                  </a>
                </div>

                {/* GOOGLE MAPS */}
                <div className="contact-map-container rounded overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754011!2d4.796403976304028!3d45.77866571240529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation John Doe"
                    className="contact-map"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
