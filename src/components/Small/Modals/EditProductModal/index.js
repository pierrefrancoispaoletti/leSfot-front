import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Header, Icon, Modal, Radio } from "semantic-ui-react";
import allergenes from "../../../../datas/allergénes";
import categories from "../../../../datas/datas";
import { $SERVER } from "../../../../_const/_const";

const EditProductModal = ({
  product,
  setOpenEditProductModal,
  openEditProductModal,
  setOpenLoginModal,
  setAppMessage,
  setProducts,
  drinkCat,
}) => {
  const { _id, title, description, price, tag, category } = product;

  const [editedProduct, setEditedProduct] = useState({
    title: title,
    description: description,
    price: price,
    category: category,
    tag: tag,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEditedProduct({ ...product });
  }, [product]);

  const changeProduct = (e) => {
    let updatedValue = {};
    updatedValue[e.target.name] = e.target.value;
    setEditedProduct({ ...editedProduct, ...updatedValue });
  };

  const token = localStorage.getItem("token-le-Soft");

  const onChange = (value, e) => {
    const selectedCheckboxes = product.tag;
    // Find index
    const findIdx = selectedCheckboxes.indexOf(value);

    // Index > -1 means that the item exists and that the checkbox is checked
    // and in that case we want to remove it from the array and uncheck it
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(value);
    }

    setEditedProduct({ ...editedProduct, tag: selectedCheckboxes });
  };

  const onChangeRadio = (value) => {
    let selectedCheckboxes = product.tag;

    selectedCheckboxes = [value];

    setEditedProduct({ ...product, tag: selectedCheckboxes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (token) {
      setLoading(true);
      axios({
        method: "post",
        url: `${$SERVER}/api/products/updateProduct`,
        data: {
          update: editedProduct,
          productId: _id,
          productCategory: category,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => {
          setProducts(response.data.data);
          setAppMessage({
            success: response.data.status === 200 ? true : false,
            message: response.data.message,
          });
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
          setOpenEditProductModal(false);
        });
    } else {
      setOpenEditProductModal(false);
      setOpenLoginModal(true);
    }
  };
  return (
    <Modal
      onClose={() => setOpenEditProductModal(false)}
      onOpen={() => setOpenEditProductModal(true)}
      open={openEditProductModal}
      size="small"
    >
      <Header icon>
        <Icon name="edit" />
        Éditer {title}
      </Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit} id="addProduct-form">
          <Form.Field>
            <label>Nom du Produit</label>
            <input
              value={editedProduct.title}
              name="title"
              type="text"
              onChange={(e) => changeProduct(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea
              value={editedProduct.description}
              name="description"
              rows="5"
              cols="33"
              onChange={(e) => changeProduct(e)}
            />
          </Form.Field>
          {product.category !== "boissons" && (
            <Form.Field>
              <label>Allergènes</label>
              {allergenes.map((allergene) => (
                <Checkbox
                  style={{ padding: 5 }}
                  key={allergene.id}
                  label={allergene.value}
                  name={allergene.name}
                  value={allergene.value}
                  onChange={(e) => onChange(allergene.value, e)}
                  selected={editedProduct.tag?.includes(allergene.value)}
                  checked={editedProduct.tag?.includes(allergene.value)}
                />
              ))}
            </Form.Field>
          )}
          {product.category === "boissons" && (
            <Form.Field>
              <label>Type de Boisson</label>
              {drinkCat[0].innerMenu.map(
                (cat) =>
                  cat.categoryName !== "" && (
                    <Radio
                      style={{ padding: 5 }}
                      key={cat.categoryName}
                      label={cat.title}
                      name={cat.categoryName}
                      value={cat.categoryName}
                      onChange={() => onChangeRadio(cat.categoryName)}
                      checked={editedProduct.tag?.includes(cat.categoryName)}
                    />
                  )
              )}
            </Form.Field>
          )}
          <Form.Field>
            <label>Prix</label>
            <input
              min={1}
              step={0.1}
              value={editedProduct.price}
              name="price"
              type="number"
              onChange={(e) => changeProduct(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Catégorie</label>
            <select
              value={editedProduct.category}
              name="category"
              onChange={(e) => changeProduct(e)}
              placeholder="Veuiller Selectionner une catégorie"
            >
              <option value="">Veuillez selectioner une categorie</option>
              {categories.map((categorie) => (
                <option key={categorie.slug} value={categorie.slug}>
                  {categorie.name}
                </option>
              ))}
            </select>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="purple" type="submit" form="addProduct-form" inverted>
          <Icon name="edit" /> Editer
        </Button>
        <Button
          loading={loading}
          color="red"
          type="submit"
          form="addProduct-form"
          inverted
          onClick={() => setOpenEditProductModal(false)}
        >
          <Icon name="remove" /> Annuler
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditProductModal;
