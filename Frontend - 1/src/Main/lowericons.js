import React from 'react'
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom'
const Lowericons = () => {
    return (
        
        
        <div className="Lowericons">
        
        <div>
        
        <div class="row">
        <div class="col-sm-12" className="hide">    
         <Link to='./Leaderboard'>
        <img src={require('../icons/win gold.png')} className="iconSize rightIcons"/>
        </Link>
                  </div>
        </div>
        <div class="row">
        <div class="col-sm-12" className="hide">  
            <a href="https://www.facebook.com/Manan.Ymcaust/">
        <img src={require('../icons/facebook gold.png')} className="iconSize rightIcons icon2" />
                  </a>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-12" className="hide">    
             <Link to='./Rules'>     
        <img src={require('../icons/rules.png')} className="iconSize rightIcons icon3" />
            </Link>
                  </div>
        </div>
        
        </div>

        



        </div>






        
        
                   );
}

export default Lowericons;
        