import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactBtn = () => {
  return (
    <div>
        <NavLink to="/about" className="contact">Contact</NavLink>
        <NavLink className="github-link" to="https://github.com/HappinesSx1" target="_blank"><img src="./github-mark-white.svg" alt="github logo" /></NavLink>
    </div>
  );
};

export default ContactBtn;
