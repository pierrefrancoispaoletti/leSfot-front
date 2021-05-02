/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import { Divider, Header } from "semantic-ui-react";
import AdminColor from "../../components/Medium/AdminColor";
import AdminLinks from "../../components/Medium/AdminLinks";
import { $SERVER } from "../../_const/_const";

import "./admin.css";

const Admin = ({
  setAppMessage,
  facebookUrl,
  setFacebookUrl,
  instagramUrl,
  setInstagramUrl,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  titleColor,
  setTitleColor,
  textColor,
  setTextColor,
  backgroundColor,
  setBackgroundColor,
  productBackgroundColor,
  setProductBackgroundColor,
  colorConfig,
  setColorConfig,
}) => {
  useEffect(() => {
    const token = localStorage.getItem("token-le-Soft");
    let update = {
      _id: colorConfig._id,
      titleColor,
      textColor,
      backgroundColor,
      productBackgroundColor,
    };
    setColorConfig({ ...update });
    axios({
      method: "post",
      url: `${$SERVER}/api/config/update`,
      data: { update },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }, [titleColor, textColor, backgroundColor, productBackgroundColor]);

  const handleSubmitInfos = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token-le-Soft");
    let update = {
      _id: colorConfig._id,
      facebookUrl,
      instagramUrl,
      emailAddress: email,
      phoneNumber,
    };
    setColorConfig({ ...colorConfig, ...update });
    axios({
      method: "post",
      url: `${$SERVER}/api/config/update`,
      data: { update },
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      if (response && response.data.status === 200) {
        setAppMessage({
          success: true,
          message: "Informations modifiées avec succés",
        });
      }
    });
  };
  return (
    <>
      <Header
        className="admin__header"
        style={{ color: titleColor, fontSize: "3em" }}
        as="h2"
      >
        Administration
      </Header>
      <Divider />
      <AdminColor
        titleColor={titleColor}
        setTitleColor={setTitleColor}
        textColor={textColor}
        setTextColor={setTextColor}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        productBackgroundColor={productBackgroundColor}
        setProductBackgroundColor={setProductBackgroundColor}
      />
      <Divider />
      <AdminLinks
        handleSubmitInfos={handleSubmitInfos}
        facebookUrl={facebookUrl}
        setFacebookUrl={setFacebookUrl}
        instagramUrl={instagramUrl}
        setInstagramUrl={setInstagramUrl}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
    </>
  );
};

export default Admin;
