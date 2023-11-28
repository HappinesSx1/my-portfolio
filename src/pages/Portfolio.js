import React from "react";
import { projectsData } from "../data/projetcsData";
import Card from "../components/Card";

const Portfolio = () => {
  return (
    <div className="main-portfolio">
      <div className="containeur">
        <div className="title">
          <span>T</span>
          <span>O</span>
          <span>U</span>
          <span>S</span>
          <span> </span>
          <span>M</span>
          <span>E</span>
          <span>S</span>
          <span> </span>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>T</span>
          <span>S</span>
          <span> </span>
          <span>:</span>
        </div>
        <ul className="projets">
          {projectsData.map((carte) => (
            <li key={carte.id} className="projet">
              <Card carte={carte} />
            </li>
          ))}
          {/* <li className="projet">
            <NavLink to="/portfolio/1" id="p1">
              <span>PROJET 1</span>
            </NavLink>
          </li>
          <li className="projet">
            <NavLink to="/portfolio/2" id="p2">
              <span>PROJET 2</span>
            </NavLink>
          </li>
          <li className="projet">
            <NavLink to="/portfolio/3" id="p3">
              <span>PROJET 3</span>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
