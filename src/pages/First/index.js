import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import "./first.css";

const First = ({ titleColor, textColor, productBackgroundColor }) => {
  return (
    <Container fluid className="first">
      <Divider />
      <Header as="h1" style={{ color: titleColor }}>
        Le Soft Napoléon
      </Header>
      <Divider />
      <img src="/assets/images/le-soft.jpg" alt="le soft" />
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
