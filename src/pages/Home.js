import React from "react";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContactBtn from "../components/ContactBtn";
import Pcimage from "../assets/images/section-home/Ordinateur.png";
import Sidebar from "../components/Sidebar";
import GithubBtn from "../components/GithubBtn";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Sidebar />
      <header>
        <ContactBtn />
        <GithubBtn />
        <div className="hero">
          <div className="left-hero">
            <h1>{t("home.h1")}</h1>
            <NavLink to="/a-propos" className="about-btn">
              {t("home.about")}
              <ArrowForwardIosIcon className="arrow-btn" />
            </NavLink>
          </div>
          <div className="right-hero">
            <img src={Pcimage} alt="ordinateur" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
