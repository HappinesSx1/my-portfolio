import React from "react";
import ContactBtn from "../components/ContactBtn";
import Languages from "../components/Languages";
import Sidebar from "../components/Sidebar";
import img1 from "../assets/images/section-about/landing_page.svg";
import img2 from "../assets/images/section-about/knowledge.svg";

const About = () => {
  return (
    <>
      <Sidebar />
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
              applications web avec React, fonctionnalités, animations, et
              codage de mises en page interactives. J'ai également quelques
              bases avec l'outil WordPress.
            </p>
          </div>

          <Languages />
        </div>
        <section className="more-about-container">
          <div className="more-about">
            <h2 className="section-h2">Mes services</h2>
            <div className="talents">
              <div className="talent-container">
                <div className="talent">
                  <img src={img1} alt="" />
                  <h3>Applications</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, natus! Eaque modi sunt iste voluptate.
                  </p>
                </div>
              </div>
              <div className="talent-container">
                <div className="talent">
                  <img src={img2} alt="" />
                  <h3>Optimisations</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate omnis et totam ea aperiam corporis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="formations-container">
          <div className="formations-section">
            <h2 className="section-h2">Mes formations</h2>
            <div className="formations">
              <div className="left-formation">
                <div className="formation">
                  <h4>Salut</h4>
                  <h5>2015-2018</h5>
                </div>
                <div className="formation">
                  <h4>Salut</h4>
                  <h5>2015-2018</h5>
                </div>
              </div>
              <div className="right-formation">
                <div className="planet">
                  <div className="planet-circle"></div>
                  <div className="planet-anneau"></div>
                  <div className="planet-anneau"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
