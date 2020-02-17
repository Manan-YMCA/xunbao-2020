import React from 'react'
import ReactDom from 'react-dom';

const Mobile = () => {
    return (
        <div className="Mobile">
        
        <div class="row">
        <div className="col4 firstimg">
         <img src={require('../icons/dev gold.png')} className="hideMobile" />
        
        </div>
        <div className="col4">
        <img src={require('../icons/call gold.png')} className="hideMobile" />
        
        </div>
        <div className="col4">
        <img src={require('../icons/shareingan.png')} className="hideMobile" />
        
        </div>
        </div>
        
        
        <div class="row">
        <div className="col4 firstimg">
        <img src={require('../icons/win gold.png')} className="hideMobile"/>
        
        </div>
        <div className="col4">
        <img src={require('../icons/facebook gold.png')} className="hideMobile" />
        </div>
        <div className="col4">
        <img src={require('../icons/rules.png')} className="hideMobile" />
        </div>
        </div>
        </div>
        
                    );
}

export default Mobile;