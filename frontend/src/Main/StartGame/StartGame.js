import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from '../MainLayout/uppericons'
import Lowericons from '../MainLayout/lowericons'
import MobileUpper from '../MainLayout/MobileView/UpperMobile'
import LowerMobile from '../MainLayout/MobileView/LowerMobile'
import {Link} from 'react-router-dom'
const StartGame = () => {
    return (

        <div className = "StartGame" className="mobilecolumn">>
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
        
        
        <ol className="RulesListStartGame" >
       <li>Everytime, someone before you gets the right a answer, the maximum point of that question lowers. </li>
              <li>Usage of hints will cost you some points.</li>
              <li>A question can have multiple answers.</li>
              <li>Minimum marks for a question are 20</li>
              <li>Maximum marks for a question are 100</li>
              <li>Their is no negative marking</li>
        </ol>

        <Link to='./question'>
        <img src={require('../icons/START THE GAME.png')} className="StartTheGame"  />
        </Link>  
        
        </div>
         
        </div>
        < div class = "col-md-2" >
        <Lowericons />
        </div>
        < div class = "col-md-2" >
        <LowerMobile />
        </div>
        

        </div>
</div>
        
        
            );
}

export default StartGame;