import { faPalette } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { CompactPicker } from "react-color";
import { Accordion, Divider, Header, Icon } from "semantic-ui-react";
import "./admincolor.css";

const AdminColor = ({
  titleColor,
  setTitleColor,
  textColor,
  setTextColor,
  backgroundColor,
  setBackgroundColor,
  productBackgroundColor,
  setProductBackgroundColor,
}) => {
  const [activeIndex, setActiveIndex] = useState({});

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
    <div className="admincolor">
      <Accordion styled>
        <Accordion.Title
          index={0}
          active={activeIndex === 0}
          onClick={handleClick}
        >
          <FontAwesomeIcon
            icon={faPalette}
            size="3x"
            style={{
              "--fa-primary-color": "blue",
              "--fa-secondary-color": "saddlebrown",
            }}
          />
          Configuration des couleurs
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <div className="admin" style={{ background: backgroundColor }}>
            <Header as="h2" style={{ color: titleColor }}>
              Couleur des titres de Section
            </Header>
            <CompactPicker
              color={titleColor}
              onChangeComplete={(color) => setTitleColor(color.hex)}
            />
            <Divider />
            <p style={{ color: textColor }}>Couleur des textes</p>
            <CompactPicker
              color={textColor}
              onChangeComplete={(color) => setTextColor(color.hex)}
            />
            <Divider />
            <div
              style={{
                height: 50,
                width: 200,
                background: backgroundColor,
                border: "1px solid black",
              }}
            ></div>
            <p>Couleur du fond</p>
            <CompactPicker
              color={backgroundColor}
              onChangeComplete={(color) => setBackgroundColor(color.hex)}
            />
            <Divider />
            <Header as="h3">Changez la Couleur de fond des produits</Header>
            <div
              className="product"
              style={{ background: productBackgroundColor }}
            >
              <header>
                <h3 style={{ color: titleColor }}>
                  {" "}
                  Titre
                  <Icon style={{ color: textColor }} name="search" />
                </h3>
                <span style={{ color: titleColor }}>
                  {99999} <small>€</small>
                </span>
              </header>
              <main>
                <p style={{ color: textColor }}>
                  lorem ipsum dolor sit amet....
                </p>
                <p>
                  <strong style={{ color: titleColor }}>Allergènes :</strong>{" "}
                  <span style={{ color: textColor }}>Arachides</span>
                  <span style={{ color: textColor }}>Fruits à coques</span>
                  <span style={{ color: textColor }}>Soja</span>
                  <span style={{ color: textColor }}>....</span>
                </p>
              </main>
            </div>
            <CompactPicker
              color={productBackgroundColor}
              onChangeComplete={(color) => setProductBackgroundColor(color.hex)}
            />
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default AdminColor;
