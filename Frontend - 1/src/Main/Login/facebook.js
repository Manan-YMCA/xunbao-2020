import React from "react";
import FacebookLogin from "react-facebook-login";
import $ from "jquery";

export default ({ setLogin }) => {
  const responseFacebook = response => {
    localStorage.setItem("fullname", response.name);
    localStorage.setItem("userimg", response.picture.data.url);
    localStorage.setItem("facebookid", response.userID);
    localStorage.setItem("fbtoken", response.accessToken);
    localStorage.setItem("emil", response.email);
    $.ajax({
      url: "https://mananxunbao.herokuapp.com/api/userprofile/",
      type: "POST",
      crossDomain: true,
      dataType: "json",

      data: JSON.stringify({
        name: localStorage.getItem("fullname"),
        pic: localStorage.getItem("userimg"),
        fid: localStorage.getItem("facebookid")
      }),
      contentType: "application/json",
      success: function(data) {
        $.ajax({
          url: "https://mananxunbao.herokuapp.com/api/jwt/",
          type: "POST",
          crossDomain: true,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          cache: false,
          data: JSON.stringify({
            input: localStorage.getItem("fbtoken")
          }),
          contentType: "application/json",
          success: function(data) {
            var tokenis = data.access.access;
            localStorage.setItem("token", tokenis);
            setLogin(true);
          },
          error: function() {
            console.log("error");
          }
        });
      },
      error: () => {
        $.ajax({
          url: "https://mananxunbao.herokuapp.com/api/jwt/",
          type: "POST",
          crossDomain: true,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          cache: false,
          data: JSON.stringify({
            input: localStorage.getItem("fbtoken")
          }),
          contentType: "application/json",
          success: function(data) {
            var tokenis = data.access.access;
            localStorage.setItem("token", tokenis);
            setLogin(true);
          },
          error: function() {
            console.log("error");
          }
        });
      }
    });
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
