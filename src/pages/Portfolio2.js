import React, { useState } from "react";
import ReturnBtn from "../components/ReturnBtn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import p2Small from "../assets/images/projets/projet2-small-picture.png";
import p2Large from "../assets/images/projets/projet2-big-picture.png";

const Portfolio2 = () => {
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
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
          <p className="code-btn">
            Voir le code <ArrowForwardIosIcon className="arrow-btn" />
          </p>
        </div>
        <div className="containeur-right">
          <img src={p2Small} alt="" onClick={toggleModal} />
        </div>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img src={p2Large} alt="" />
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio2;
