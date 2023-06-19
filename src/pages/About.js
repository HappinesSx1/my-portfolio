import React from "react";
import ContactBtn from "../components/ContactBtn";
import javascriptlogo from "../assets/images/javascript-logo.svg";
import csslogo from "../assets/images/css3-logo.svg";
import htmllogo from "../assets/images/logo-html5.svg";
import sasslogo from "../assets/images/logo-sass.svg";
import nodelogo from "../assets/images/logo-node.svg";
import gitlogo from "../assets/images/logo-git.svg";

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
            (côté clien du site web).
          </h2>

          <p>
            HTML, CSS, JS, SASS, construction de petites et moyennes
            applications web avec React, fonctionnalités, animations, et codage
            de mises en page interactives. J'ai également quelques bases avec
            l'outil WordPress.
          </p>
        </div>

        <div className="languages">
          <div className="language">
            <img src={javascriptlogo} alt="javascript logo" />
            <p>Javascript</p>
          </div>
          <div className="language">
            <img src={csslogo} alt="css logo" />
            <p>CSS3</p>
          </div>
          <div className="language">
            <img src={htmllogo} alt="" />
            <p>HTML5</p>
          </div>
          <div className="language">
            <img src={sasslogo} alt="" />
            <p>SASS</p>
          </div>
          <div className="language">
            <img src={nodelogo} alt="" />
            <p>NODEJS</p>
          </div>
          <div className="language">
            <img src={gitlogo} alt="" />
            <p>GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
