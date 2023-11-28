import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ carte }) => {
  return (
    <NavLink id={"p" + carte.id} to={`/portfolio/${carte.id}`}>
      <span>PROJET {carte.id}</span>
    </NavLink>
  );
};

export default Card;
