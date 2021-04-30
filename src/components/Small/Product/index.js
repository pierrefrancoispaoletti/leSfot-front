import React from "react";
import { Icon } from "semantic-ui-react";
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
        <h3 style={{ color: titleColor }}>
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
          )}{" "}
        </h3>
        <span style={{ color: titleColor }}>
          {price} <small>€</small>
        </span>
      </header>
      <main>
        <p style={{ color: textColor }}>{description}</p>
        {tag[1] && (
          <p>
            <strong style={{ color: titleColor }}>Allergènes :</strong>{" "}
            {tag.map((t) => (
              <span style={{ color: textColor }} key={t}>{` ${t} `}</span>
            ))}
          </p>
        )}
      </main>
    </div>
  );
};

export default Product;
