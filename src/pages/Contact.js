import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import emailpicture from "../assets/images/section-contact/Emails-bro.svg";
import GithubBtn from "../components/GithubBtn";

const Contact = () => {
  return (
    <>
      <Sidebar />
      <div className="main-contact">
        <GithubBtn />
        <div className="containeur">
          <div className="left-containeur">
            <div className="mail">
              <p>
                Avez-vous besoin d'un développer web (junior)? <br />
                Voulez-vous lancer un nouveau projet? <br />
                Vous pouvez me contacter à cette adresse mail ci-dessous:
              </p>
              <h1>
                <NavLink to="mailto:david.b57970@gmail.com">
                  david.b57970@gmail.com
                </NavLink>
              </h1>
            </div>
          </div>
          <div className="right-containeur">
            <img src={emailpicture} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
