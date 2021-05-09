import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container, Divider, Header } from "semantic-ui-react";
import "./first.css";
import leSoft1 from "./1.jpg";
import leSoft2 from "./2.jpg";
import leSoft3 from "./3.jpg";
import leSoft4 from "./4.jpg";
import leSoft5 from "./5.jpg";

const First = ({ titleColor, textColor, productBackgroundColor }) => {
  return (
    <Container className="first">
      <Divider />
      <Header
        as="h1"
        style={{
          color: titleColor,
          fontSize: "2.5em",
          border: `1px solid ${titleColor}`,
          background: productBackgroundColor,
        }}
      >
        Le Soft
      </Header>
      <Divider />
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        <div>
          <img src={leSoft1} alt="etablissement" />
        </div>
        <div>
          <img src={leSoft2} alt="burger" />
        </div>
        <div>
          <img src={leSoft3} alt="chevre chaud" />
        </div>
        <div>
          <img src={leSoft4} alt="poisson" />
        </div>
        <div>
          <img src={leSoft5} alt="salade" />
        </div>
      </Carousel>
      <Divider />
      <Container
        className="laius"
        text
        style={{ color: textColor, background: productBackgroundColor }}
      >
        <p>Envie de ne rien faire de flemmarder, Pas de culpabilité,</p>
        <p>
          le Soft Napoléon est là pour réaliser toutes vos envies! Un petit
          creux, une grande fringale, une détente de fin d'aprés midi, un moment
          de "thé copines"
        </p>
        <p>
          Nous sommes là Produits frais et fait maison, Chez nous la qualité est
          toujours au Rendez-vous
        </p>
        <span className="author">Ludiwine</span>
      </Container>
    </Container>
  );
};

export default First;
