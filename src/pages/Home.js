import React from "react";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContactBtn from "../components/ContactBtn";

const Home = () => {
  return (
    <header>
      <ContactBtn />
      <div className="hero">
        <div className="left-hero">
          <h1>Bonjour, bienvenue sur mon Portfolio !</h1>
          <NavLink to="/a-propos" className="about-btn">
            A propos de moi
            <ArrowForwardIosIcon className="arrow-btn" />
          </NavLink>
        </div>
        <div className="right-hero">
          <img src="./Ordinateur.png" alt="ordinateur" />
        </div>
      </div>
    </header>
  );
};

export default Home;
