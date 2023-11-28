import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import { projectsData } from "../data/projetcsData";

const Sidebar = () => {
  const location = useLocation();

  const pathSegments = location.pathname.split("/");
  const lastSegment = parseInt(pathSegments[pathSegments.length - 1]);

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
      <ul className="SidebarList">
        <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>
          <li className="row">
            <div id="icon">
              <HomeIcon />
            </div>
            <div id="title">Home</div>
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
            <ul class="menuderoulant">
              {projectsData.map((slide, index) => (
                <NavLink
                  to={`/portfolio/${slide.id}`}
                  className={(nav) => (nav.isActive ? "active" : "")}
                  key={index}
                >
                  <li class="row">{`Projet ${slide.id}`}</li>
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
            <div id="title">A propos</div>
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
      <div className="bar-info">
        <div className="img-sidebar"></div>
        <h1>Barthélémy David</h1>
      </div>
    </div>
  );
};

export default Sidebar;
