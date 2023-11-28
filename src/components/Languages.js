import React from "react";
import javascriptlogo from "../assets/images/logo-javascript.svg";
import csslogo from "../assets/images/logo-css3.svg";
import htmllogo from "../assets/images/logo-html5.svg";
import sasslogo from "../assets/images/logo-sass.svg";
import nodelogo from "../assets/images/logo-node.svg";
import gitlogo from "../assets/images/logo-git.svg";

const Languages = () => {
  return (
    <div className="languages">
      <div className="language">
        <img src={javascriptlogo} alt="javascript logo" />
        <p>Javascript</p>
      </div>
      <div className="language">
        <img src={csslogo} alt="css logo" />
        <p>CSS3</p>
      </div>
      <div className="language">
        <img src={htmllogo} alt="" />
        <p>HTML5</p>
      </div>
      <div className="language">
        <img src={sasslogo} alt="" />
        <p>SASS</p>
      </div>
      <div className="language">
        <img src={nodelogo} alt="" />
        <p>NODEJS</p>
      </div>
      <div className="language">
        <img src={gitlogo} alt="" />
        <p>GIT</p>
      </div>
    </div>
  );
};

export default Languages;
