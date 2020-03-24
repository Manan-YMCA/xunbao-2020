import React from 'react'
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom'
const MobileUpper = () => {
    return (
        <div className="MobileUpper">
        
        <div class="row">
        <div className="col4 hideMobile" >
        <Link to='.../Developers/Developers'>
        <img src={require('./mobicons/dev gold.png')} className="mobileiconscssupper" />
        </Link>
        </div>
        <div className="col4 hideMobile">
        <a href="https://www.instagram.com/manantechnosurge/">
        <img src={require('./mobicons/call gold.png')}  className="mobileiconscssupper" />
        </a>
        </div>
        
        <div className="col4 hideMobile">
                  <Link to='.../Leaderboard/Leaderboard'>
        <img src={require('./mobicons/win gold.png')} className="mobileiconscssupper" />
        </Link>
        </div>
        <div className="col4 hideMobile">
        <a href="https://www.facebook.com/Manan.Ymcaust/">    
        <img src={require('./mobicons/facebook gold.png')} className="mobileiconscssupper" />
                  </a>
        </div>
       
        </div>
        </div>
        
                    );
}

export default MobileUpper;