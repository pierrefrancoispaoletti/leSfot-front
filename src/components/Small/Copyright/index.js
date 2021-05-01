import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Divider, Header } from "semantic-ui-react";

import "./copyright.css";
const Copyright = () => {
  return (
    <div className="footer">
      <div>
        <Header>Retrouvez nous sur : </Header>
      </div>
      <div className="footer__icons">
        <a target="_blank" href="https://facebook.com" rel="noreferrer">
          <FontAwesomeIcon size="3x" icon={faFacebook} pull="left" />
        </a>
        <a target="_blank" href="https://instagram.com" rel="noreferrer">
          <FontAwesomeIcon size="3x" icon={faInstagram} pull="right" />
        </a>
      </div>
      <Divider />
      <div>
        <Header>Contactez nous ! </Header>
      </div>
      <div className="footer__icons">
        <a href="mailto:pierre.paoletti1@gmail.com">
          <FontAwesomeIcon size="3x" icon={faEnvelope} pull="left" />
        </a>
        <a href="tel:+33636656565">
          <FontAwesomeIcon size="3x" icon={faPhone} pull="right" />
        </a>
      </div>
      <Divider />
      <div className="footer__copyright">
        {"Copyright © "}
        <a color="inherit" href="#">
          {" "}
          Le Soft Napoléon
        </a>{" "}
        {new Date().getFullYear()}
        {"."}
      </div>
    </div>
  );
};

export default Copyright;
