import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from './uppericons'
import Lowericons from './lowericons'
import MobileUpper from './UpperMobile'
import LowerMobile from './LowerMobile'
import {Link} from 'react-router-dom'
import Rules from './Rules'
import $ from 'jquery';
import User from './user'

const MainLayout = () => {
    return (


        <div className = "main-layout" className="mobilecolumn">
        <br />
        <div>
           < MobileUpper />
        </div>
        
        <div class = "row row-space" >
        <div class = "col-md-2" >
        <Uppericons / >
        </div>
        <div class="col-md-8" >
        <User />
        <img src = {
            require('../icons/xunbao text.png')}className = "xunbaoIcon" / >
        
        <img src = {
            require('../icons/underline.png')}className = "underlineIcon" / >
        
         <img src = {
            require('../icons/on_li_tr_hnt.png')}className = "xunbaoText" / >
        <Link to='./StartGame'>        
        <img src = {
            require('../icons/play gold.png')}className = "startButton" / >
      </Link>
             
             
             
             
        
        </div>
        < div class = "col-md-2" >
        <Lowericons />
        </div>
        < div class = "col-md-2" >
       
             <LowerMobile />

        </div>

        </div>
</div>

    );
}

export default MainLayout;