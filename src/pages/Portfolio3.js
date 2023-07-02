import React, { useState } from "react";
import ReturnBtn from "../components/ReturnBtn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import p3Small from "../assets/images/projets/projet3-small-picture.png";
import { NavLink } from "react-router-dom";

const Portfolio3 = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <ReturnBtn />
      <div className="project-containeur">
        <div className="containeur-left">
          <p className="description">Technologies utilisée:</p>
          <ul>
            <li>REACT</li>
            <li>SASS</li>
            <li>REDUX</li>
          </ul>
          <p className="code-btn">
            <NavLink
              to="https://github.com/HappinesSx1/crypto-view"
              target="_blank"
            >
              Voir le code <ArrowForwardIosIcon className="arrow-btn" />
            </NavLink>
          </p>
        </div>
        <div className="containeur-right">
          <img src={p3Small} alt="portoflio3" id="no-modal" />
        </div>
        {/* {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img src={p2Large} alt="" />
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Portfolio3;
