import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";
import { Link } from "react-router-dom";
import Facebook from "./facebook";

class LoginPage extends React.Component {
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

            <Facebook setLogin={this.props.setLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
