import React from "react";
import ContactBtn from "../components/ContactBtn";
import Languages from "../components/Languages";
import Sidebar from "../components/Sidebar";
import GithubBtn from "../components/GithubBtn";
import Services from "../components/Services";
import Formations from "../components/Formations";

const About = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <ContactBtn />
        <GithubBtn />
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
              Mon principal domaine d'expertise est le Front end développement
              (côté client du site web).
            </h2>

            <p>
              Je m'appelle David BARTHELEMY, je suis un développeur front basé
              proche de Metz, en Moselle (57). Déjà plusieurs années que je suis
              investi dans le développement web, d'abord en parallèle de mes
              études puis avec une formation openclassroom. Découvrez tous les
              projets sur lesquels j'ai travaillé dans la section:
              <span> Portfolio</span>.
            </p>

            <p>
              HTML, CSS, JS, SASS, construction de petites et moyennes
              applications web avec React, fonctionnalités, animations, et
              codage de mises en page interactives. J'ai également quelques
              bases avec l'outil WordPress.
            </p>
          </div>

          <Languages />
        </div>
        <Services />
        <Formations />
      </div>
    </>
  );
};

export default About;
