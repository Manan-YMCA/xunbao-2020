import React from 'react'
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom'
const LowerMobile = () => {
    return (
        <div className="LowerMobile">
        
        <div class="row">
        <div className="col3 hideMobile" >
        <Link to='./Rules'>
        <img src={require('./mobicons/rules.png')} className="mobileiconscsslower" />
        </Link>
        </div>

        <div className="col3 hideMobile">
                    <Link to=''>
        <img src={require('./mobicons/home_button.png')} className="mobileiconscsslower" />
        </Link>
        </div>
        
        </div>
        </div>
        
                    );
}

export default LowerMobile;