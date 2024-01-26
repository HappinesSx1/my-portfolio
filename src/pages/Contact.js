import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import emailpicture from "../assets/images/section-contact/Emails-bro.svg";
import GithubBtn from "../components/GithubBtn";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Sidebar />
      <div className="main-contact">
        <GithubBtn />
        <div className="containeur">
          <div className="left-containeur">
            <div className="mail">
              <p>{t("contact.text")}</p>
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
