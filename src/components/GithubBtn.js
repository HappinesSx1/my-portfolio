import React from "react";
import { NavLink } from "react-router-dom";
import githubLogo from "../assets/images/github-mark-white.svg";

const GithubBtn = () => {
  return (
    <NavLink
      className="github-link"
      to="https://github.com/HappinesSx1"
      target="_blank"
    >
      <img src={githubLogo} alt="github logo" />
    </NavLink>
  );
};

export default GithubBtn;
