import React from 'react'
import ReactDom from 'react-dom';

const MobileUpper = () => {
    return (
        <div className="MobileUpper">
        
        <div class="row">
        <div className="col4 hideMobile" >
        <img src={require('../icons/dev gold.png')} className="mobileiconscssupper" />
        
        </div>
        <div className="col4 hideMobile">
        <img src={require('../icons/call gold.png')}  className="mobileiconscssupper" />
        
        </div>
        
        <div className="col4 hideMobile">
        <img src={require('../icons/win gold.png')} className="mobileiconscssupper" />
        
        </div>
        <div className="col4 hideMobile">
        <img src={require('../icons/facebook gold.png')} className="mobileiconscssupper" />
        </div>
       
        </div>
        </div>
        
                    );
}

export default MobileUpper;