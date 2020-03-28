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
       <li>Every time someone befores you gets right answer the max points of that question lowers</li>
        <li>Using hint will cause one to lose points</li>
        <li>A question can have multiple answers</li>
        <li>No two persons can have same points for same question</li>
        <li>Minimum point on a right answer is 20</li>
        <li>Maximum points for a right answer are 100</li>
        <li>You can get less than max points</li>
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