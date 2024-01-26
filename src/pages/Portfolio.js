import React from "react";
import { projectsData } from "../data/projetcsData";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

const Portfolio = () => {
  return (
    <>
      <Sidebar />
      <div className="main-portfolio">
        <div className="containeur">
          <div className="title">
            <h1>TOUS MES PROJETS :</h1>
            {/* <span>T</span>
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
            <span>:</span> */}
          </div>
          <ul className="projets">
            {projectsData.map((carte) => (
              <li key={carte.id} className="projet">
                <Card carte={carte} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
