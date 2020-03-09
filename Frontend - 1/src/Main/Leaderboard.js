import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from './uppericons'
import Lowericons from './lowericons'
import LowerMobile from './LowerMobile'
import MobileUpper from './UpperMobile'
import $ from 'jquery';
import User from './user'


class Leaderboard extends React.Component {
  componentDidMount() {
   
     
           
      
       console.log("aayush");
       $.ajax({

            type: "GET",
            crossDomain: true,
            dataType: 'jason',
            url: "http://mananxunbao.herokuapp.com/api/userprofile/?format=json",
           
          }).done(function (data) {

            
            //----------------details----------------------

            var obj = JSON.parse(JSON.stringify(data));
            console.log(obj);

            var details = "";
            for (var i = 0; i < 10; i++) {

              details +=
                `<div class="row">
        <div class="col5">     

        <h1 class="LeaderboardText" >`+obj[i].user[i]+` </h1>
        </div>
        <div class="col5">
        <h1 class="LeaderboardText"> ` + obj[i].level + `</h1>
        </div>
        <div class="col5">
        <h1 class="LeaderboardText" >` + obj[i].score + `</h1>
        </div>
        </div>`;
            }

            $("#LeaderboardStats").append(details);


          })
        }





    render() {
    return (

        <div className="Developers" className="mobilecolumn">>
        
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
        
        
        <div id="LeaderboardStats" >
      
       
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
}}

    
export default Leaderboard;