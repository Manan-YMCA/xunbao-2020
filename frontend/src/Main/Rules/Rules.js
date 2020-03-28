import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from '../MainLayout/uppericons'
import Lowericons from '../MainLayout/lowericons'
import MobileUpper from '../MainLayout/MobileView/UpperMobile'
import LowerMobile from '../MainLayout/MobileView/LowerMobile'
const Rules = () => {
    return (

        <div className = "main-layout" >
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
        
        
        <ol className="RulesList">
        <li>Every time someone befores you gets right answer the max points of that question lowers</li>
        <li>Using hint will cause one to lose points</li>
        <li>A question can have multiple answers</li>
        <li>No two persons can have same points for same question</li>
        <li>Minimum point on a right answer is 20</li>
        <li>Maximum points for a right answer are 100</li>
        <li>You can get less than max points</li>
        
        </ol>
        
        
        
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

export default Rules;