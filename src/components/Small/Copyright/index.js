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
const Copyright = ({
  facebookUrl,
  instagramUrl,
  email,
  phoneNumber,
  backgroundColor,
  productBackgroundColor,
  textColor,
  titleColor,
}) => {
  return (
    <div className="footer">
      <div>
        <Header as="h3" style={{ color: titleColor }}>
          Retrouvez nous sur :{" "}
        </Header>
      </div>
      <div className="footer__icons">
        <a target="_blank" href={facebookUrl} rel="noreferrer">
          <FontAwesomeIcon
            style={{
              color: "#3B5998",
              background: "white",
              borderRadius: "100%",
            }}
            size="3x"
            icon={faFacebook}
            pull="left"
          />
        </a>
        <a target="_blank" href={instagramUrl} rel="noreferrer">
          <FontAwesomeIcon
            style={{ color: "#3F729B", borderRadius: "100%" }}
            size="3x"
            icon={faInstagram}
            pull="right"
          />
        </a>
      </div>
      <Divider />
      <div>
        <Header as="h3" style={{ color: titleColor }}>
          Contactez nous !{" "}
        </Header>
      </div>
      <div className="footer__icons">
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon
            style={{
              "--fa-primary-color": "black",
              "--fa-secondary-color": "white",
              "--fa-secondary-opacity": 0.8,
            }}
            size="3x"
            icon={faEnvelope}
            pull="left"
          />
        </a>
        <a href={`tel:${phoneNumber}`}>
          <FontAwesomeIcon
            style={{
              "--fa-primary-color": "firebrick",
              "--fa-secondary-color": "black",
              "--fa-primary-opacity": 1,
              "--fa-secondary-opacity": 1,
            }}
            size="3x"
            icon={faPhone}
            pull="right"
          />
        </a>
      </div>
      <Divider />
      <div className="footer__copyright" style={{color: titleColor}}>
        {"Copyright © "}
        <a style={{color: textColor}} href="https://leSoft.fr"> Le Soft Napoléon</a>{" "}
        {new Date().getFullYear()}
        {"."}
      </div>
      <div
        className="footer__alvp"
        style={{
          background: `linear-gradient(to right, ${backgroundColor}, ${productBackgroundColor})`,
        }}
      >
        <a
          style={{ color: textColor, fontSize: "0.9em" }}
          href="mailto:pef@alvp-developments.com"
        >
          Made with
          <FontAwesomeIcon
            className="alvp__icon"
            color="darkred"
            icon={faHeart}
            size="2x"
          />
          by ALVP-Developments Ajaccio
        </a>
      </div>
    </div>
  );
};

export default Copyright;
