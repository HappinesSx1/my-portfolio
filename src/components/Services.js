import React from "react";
import img1 from "../assets/images/section-about/landing_page.svg";
import img2 from "../assets/images/section-about/knowledge.svg";

const Services = () => {
  return (
    <section className="more-about-container">
      <div className="more-about">
        <h2 className="section-h2">Mes services</h2>
        <div className="talents">
          <div className="talent-container">
            <div className="talent">
              <img src={img1} alt="Exemple d'un site web" />
              <div className="talent-description">
                <h3>Applications</h3>
                <p>
                  Intégrations de maquettes, et/ou d'options de connexion
                  d'utilisateur
                </p>
              </div>
            </div>
          </div>
          <div className="talent-container">
            <div className="talent">
              <img src={img2} alt="imagine d'un cerveau plein de pensées" />
              <div className="talent-description">
                <h3>Optimisations</h3>
                <p>
                  Opatimisation d'un site web pour augmenter ses perfomances, le
                  nombre de visiteurs et un code plus sain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
