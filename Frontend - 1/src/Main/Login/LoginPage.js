import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";
import { Link } from "react-router-dom";
import Facebook from "./facebook";

class LoginPage extends React.Component {
  componentDidMount() {
    //--------Posting Fb Details-----------------
    if (localStorage.getItem("token")) return;
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
        console.log("success posting");
      }
    });
  }

  render() {
    return (
      <div className="login page" className="mobilecolumn">
        <br />
        <div class="row">
          <div className="logincolumn">
            <img
              src={require("../icons/xunbao text.png")}
              className="xunbaoIcon"
            />

            <img
              src={require("../icons/underline.png")}
              className="underlineIcon"
            />

            <img
              src={require("../icons/on_li_tr_hnt.png")}
              className="xunbaoText"
            />

            <Facebook />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
