import React from "react";
import FacebookLogin from "react-facebook-login";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
    
  
    
  const responseFacebook = response => {
    history.push("/home");
    localStorage.setItem("fullname", response.name);
    localStorage.setItem("userimg", response.picture.data.url);
    localStorage.setItem("facebookid", response.userID);
    localStorage.setItem("fbtoken", response.accessToken);
    localStorage.setItem("emil", response.email);  
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
