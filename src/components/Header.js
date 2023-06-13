import React from "react";
import ContactBtn from "./ContactBtn";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Header = () => {
  return (
    <header>
      <ContactBtn />
      <div className="hero">
        <div className="left-hero">
          <h1>Bonjour, bienvenue sur mon Portfolio !</h1>
          <NavLink to="/about" className="about-btn">About me<ArrowForwardIosIcon className="arrow-btn"/></NavLink>
        </div>
        <div className="right-hero">
          <img src="./Ordinateur.png" alt="ordinateur" />
        </div>
      </div>
    </header>
  );
};

export default Header;
