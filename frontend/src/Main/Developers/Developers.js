import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from '../MainLayout/uppericons'
import Lowericons from '../MainLayout/lowericons'
import LowerMobile from '../MainLayout/MobileView/LowerMobile'
import MobileUpper from '../MainLayout/MobileView/UpperMobile'
const Developers = () => {
    return (

        <div className="Developers" className="mobilecolumn">>
        
        <br />
        <div>
           < MobileUpper />
        </div>
        <div class = "row" >
        <div class = "col-md-2" >
        <Uppericons / >
        </div>
        <div class="col-md-8">
        <div  className="RulesContainer">
        <h1 className="DevelopersText">  Developers  </h1>
        <hr className="Developershr" />
        <div class="container-fluid row">
        <div class="col-sm-4">
        <img src={require('../icons/aayush.jpeg')} className="DevelopersImage"/>
        <p class="DevelopersImgText">Aayush</p>
        <p class="DevelopersDesignation">FrontEnd Developer</p>
        </div>
        <div class="col-sm-4">
        <img src={require('../icons/sanyam.jpg')} className="DevelopersImage"/>
                  <p class="DevelopersImgText">Sanyam</p>
                  <p class="DevelopersDesignation">BackEnd Developer</p>
        </div>
                  <div class="col-sm-4">
        <img src={require('../icons/arun.jpeg')} className="DevelopersImage"/>
                  <p class="DevelopersImgText">Arun</p>
                  <p class="DevelopersDesignation">Designer</p>
        </div>
        </div>
       
        
        
        </div>
        </div>
        < div class = "col-md-2" >
        <Lowericons />
        </div>
        <div>
             <LowerMobile />
        </div>
        

        </div>
        </div>
        
        
     
        
        
        
            );
}

export default Developers;