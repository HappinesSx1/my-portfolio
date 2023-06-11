import React from "react";
import ContactBtn from "./ContactBtn";

const Header = () => {
  return (
    <header>
      <ContactBtn />
      <div className="hero">
        <div className="left-hero">
          <h1>Bonjour, bienvenue sur mon Portfolio !</h1>
        </div>
        <div className="right-hero">
          <img src="./Ordinateur.png" alt="ordinateur" />
        </div>
      </div>
    </header>
  );
};

export default Header;
