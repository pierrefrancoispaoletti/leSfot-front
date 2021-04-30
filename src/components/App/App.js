import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Message, Transition } from "semantic-ui-react";
import Admin from "../../pages/Admin";
import Categories from "../../pages/Categories";
import First from "../../pages/First";
import { $SERVER } from "../../_const/_const";
import CategoriesMenu from "../Medium/CategoriesMenu";
import TopAppBar from "../Medium/TopAppBar";
import LoaderCSS from "../Small/Loader";
import AddProductModal from "../Small/Modals/AddProductModal";
import Auth from "../Small/Modals/Auth";
import EditProductModal from "../Small/Modals/EditProductModal";
import ImageModal from "../Small/Modals/ImageModal";
import UpdateImageModal from "../Small/Modals/UpdateImageModal";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [categorie, setCategorie] = useState({});
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [openEditProductModal, setOpenEditProductModal] = useState(false);
  const [openUpdateImageModal, setOpenUpdateImageModal] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [user, setUser] = useState("");
  const [appMessage, setAppMessage] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [titleColor, setTitleColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [productBackgroundColor, setProductBackgroundColor] = useState("");
  const [colorConfig, setColorConfig] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppMessage({});
    }, 5000);
  }, [appMessage]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${$SERVER}/api/config`)
      .then((response) => {
        setColorConfig(response.data.config);
      })

      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setTitleColor(colorConfig.titleColor);
    setTextColor(colorConfig.textColor);
    setBackgroundColor(colorConfig.backgroundColor);
    setProductBackgroundColor(colorConfig.productBackgroundColor);
  }, [colorConfig]);
  return (
    <div style={{ height: "100%", background: backgroundColor }}>
      {loading && (
        <div className="loadercontainer">
          <LoaderCSS />
        </div>
      )}
      {!loading && (
        <>
          <Transition
            animation="jiggle"
            duration={500}
            visible={Object.keys(appMessage).length > 0}
          >
            <Message
              hidden={Object.keys(appMessage).length === 0}
              success={appMessage.success ? true : false}
              error={!appMessage.success ? true : false}
            >
              {appMessage.message}
            </Message>
          </Transition>
          <CategoriesMenu
            visible={visible}
            setVisible={setVisible}
            setCategorie={setCategorie}
          >
            <TopAppBar
              user={user}
              setVisible={setVisible}
              setOpenLoginModal={setOpenLoginModal}
            />
            <Auth
              openLoginModal={openLoginModal}
              setOpenLoginModal={setOpenLoginModal}
              setUser={setUser}
              setAppMessage={setAppMessage}
            />
            <Switch>
              <Route exact path="/">
                <First
                  user={user}
                  titleColor={titleColor}
                  textColor={textColor}
                  productBackgroundColor={productBackgroundColor}
                />
              </Route>
              <Route exact path="/le-soft/admin">
                {user === "isAdmin" ? (
                  <Admin
                    titleColor={titleColor}
                    setTitleColor={setTitleColor}
                    textColor={textColor}
                    setTextColor={setTextColor}
                    backgroundColor={backgroundColor}
                    setBackgroundColor={setBackgroundColor}
                    productBackgroundColor={productBackgroundColor}
                    setProductBackgroundColor={setProductBackgroundColor}
                    colorConfig={colorConfig}
                    setColorConfig={setColorConfig}
                  />
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
              <Route path="/:categorie">
                <AddProductModal
                  {...categorie}
                  openAddProductModal={openAddProductModal}
                  setOpenAddProductModal={setOpenAddProductModal}
                  setOpenLoginModal={setOpenLoginModal}
                  setAppMessage={setAppMessage}
                  setProducts={setProducts}
                />
                <EditProductModal
                  openEditProductModal={openEditProductModal}
                  setOpenEditProductModal={setOpenEditProductModal}
                  setOpenLoginModal={setOpenLoginModal}
                  setAppMessage={setAppMessage}
                  setProducts={setProducts}
                  product={selectedProduct}
                />
                <UpdateImageModal
                  openUpdateImageModal={openUpdateImageModal}
                  setOpenUpdateImageModal={setOpenUpdateImageModal}
                  product={selectedProduct}
                  setProducts={setProducts}
                  setOpenLoginModal={setOpenLoginModal}
                  setAppMessage={setAppMessage}
                />
                <ImageModal
                  setOpenImageModal={setOpenImageModal}
                  openImageModal={openImageModal}
                  product={selectedProduct}
                />
                <Categories
                  {...categorie}
                  products={products}
                  user={user}
                  setOpenAddProductModal={setOpenAddProductModal}
                  setOpenEditProductModal={setOpenEditProductModal}
                  setOpenUpdateImageModal={setOpenUpdateImageModal}
                  setOpenImageModal={setOpenImageModal}
                  setOpenLoginModal={setOpenLoginModal}
                  setProducts={setProducts}
                  setSelectedProduct={setSelectedProduct}
                  titleColor={titleColor}
                  textColor={textColor}
                  productBackgroundColor={productBackgroundColor}
                />
              </Route>
            </Switch>
          </CategoriesMenu>
        </>
      )}
    </div>
  );
};

export default App;
