import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      className="Sidebar"
      id={location.pathname === "/portfolio/1" ? "ciao" : ""}
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
              <NavLink
                to="/portfolio/1"
                className={(nav) => (nav.isActive ? "active" : "")}
              >
                <li class="row">Porjet 1</li>
              </NavLink>
              <NavLink
                to="/portfolio/2"
                className={(nav) => (nav.isActive ? "active" : "")}
              >
                <li class="row">Porjet 2</li>
              </NavLink>
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
