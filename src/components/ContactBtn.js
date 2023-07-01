import React from "react";
import { NavLink } from "react-router-dom";
import githubLogo from "../assets/images/github-mark-white.svg";

const ContactBtn = () => {
  return (
    <div>
      <NavLink to="/contact" className="contact">
        Contact
      </NavLink>
      <NavLink
        className="github-link"
        to="https://github.com/HappinesSx1"
        target="_blank"
      >
        <img src={githubLogo} alt="github logo" />
      </NavLink>
    </div>
  );
};

export default ContactBtn;
