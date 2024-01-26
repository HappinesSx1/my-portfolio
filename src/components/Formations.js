import React from "react";
import img3 from "../assets/images/section-about/Research paper-rafiki.svg";
import { useTranslation } from "react-i18next";
import enTranslations from "../locales/en.json";
import frTranslations from "../locales/fr.json";

const Formations = () => {
  const { t, i18n } = useTranslation();
  const dataFormations =
    i18n.language === "fr"
      ? frTranslations.formation.data
      : enTranslations.formation.data;

  return (
    <section className="formations-container">
      <div className="formations-section">
        <h2 className="section-h2">{t("formation.title")}</h2>
        <div className="formations">
          <div className="left-formation">
            {dataFormations.map((formation, index) => (
              <div className="formation" key={index}>
                <h4>{formation.title}</h4>
                <h5>{formation.year}</h5>
              </div>
            ))}
          </div>
          <div className="right-formation">
            <img src={img3} alt="illustration pour la section formation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formations;
