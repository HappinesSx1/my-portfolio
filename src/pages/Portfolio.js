import React from "react";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="main-portfolio">
      <div className="containeur">
        <h1>Tous mes projets :</h1>
        <ul className="projets">
          <li className="projet">
            <NavLink to="/a-propos">
              <span>Porjet 1</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
