import React from 'react'
import ReactDom from 'react-dom';

const LowerMobile = () => {
    return (
        <div className="LowerMobile">
        
        <div class="row">
        <div className="col3  hideMobile col2" >
        <img src={require('../icons/rules.png')}  />
        
        </div>

        <div className="col3 hideMobile col1">
        <img src={require('../icons/shareingan.png')}  />
        
        </div>
        
        </div>
        </div>
        
                    );
}

export default LowerMobile;