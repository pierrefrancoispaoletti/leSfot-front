import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Form, Header, Icon, Modal } from "semantic-ui-react";

const UpdateImageModal = ({
  openUpdateImageModal,
  setOpenUpdateImageModal,
  product,
  setProducts,
  setOpenLoginModal,
  setAppMessage,
}) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const updateFile = useRef(null);

  const { _id, category, title } = product;

  const handleSubmitImage = (e) => {
    e.preventDefault();
    let imageFormData = new FormData();
    imageFormData.append("image", image);
    const token = localStorage.getItem("token-le-Soft");
    if (token) {
      setLoading(true);
      axios({
        method: "post",
        url: `/api/products/updateProductImage/${_id}/${category}`,
        data: imageFormData,
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => {
          if (response && response.data.status === 200) {
            setProducts(response.data.data);
            setAppMessage(response.data.message);
          } else {
            setAppMessage(response.data.message);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setOpenUpdateImageModal(false);
      setOpenLoginModal(true);
    }
  };
  return (
    <Modal
      open={openUpdateImageModal}
      onClose={() => setOpenUpdateImageModal(false)}
    >
      <Header icon>
        <Icon name="image" />
        Editer l'image
      </Header>
      <Modal.Content>
        <Form onSubmit={handleSubmitImage} id="editImage-form">
          <Form.Field>
            <input
              ref={updateFile}
              accept="image/*"
              id="addImage"
              files={image}
              type="file"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Button
              type="button"
              onClick={() => updateFile.current.click()}
              color="orange"
              inverted
            >
              Modifier l'image
            </Button>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        {image && (
          <Button color="green" type="submit" form="editImage-form" inverted>
            <Icon name="add" /> Envoyer l'image pour {title}
          </Button>
        )}
        <Button
          loading={loading}
          color="red"
          type="submit"
          form="editImage-form"
          inverted
          onClick={() => setOpenUpdateImageModal(false)}
        >
          <Icon name="remove" /> Annuler
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UpdateImageModal;
