import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from './uppericons'
import Lowericons from './lowericons'
import Mobile from './Mobile'
const MainLayout = () => {
    return (


        <div className = "main-layout" >
        <br />
        <div class = "row" >
        <div class = "col-md-2" >
        <Uppericons / >
        </div>
        <div class="col-md-8">
        
        <img src = {
            require('../icons/xunbao text.png')}className = "xunbaoIcon" / >
        
        <img src = {
            require('../icons/underline.png')}className = "underlineIcon" / >
        
         <img src = {
            require('../icons/on_li_tr_hnt.png')}className = "xunbaoText" / >
        <a href="https://www.w3schools.com">
         <img src = {
            require('../icons/play gold.png')}className = "startButton" / >
        </a>
             
             
             
             
        
        </div>
        < div class = "col-md-2" >
        <Lowericons />
        </div>
        <div>
             <Mobile />
        </div>
        

        </div>
</div>

    );
}

export default MainLayout;