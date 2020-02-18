import React from 'react'
import ReactDom from 'react-dom';

const Uppericons = () => {
    return (
        
        
        <div className="uppericons">
        
        <div>
        <div class="row">
        <div class="col-sm-12" className="hide">
        <a href="javascript:void(0);" onClick={() => window.location.href = "./Developers"}>
        <img src={require('../icons/dev gold.png')} className="iconSize leftIcons" />
        </a>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-12" className="hide">
        <a href="https://www.instagram.com/manantechnosurge/">
        <img src={require('../icons/call gold.png')} className="iconSize leftIcons icon2" />
        </a>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-12" className="hide">
        <a href="https://www.w3schools.com">
        <img src={require('../icons/shareingan.png')} className="iconSize leftIcons icon3" />
        </a>    
        </div>
        </div>
        
        </div>
        
        </div>
        
        
           );
}

export default Uppericons;