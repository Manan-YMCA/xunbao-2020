import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from './uppericons'
import Lowericons from './lowericons'
import MobileUpper from './UpperMobile'
import LowerMobile from './LowerMobile'
import {Link} from 'react-router-dom'
import Rules from './Rules'






const LoginPage = () => {
    return (


        <div className = "main-layout" >
        <br />
        <div class="row">
        
        <div className="logincolumn">
        <img src = {
            require('../icons/xunbao text.png')}className = "xunbaoIcon" / >
        
        <img src = {
            require('../icons/underline.png')}className = "underlineIcon" / >
        
         <img src = {
            require('../icons/on_li_tr_hnt.png')}className = "xunbaoText" / >
        <Link to='./MainLayout'>        
        <img src = {
            require('../icons/facebook_login.png')}className = "startButton" / >
      </Link>
           
      </div>
        </div>
</div>

    );
}

export default LoginPage;