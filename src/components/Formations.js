import React from "react";
import img3 from "../assets/images/section-about/Research paper-rafiki.svg";

const Formations = () => {
  return (
    <section className="formations-container">
      <div className="formations-section">
        <h2 className="section-h2">Mes formations</h2>
        <div className="formations">
          <div className="left-formation">
            <div className="formation">
              <h4>Baccalauréat Scientifique</h4>
              <h5>2018-2019</h5>
            </div>
            <div className="formation">
              <h4>Licence informatique (1er année validée)</h4>
              <h5>2019-2022</h5>
            </div>
            <div className="formation">
              <h4>Auto apprentissage du développemnt web</h4>
              <h5>2021-20~</h5>
            </div>
            <div className="formation">
              <h4>Fromation intégrateur web, openclassroom</h4>
              <h5>2022-2023</h5>
            </div>
          </div>
          <div className="right-formation">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formations;
