import React from 'react'
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom'
const Uppericons = () => {
    return (
        
        
        <div className="uppericons">
        
        <div>
        <div class="row">
        <div class="col-sm-12" className="hide">
        <Link to='../Developers/Developers'>
        <img src={require('../icons/dev gold.png')} className="iconSize leftIcons" />
        </Link>
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
        <Link to='../MainLayout/MainLayout'>
        <img src={require('../icons/shareingan.png')} className="iconSize leftIcons icon3" />
        </Link>    
        </div>
        </div>
        
        </div>
        
        </div>
        
        
           );
}

export default Uppericons;