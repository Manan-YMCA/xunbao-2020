import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from './uppericons'
import Lowericons from './lowericons'
import MobileUpper from './UpperMobile'
import LowerMobile from './LowerMobile'
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
        <li>For every wrong answer their is negative marking</li>
        <li>Every time someone befores you gets right answer the max points of that question lowers</li>
        <li>Every hint lowers the max points of that question to 30</li>
        <li>A question can have multiple answers with different weightage</li>
        <li>No two persons can have same points for same question</li>
        <li>Minimum point on a right answer is 30</li>
        <li>Maximum points for a right answer are 100</li>
        <li>You can get less than max points</li>
        </ol>

        <Link to='./QuestionPage'>
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