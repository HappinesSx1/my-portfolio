import React from "react";
import ContactBtn from "../components/ContactBtn";
import javascriptlogo from "../assets/images/javascript-logo.svg"

const About = () => {
  return (
    <div className="main">
      <ContactBtn />
      <span>S</span>
      <span>A</span>
      <span>L</span>
      <span>U</span>
      <span>T</span>
      <span>!</span>
      <div className="languages">
        <div className="language">
          <img src={javascriptlogo} alt="" />
          <p>Javascript</p>
        </div>
      </div>
    </div>
  );
};

export default About;
