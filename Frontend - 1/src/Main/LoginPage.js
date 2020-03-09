import React from 'react'
import ReactDom from 'react-dom'

import {Link} from 'react-router-dom'
import Facebook from './facebook'


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
         
         <Facebook />  
      </div>
        </div>
</div>

    );
}

export default LoginPage;