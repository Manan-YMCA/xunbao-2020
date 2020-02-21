import React from 'react'
import ReactDom from 'react-dom';

const LowerMobile = () => {
    return (
        <div className="LowerMobile">
        
        <div class="row">
        <div className="col3 hideMobile" >
        <img src={require('../icons/rules.png')} className="mobileiconscsslower" />
        
        </div>

        <div className="col3 hideMobile">
        <img src={require('../icons/shareingan.png')} className="mobileiconscsslower" />
        
        </div>
        
        </div>
        </div>
        
                    );
}

export default LowerMobile;