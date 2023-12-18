import React from "react";
import { NavLink } from "react-router-dom";

const ReturnBtn = () => {
  return (
    <div>
      <NavLink to="/portfolio" className="return">
        <span>&lt; EXIT</span>
      </NavLink>
    </div>
  );
};

export default ReturnBtn;
