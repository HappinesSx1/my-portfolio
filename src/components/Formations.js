import React from "react";
import img3 from "../assets/images/section-about/Research paper-rafiki.svg";

const Formations = () => {
  const dataFormations = [
    {
      title: "Baccalauréat Scientifique",
      year: "2018-2019",
    },
    {
      title: "Licence informatique (1er année validée)",
      year: "2019-2022",
    },
    {
      title: "Auto apprentissage du développemnt web",
      year: "2021-maintenat",
    },
    {
      title: "Formation intégrateur web, openclassroom",
      year: "2022-2023",
    },
  ];
  return (
    <section className="formations-container">
      <div className="formations-section">
        <h2 className="section-h2">Mes formations</h2>
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
