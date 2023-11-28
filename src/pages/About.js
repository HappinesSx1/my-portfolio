import React from "react";
import ContactBtn from "../components/ContactBtn";
import Languages from "../components/Languages";

const About = () => {
  return (
    <div className="main">
      <ContactBtn />
      <div className="content-containeur">
        <div className="title">
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span> </span>
          <span>&</span>
          <span> </span>
          <span>E</span>
          <span>x</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span>i</span>
          <span>e</span>
          <span>n</span>
          <span>c</span>
          <span>e</span>
        </div>

        <div className="experience-text">
          <h2>
            Mon principal domaine d'expertise est le Front end dveloppement
            (côté client du site web).
          </h2>

          <p>
            HTML, CSS, JS, SASS, construction de petites et moyennes
            applications web avec React, fonctionnalités, animations, et codage
            de mises en page interactives. J'ai également quelques bases avec
            l'outil WordPress.
          </p>
        </div>

        <Languages />
      </div>
    </div>
  );
};

export default About;
