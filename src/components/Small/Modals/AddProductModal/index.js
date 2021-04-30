/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Icon,
  Modal,
  Radio,
} from "semantic-ui-react";
import allergenes from "../../../../datas/allergénes";
import categories from "../../../../datas/datas";
import { $SERVER } from "../../../../_const/_const";

const AddProductModal = ({
  slug,
  setOpenAddProductModal,
  openAddProductModal,
  setOpenLoginModal,
  setProducts,
  setAppMessage,
  drinkCat,
}) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    tag: [],
  });

  const [loading, setLoading] = useState(false);
  const inputFile = useRef(null);

  useEffect(() => {
    setProduct({ ...product, category: slug });
    setProduct({ ...product, tag: [] });
  }, [slug]);

  const changeProduct = (e) => {
    let updatedValue = {};
    updatedValue[e.target.name] = e.target.value;
    setProduct({ ...product, ...updatedValue });
  };

  const setImage = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const token = localStorage.getItem("token-le-Soft");

  const onChange = (value) => {
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

    setProduct({ ...product, tag: selectedCheckboxes });
  };
  const onChangeRadio = (value) => {
    let selectedCheckboxes = product.tag;

    selectedCheckboxes = [value];


    setProduct({ ...product, tag: selectedCheckboxes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description || "");
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("tag", product.tag);
    formData.append("image", product.image);
    if (token) {
      setLoading(true);
      axios({
        method: "post",
        url: `${$SERVER}/api/products/createProduct`,
        data: formData,
        headers: {
          "content-type": "multipart/form-data",
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
        .then(() => {
          setProduct({
            title: "",
            description: "",
            price: "",
            category: "",
            image: "",
            tag: [],
          });
          setOpenAddProductModal(false);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    } else {
      setOpenLoginModal(true);
    }
  };

  return (
    <Modal
      onClose={() => setOpenAddProductModal(false)}
      onOpen={() => setOpenAddProductModal(true)}
      open={openAddProductModal}
      size="small"
    >
      <Header icon>
        <Icon name="add" />
        Ajouter un Produit
      </Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit} id="addProduct-form">
          <Form.Field>
            <label>Nom du Produit</label>
            <input
              value={product.title}
              name="title"
              type="text"
              onChange={(e) => changeProduct(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea
              value={product.description}
              name="description"
              rows="5"
              cols="33"
              onChange={(e) => changeProduct(e)}
            />
          </Form.Field>
          {slug !== "boissons" && (
            <Form.Field>
              <label>Allergènes</label>
              {allergenes.map((allergene) => (
                <Checkbox
                  style={{ padding: 5 }}
                  key={allergene.id}
                  label={allergene.value}
                  name={allergene.name}
                  value={allergene.value}
                  onChange={() => onChange(allergene.id, allergene.value)}
                  selected={product.tag?.includes(allergene.value)}
                />
              ))}
            </Form.Field>
          )}
          {slug === "boissons" && (
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
                      checked={product.tag?.includes(cat.categoryName)}
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
              value={product.price}
              name="price"
              type="number"
              onChange={(e) => changeProduct(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Catégorie</label>
            <select
              value={product.category}
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
          <Form.Field>
            <input
              ref={inputFile}
              accept="image/*"
              id="addImage"
              files={product.image}
              type="file"
              hidden
              onChange={(e) => setImage(e)}
            />
            <Button
              type="button"
              onClick={() => inputFile.current.click()}
              color="orange"
              inverted
            >
              Ajouter une image
            </Button>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" type="submit" form="addProduct-form" inverted>
          <Icon name="add" /> Ajouter
        </Button>
        <Button
          loading={loading}
          color="red"
          type="submit"
          form="addProduct-form"
          inverted
          onClick={() => setOpenAddProductModal(false)}
        >
          <Icon name="remove" /> Annuler
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddProductModal;
