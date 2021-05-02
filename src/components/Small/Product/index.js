import React from "react";
import { Header, Icon } from "semantic-ui-react";
import AdminCrudButtons from "../AdminCrudButtons";
import "./product.css";

const Product = ({
  title,
  tag,
  price,
  image,
  description,
  visibility,
  user,
  product,
  handleDeleteProduct,
  handleChangeVisibility,
  setSelectedProduct,
  setOpenEditProductModal,
  setOpenUpdateImageModal,
  setOpenImageModal,
  titleColor,
  textColor,
  productBackgroundColor,
}) => {
  return (
    <div
      className="product"
      style={{ backgroundColor: productBackgroundColor }}
    >
      {user && (
        <AdminCrudButtons
          {...product}
          product={product}
          handleDeleteProduct={handleDeleteProduct}
          handleChangeVisibility={handleChangeVisibility}
          setSelectedProduct={setSelectedProduct}
          setOpenEditProductModal={setOpenEditProductModal}
          setOpenUpdateImageModal={setOpenUpdateImageModal}
        />
      )}
      <header>
        <Header
          className="intitule"
          as="h2"
          style={{ color: titleColor, borderBottom: `2px solid ${titleColor}` }}
        >
          {(visibility ? "" : "Caché : ") + title}{" "}
          {image && (
            <Icon
              style={{ color: textColor }}
              onClick={() => {
                setSelectedProduct(product);
                setOpenImageModal(true);
              }}
              name="search"
            />
          )}
        </Header>
        <span className="price" style={{ color: titleColor }}>
          {price.toFixed(2)} <small>€</small>
        </span>
      </header>
      <main>
        <p className="description" style={{ color: textColor }}>
          {description}
        </p>
        {tag[1] && (
          <p className="allergenes">
            <strong
              style={{
                color: titleColor,
                borderBottom: `1px solid ${titleColor}`,
              }}
            >
              Allergènes :
            </strong>{" "}
            {tag.map((t) => (
              <span
                className="allergene"
                style={{ color: textColor }}
                key={t}
              >{` ${t} `}</span>
            ))}
          </p>
        )}
      </main>
    </div>
  );
};

export default Product;
