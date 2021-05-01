import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLink,
  faPhone,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Accordion, Button, Divider, Form } from "semantic-ui-react";

const AdminLinks = ({
  handleSubmitInfos,
  facebookUrl,
  setFacebookUrl,
  instagramUrl,
  setInstagramUrl,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
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
            icon={faLink}
            size="3x"
            style={{
              "--fa-primary-color": "blue",
              "--fa-secondary-color": "saddlebrown",
            }}
          />
          Configuration des Liens reseaux sociaux / mails / numéros de telephone
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Form onSubmit={handleSubmitInfos}>
            <Form.Field>
              <label style={{ textAlign: "center" }}>
                <FontAwesomeIcon size="3x" icon={faFacebook} />
                <Divider />
                <input
                  value={facebookUrl}
                  placeholder="copiez ici votre addresse facebook"
                  onChange={(e) => setFacebookUrl(e.target.value)}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label style={{ textAlign: "center" }}>
                <FontAwesomeIcon size="3x" icon={faInstagram} />
                <Divider />
                <input
                  value={instagramUrl}
                  placeholder="copiez ici votre addresse instagram"
                  onChange={(e) => setInstagramUrl(e.target.value)}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label style={{ textAlign: "center" }}>
                <FontAwesomeIcon size="3x" icon={faEnvelope} />
                <Divider />
                <input
                  value={email}
                  placeholder="copiez ici votre addresse mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label style={{ textAlign: "center" }}>
                <FontAwesomeIcon size="3x" icon={faPhone} />
                <Divider />
                <input
                  value={phoneNumber}
                  placeholder="copiez ici votre numéro de telephone"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
            </Form.Field>
            <Button color="green" type="submit" inverted content="Envoyer" />
          </Form>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default AdminLinks;
