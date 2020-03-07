import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from './uppericons'
import Lowericons from './lowericons'
import LowerMobile from './LowerMobile'
import MobileUpper from './UpperMobile'
import $ from 'jquery';

class App extends React.Component {
  componentDidMount() {
   
      
      console.log("aayush");
      
      
      
      
      
      
      
  }

}




    const Leaderboard = () => {
    return (

        <div className="Developers">
        
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
        <h1 className="DevelopersText">  Leadeboard  </h1>
        <hr className="Developershr" />
        <br/>
        <div class="row">
        <div className="col5" id="details">
       <h1 className="LeaderboardHeading"> Name </h1>
        </div>
        <div className="col5">
       <h1 className="LeaderboardHeading"> Level </h1>
        </div>
        <div className="col5">
       <h1 className="LeaderboardHeading"> Score </h1>
        </div>
        </div>
        

        <div id="LeaderboardStats">
      


        </div>
        
        </div>
        
         </div>
        < div class = "col-md-2" >
        <Lowericons />
        </div>
        <div>
             <LowerMobile />
        </div>
        

        </div>
</div>
        
        
     
        
        
        
            );
}

    console.log("aayush");
export default Leaderboard;