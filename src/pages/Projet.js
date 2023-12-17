import React, { useState } from "react";
import ReturnBtn from "../components/ReturnBtn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink, useParams } from "react-router-dom";
import { projectsData } from "../data/projetcsData";

const Projet = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // Data récuperé depuis le fichier portfolio.json
  const dataDetails = projectsData.find((data) => data.id === id);

  return (
    <>
      <ReturnBtn />
      <div className="project-containeur">
        {dataDetails.bigPicture === null ? (
          ""
        ) : (
          <span className="zoom-here">Zoom here →</span>
        )}
        <div className="containeur-left">
          <h2 className="description">Description:</h2>
          <p className="description-p">{dataDetails.description}</p>

          <h2 className="description">Technologies utilisée:</h2>
          <ul>
            {dataDetails.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <p className="code-btn">
            <NavLink to={dataDetails.lien} target="_blank">
              Voir le code <ArrowForwardIosIcon className="arrow-btn" />
            </NavLink>
          </p>
        </div>
        <div className="containeur-right">
          <img
            src={`${process.env.PUBLIC_URL}/img${dataDetails.smallPicture}`}
            alt="test"
            onClick={toggleModal}
            id={dataDetails.bigPicture === null ? "no-modal" : ""}
          />
        </div>
        {dataDetails.bigPicture === null
          ? ""
          : modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <img
                    src={`${process.env.PUBLIC_URL}/img${dataDetails.bigPicture}`}
                    alt=""
                  />
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

export default Projet;
