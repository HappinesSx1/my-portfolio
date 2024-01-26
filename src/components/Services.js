import React from "react";
import img1 from "../assets/images/section-about/landing_page.svg";
import img2 from "../assets/images/section-about/knowledge.svg";
import { useTranslation } from "react-i18next";
import enTranslations from "../locales/en.json";
import frTranslations from "../locales/fr.json";

const Services = () => {
  const { t, i18n } = useTranslation();
  const dataServices =
    i18n.language === "fr"
      ? frTranslations.services.data
      : enTranslations.services.data;

  return (
    <section className="more-about-container">
      <div className="more-about">
        <h2 className="section-h2">{t("services.title")}</h2>
        <div className="talents">
          {dataServices.map((service, index) => (
            <div className="talent-container" key={index}>
              <div className="talent">
                {service.img === "img1" ? (
                  <img src={img1} alt={service.imgAlt} />
                ) : (
                  <img src={img2} alt={service.imgAlt} />
                )}
                <div className="talent-description">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
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
