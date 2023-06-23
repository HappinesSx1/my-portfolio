import React from "react";
import { NavLink } from "react-router-dom";

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
        <img src="./github-mark-white.svg" alt="github logo" />
      </NavLink>
    </div>
  );
};

export default ContactBtn;
