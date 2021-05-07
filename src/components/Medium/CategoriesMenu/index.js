import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Sidebar } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import categories from "../../../datas/datas";

const CategoriesMenu = ({
  backgroundColor,
  textColor,
  titleColor,
  children,
  visible,
  setVisible,
  setCategorie,
  currentHour,
  user,
}) => {
  return (
    <Sidebar.Pushable>
      <Sidebar
        style={{ backgroundColor: backgroundColor }}
        as={Menu}
        direction="left"
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        inverted
        vertical
        visible={visible}
        width="thin"
      >
        {categories.map((categorie) => (
          <Link
            style={
              (currentHour >= categorie.startHour &&
                currentHour <= categorie.endHour) ||
              currentHour >= categorie.startSecond
                ? { visibility: "visible" }
                : !user
                ? { display: "none" }
                : { visibility: "visible" }
            }
            key={categorie.slug}
            to={`/${categorie.slug}`}
            onClick={() => setCategorie(categorie)}
          >
            <Menu.Item
              style={{
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "1.1em",
              }}
            >
              <Menu.Header>
                <FontAwesomeIcon
                  size="4x"
                  style={{
                    "--fa-primary-color": textColor,
                    "--fa-secondary-color": titleColor,
                    "--fa-primary-opacity": 1,
                    "--fa-secondary-opacity": 1,
                  }}
                  // style={categorie.style}
                  icon={categorie.icon}
                />
              </Menu.Header>
              {categorie.name}
            </Menu.Item>
          </Link>
        ))}
      </Sidebar>
      <Sidebar.Pusher dimmed={visible}>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default CategoriesMenu;
