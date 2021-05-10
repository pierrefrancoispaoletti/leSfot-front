import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faBars, faUser } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Transition } from "semantic-ui-react";
import LoaderCSS from "../../Small/Loader";
import "./topaddbar.css";

const TopAppBar = ({
  setVisible,
  setOpenLoginModal,
  user,
  titleColor,
  textColor,
  productBackgroundColor,
}) => {
  return (
    <Container
      className="topappbar"
      style={{ background: productBackgroundColor }}
    >
      <Link to="/">
        <Header as="h1">
          <LoaderCSS titleColor={titleColor} textColor={textColor} />
        </Header>
      </Link>
      <div style={{ display: "flex" }}>
        <Transition
          animation="fade"
          duration={3000}
          visible={user ? true : false}
        >
          <Link to="/le-soft/admin">
            <Button  icon circular>
              <FontAwesomeIcon icon={faCogs} />
             </Button>
          </Link>
        </Transition>
        <Button  style={
              user
                ? { background: "green" }
                : { background: "" }
            } circular icon onClick={() => setOpenLoginModal(true)}>
          <FontAwesomeIcon
            icon={faUser}

          />
        </Button>
        <Button style={{background: titleColor}} onClick={() => setVisible(true)} circular icon>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
    </Container>
  );
};

export default TopAppBar;
