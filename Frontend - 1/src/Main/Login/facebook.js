import React from "react";
import FacebookLogin from "react-facebook-login";

export default ({ setLogin }) => {
  const responseFacebook = response => {
    localStorage.setItem("fullname", response.name);
    localStorage.setItem("userimg", response.picture.data.url);
    localStorage.setItem("facebookid", response.userID);
    localStorage.setItem("fbtoken", response.accessToken);
    localStorage.setItem("emil", response.email);
    setLogin(true);
  };
  return (
    <div className="my-facebook-button-class">
      <FacebookLogin
        appId="206217843919244"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        disableMobileRedirect={true}
      />{" "}
    </div>
  );
};
