import React, { useState } from "react";
import ReturnBtn from "../components/ReturnBtn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink, useParams } from "react-router-dom";
import { projectsData } from "../data/projetcsData";

const Projet = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  // Data récuperé depuis le fichier portfolio.json
  const dataDetails = projectsData.find((data) => data.id === id);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === dataDetails.smallPicture.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? dataDetails.smallPicture.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <ReturnBtn />
      <div className="project-containeur">
        <div className="containeur-left">
          <h2 className="description">Description:</h2>
          <p className="description-p">{dataDetails.description}</p>

          <h2 className="description">Technologies utilisées:</h2>
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
          {dataDetails.bigPicture[currentSlide] === null ? (
            ""
          ) : (
            <span className="zoom-here">Zoom here →</span>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/img${dataDetails.smallPicture[currentSlide]}`}
            alt="test"
            onClick={
              dataDetails.bigPicture[currentSlide] === null ? null : toggleModal
            }
            // onClick={toggleModal}
            id={dataDetails.bigPicture[currentSlide] === null ? "no-modal" : ""}
          />
          {dataDetails.smallPicture.length === 1 ? (
            ""
          ) : (
            <div className="arrows">
              <span className="left-arrow arrow" onClick={prevSlide}>
                ←
              </span>
              <span className="right-arrow arrow" onClick={nextSlide}>
                →
              </span>
            </div>
          )}
        </div>
        {dataDetails.bigPicture[currentSlide] === null
          ? ""
          : modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <img
                    src={`${process.env.PUBLIC_URL}/img${dataDetails.bigPicture[currentSlide]}`}
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
