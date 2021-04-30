/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Container, Header } from "semantic-ui-react";
import LoaderCSS from "../../components/Small/Loader";
import Product from "../../components/Small/Product";
import "./categorie.css";

const Categories = ({
  name,
  user,
  setOpenAddProductModal,
  products,
  setProducts,
  setOpenLoginModal,
  setSelectedProduct,
  setOpenEditProductModal,
  setOpenUpdateImageModal,
  setOpenImageModal,
  titleColor,
  textColor,
  productBackgroundColor,
}) => {
  let { categorie } = useParams("categorie");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: `/api/products/${categorie}`,
    })
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categorie]);

  const handleDeleteProduct = (productId, productCategory = categorie) => {
    const token = localStorage.getItem("token-le-Soft");
    if (token) {
      setLoading(true);
      axios({
        method: "delete",
        url: `/api/products/deleteProduct`,
        data: {
          productId,
          productCategory,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => setProducts(response.data.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setOpenLoginModal(true);
    }
  };
  const handleChangeVisibility = (product) => {
    let newProduct = { ...product };
    newProduct.visibility = !product.visibility;
    const token = localStorage.getItem("token-le-Soft");
    if (token) {
      setLoading(true);
      axios({
        method: "post",
        url: `/api/products/updateProduct`,
        data: {
          update: newProduct,
          productId: product._id,
          productCategory: product.category,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => setProducts(response.data.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setOpenLoginModal(true);
    }
  };
  return (
    <Container className="categorie">
      {user && (
        <Button
          circular
          icon="add"
          size="large"
          onClick={() => setOpenAddProductModal(true)}
          color="green"
        />
      )}
      <Header as="h2" style={{ color: titleColor }}>
        {name}
      </Header>
      {loading && (
        <div className="loadercontainer">
          <LoaderCSS />
        </div>
      )}
      {!loading &&
        products?.map((product) => (
          <Product
            key={product._id}
            {...product}
            user={user}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
            handleChangeVisibility={handleChangeVisibility}
            setSelectedProduct={setSelectedProduct}
            setOpenEditProductModal={setOpenEditProductModal}
            setOpenUpdateImageModal={setOpenUpdateImageModal}
            setOpenImageModal={setOpenImageModal}
            titleColor={titleColor}
            textColor={textColor}
            productBackgroundColor={productBackgroundColor}
          />
        ))}
    </Container>
  );
};

export default Categories;
