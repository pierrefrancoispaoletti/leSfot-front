import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Sidebar } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import categories from "../../../datas/datas";

const CategoriesMenu = ({ children, visible, setVisible, setCategorie }) => {
  const date = new Date();
  const currentHour = date.getHours();
  // const currentHour = 18;
  return (
    <Sidebar.Pushable>
      <Sidebar
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
                : { display: "none" }
            }
            key={categorie.slug}
            to={`/${categorie.slug}`}
            onClick={() => setCategorie(categorie)}
          >
            <Menu.Item>
              <Menu.Header>
                <FontAwesomeIcon
                  size="4x"
                  style={categorie.style}
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
