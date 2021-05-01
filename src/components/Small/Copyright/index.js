import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHeart,
  faPhone,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Divider, Header } from "semantic-ui-react";

import "./copyright.css";
const Copyright = ({facebookUrl, instagramUrl, email, phoneNumber}) => {
  return (
    <div className="footer">
      <div>
        <Header>Retrouvez nous sur : </Header>
      </div>
      <div className="footer__icons">
        <a target="_blank" href={facebookUrl} rel="noreferrer">
          <FontAwesomeIcon size="3x" icon={faFacebook} pull="left" />
        </a>
        <a target="_blank" href={instagramUrl} rel="noreferrer">
          <FontAwesomeIcon size="3x" icon={faInstagram} pull="right" />
        </a>
      </div>
      <Divider />
      <div>
        <Header>Contactez nous ! </Header>
      </div>
      <div className="footer__icons">
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon size="3x" icon={faEnvelope} pull="left" />
        </a>
        <a href={`tel:${phoneNumber}`}>
          <FontAwesomeIcon size="3x" icon={faPhone} pull="right" />
        </a>
      </div>
      <Divider />
      <div className="footer__copyright">
        {"Copyright © "}
        <a href="https://leSoft.fr"> Le Soft Napoléon</a> {new Date().getFullYear()}
        {"."}
      </div>
      <div className="footer__copyright">
        <a color="inherit" href="mailto:pef@alvp-developments.com">
          {"Made by ALVP-Developments Ajaccio"}
          <FontAwesomeIcon color="darkred" icon={faHeart} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Copyright;
