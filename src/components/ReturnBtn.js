import React from "react";
import { NavLink } from "react-router-dom";

const ReturnBtn = () => {
  return (
    <div>
      <NavLink to="/portfolio" className="return">
        <span>&lt; EXIT</span>
      </NavLink>
      <NavLink
        className="github-link"
        to="https://github.com/HappinesSx1"
        target="_blank"
      ></NavLink>
    </div>
  );
};

export default ReturnBtn;
