import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";

const Sidebar = () => {
  return (
    <div className="Sidebar">
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
        <NavLink to="/about" id={(nav) => (nav.isActive ? "active" : "")}>
          <li className="row">
            <div id="icon">
              <ContactPageIcon />
            </div>
            <div id="title">About</div>
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
