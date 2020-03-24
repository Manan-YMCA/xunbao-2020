import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from '../MainLayout/uppericons'
import Lowericons from '../MainLayout/lowericons'
import LowerMobile from '../MainLayout/MobileView/LowerMobile'
import MobileUpper from '../MainLayout/MobileView/UpperMobile'
import $ from 'jquery';
import User from '../MainLayout/user'


class Leaderboard extends React.Component {
  componentDidMount() {
   
      
      
       $.ajax({

            type: "GET",
            crossDomain: true,
            dataType: 'json',
            url: "https://mananxunbao.herokuapp.com/api/userprofile/",
            headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            }
            
           
          }).done(function (data) {

            
            var obj = JSON.parse(JSON.stringify(data));
            console.log(obj);
            
           
            obj = JSON.parse(JSON.stringify(data));
            console.log(obj);

            var details = "";
            for (var i = 0; i < 10; i++) {

              details +=
                `

            <div class="row">
        <div class="col5">     

        <h1 class="LeaderboardText" >`+obj[i].name+` </h1>
        </div>
        <div class="col5">     
        <img class="Leaderboardpic" src="`+obj[i].pic+`" />

        </div>
        <div class="col5">
        <h1 class="LeaderboardText"> ` + obj[i].level + `</h1>
        </div>
        <div class="col5">
        <h1 class="LeaderboardText" >` + obj[i].score + `</h1>
        </div>
        </div>





      `;
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
        <div className="col5" id="details">
       <h1 className="LeaderboardHeading"> Pic </h1>
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