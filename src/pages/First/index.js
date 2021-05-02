import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import "./first.css";
import leSoft from "./le-soft.jpg";

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
      <img src={leSoft} alt="le soft" />
      <Divider />
      <Container
        style={{ color: textColor, background: productBackgroundColor }}
        as="p"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam
        ipsum ut quia eaque, omnis earum dolore perferendis eligendi quod
        asperiores quidem? Eveniet, dolorem voluptatibus, cum eius doloribus
        beatae, veritatis laborum hic possimus quibusdam molestiae reiciendis
        eos fugiat amet quia?
      </Container>
    </Container>
  );
};

export default First;
