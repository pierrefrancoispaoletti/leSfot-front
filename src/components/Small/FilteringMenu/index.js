/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import { Menu } from "semantic-ui-react";
import "./filteringmenu.css";

const FilteringMenu = ({
  drinkCat,
  products,
  setFilteredProducts,
  textColor,
  titleColor,
  productBackgroundColor,
}) => {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    if (name) {
      setFilteredProducts(products.filter((p) => p.tag.includes(name)));
    } else {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  return (
    <Menu
      icon="labeled"
      compact
      style={{
        display: "flex",
        flexFlow: "row wrap",
        background: productBackgroundColor,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {drinkCat[0].innerMenu.map((cat) => (
        <Menu.Item
          key={cat.categoryName}
          name={cat.categoryName}
          active={activeItem === cat.categoryName}
          onClick={handleItemClick}
        >
          <FontAwesomeIcon
            style={cat.style}
            className="image"
            size="3x"
            icon={cat.icon}
          />
          <span style={{ color: textColor }}>{cat.title}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default FilteringMenu;
