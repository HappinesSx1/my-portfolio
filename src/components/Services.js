import React from "react";
import img1 from "../assets/images/section-about/landing_page.svg";
import img2 from "../assets/images/section-about/knowledge.svg";

const Services = () => {
  const dataServices = [
    {
      title: "Applications",
      image: img1,
      imageAlt: "Exemple d'un site web",
      description:
        "Intégrations de maquettes, et/ou d'options de connexion d'utilisateur.",
    },
    {
      title: "Optimisations",
      image: img2,
      imageAlt: "Explosions d'idées dans la tête",
      description:
        "Opatimisation d'un site web pour augmenter ses perfomances, le nombre de visiteurs et un code plus sain.",
    },
  ];

  return (
    <section className="more-about-container">
      <div className="more-about">
        <h2 className="section-h2">Mes services</h2>
        <div className="talents">
          {dataServices.map((service, index) => (
            <div className="talent-container" key={index}>
              <div className="talent">
                <img src={service.image} alt={service.imageAlt} />
                <div className="talent-description">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
