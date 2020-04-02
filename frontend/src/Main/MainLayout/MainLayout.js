import React from "react";
import ReactDom from "react-dom";
import Uppericons from "./uppericons";
import Lowericons from "./lowericons";
import MobileUpper from "./MobileView/UpperMobile";
import LowerMobile from "./MobileView/LowerMobile";
import { Link } from "react-router-dom";
import Rules from "../QuestionPage/Rules";
import $ from "jquery";
import User from "./user";
import Usertext from "./usertext";
class MainLayout extends React.Component {
  render() {
    return (
      <div className="main-layout" className="mobilecolumn">
        <br />
        <div>
          <MobileUpper />
        </div>

        <div class="row row-space">
          <div class="col-md-2">
            <Uppericons />
          </div>
          <div class="col-md-8">
            <div className="col3 userimageis">
              <User />
            </div>
            <div className="col3 usertextis hide">
              <Usertext />
            </div>
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
            <Link to="/winner">
              <img
                src={require("../icons/play gold.png")}
                className="startButton"
              />
            </Link>
          </div>
          <div class="col-md-2 ">
            <Lowericons />
          </div>
          <div class="col-md-2">
            <LowerMobile />
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
