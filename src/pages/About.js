import React from "react";
import ContactBtn from "../components/ContactBtn";
import Languages from "../components/Languages";
import Sidebar from "../components/Sidebar";
import GithubBtn from "../components/GithubBtn";
import Services from "../components/Services";
import Formations from "../components/Formations";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Sidebar />
      <div className="main">
        <ContactBtn />
        <GithubBtn />
        <div className="content-containeur">
          <span className="Over-here">Over here →</span>
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
            <h2>{t("about.title")}</h2>
            <p>
              {t("about.profile")} <span> Portfolio</span>.
            </p>

            <p>{t("about.moreAbout")}</p>
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
