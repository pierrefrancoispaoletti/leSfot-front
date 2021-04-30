import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Transition } from "semantic-ui-react";
import LoaderCSS from "../../Small/Loader";
import "./topaddbar.css";

const TopAppBar = ({ setVisible, setOpenLoginModal, user }) => {
  return (
    <Container className="topappbar">
      <Link to="/">
        <Header as="h1">
          <LoaderCSS />
        </Header>
      </Link>
      <div style={{display: "flex" }}>
          <Transition animation="fade" duration={3000} visible={user ? true : false }>
            <Link to="/le-soft/admin">
              <Button color="olive" icon="settings" circular />
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
