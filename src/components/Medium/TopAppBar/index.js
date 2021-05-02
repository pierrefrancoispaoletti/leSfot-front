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
      style={{ background: productBackgroundColor}}
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
            <Button color="purple" icon="settings" circular />
          </Link>
        </Transition>
        <Button
          circular
          icon="user"
          color={user ? "blue" : "grey"}
          onClick={() => setOpenLoginModal(true)}
        />
        <Button
          onClick={() => setVisible(true)}
          circular
          icon="bars"
          color="teal"
        />
      </div>
    </Container>
  );
};

export default TopAppBar;
