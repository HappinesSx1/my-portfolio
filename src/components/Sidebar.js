import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import { projectsData } from "../data/projetcsData";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = parseInt(pathSegments[pathSegments.length - 1]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      className="Sidebar"
      id={
        lastSegment &&
        location.pathname === `/portfolio/${projectsData[lastSegment - 1].id}`
          ? "ciao"
          : ""
      }
    >
      <div className="sidebarlist-container">
        <ul className="SidebarList">
          <NavLink
            to="/my-portfolio"
            className={(nav) => (nav.isActive ? "active" : "")}
          >
            <li className="row">
              <div id="icon">
                <HomeIcon />
              </div>
              <div id="title">{t("sidebar.home")}</div>
            </li>
          </NavLink>
          <NavLink to="/portfolio">
            <div className="portfolio-nav">
              <li className="row">
                <div id="icon">
                  <ArticleIcon />
                </div>
                <div id="title">Portfolio</div>
              </li>
              <ul className="menuderoulant">
                {projectsData.map((slide, index) => (
                  <NavLink
                    to={`/portfolio/${slide.id}`}
                    className={(nav) => (nav.isActive ? "active" : "")}
                    key={index}
                  >
                    <li className="row">{`Projet ${slide.id}`}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </NavLink>
          <NavLink to="/a-propos" id={(nav) => (nav.isActive ? "active" : "")}>
            <li className="row">
              <div id="icon">
                <InfoIcon />
              </div>
              <div id="title">{t("sidebar.about")}</div>
            </li>
          </NavLink>
          <NavLink to="/contact" id={(nav) => (nav.isActive ? "active" : "")}>
            <li className="row">
              <div id="icon">
                <ContactPageIcon />
              </div>
              <div id="title">Contact</div>
            </li>
          </NavLink>
        </ul>
        <div className="language">
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              {i18n.language.toUpperCase()}
            </button>
            {dropdownVisible && (
              <div className="dropdown-content">
                <button
                  onClick={() => {
                    changeLanguage("fr");
                    setDropdownVisible(!dropdownVisible);
                  }}
                  className={` dropdown-btn ${
                    i18n.language === "fr" ? "active" : ""
                  }`}
                >
                  <span>FR</span>FRANÇAIS
                </button>
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setDropdownVisible(!dropdownVisible);
                  }}
                  className={` dropdown-btn ${
                    i18n.language === "en" ? "active" : ""
                  }`}
                >
                  <span>EN</span>ENGLISH
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bar-info">
        <div className="img-sidebar"></div>
        <h1>Barthélémy David</h1>
      </div>
    </div>
  );
};

export default Sidebar;
