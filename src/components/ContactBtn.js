import React from "react";
import { NavLink } from "react-router-dom";

const ContactBtn = () => {
  return (
    <div>
      <button>
        <NavLink to="/about">Contact</NavLink>
      </button>
    </div>
  );
};

export default ContactBtn;
