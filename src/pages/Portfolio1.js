import React, { useState } from "react";
import ReturnBtn from "../components/ReturnBtn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import p1Small from "../assets/images/projets/projet1-small-picture.png";
import p1Large from "../assets/images/projets/projet1-big-picture.png";

const Portfolio1 = () => {
  const [modal, setModal] = useState(false);
  const image = document.querySelector(".test");

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
          <p>
            Voir le code <ArrowForwardIosIcon className="arrow-btn" />
          </p>
        </div>
        <div className="containeur-right">
          <img src={p1Small} alt="" onClick={toggleModal} />
        </div>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img src={p1Large} alt="" />
              <button className="close-modal" onClick={toggleModal}>
                FERMER
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio1;
