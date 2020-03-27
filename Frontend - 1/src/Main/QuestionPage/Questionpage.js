import React from "react";
import ReactDom from "react-dom";
import Uppericons from "../MainLayout/uppericons";
import Lowericons from "../MainLayout/lowericons";
import MobileUpper from "../MainLayout/MobileView/UpperMobile";
import LowerMobile from "../MainLayout/MobileView/LowerMobile";
import Rules from "./Rules";
import User from "../MainLayout/user";
import $ from "jquery";
import Modal from "./modal";
import Statusmodel from "./Statusmodel";


class Questionpage extends React.Component {
  componentDidMount() {
    var quesno;
    //--------Calling of Question-------------
    if(quesno>30){
       window.location="../Winners/Winners" ;
    } 
      else{
    $.ajax({
    
      url: "https://mananxunbao.herokuapp.com/api/question/?fid="+localStorage.getItem("facebookid"),    
      type: "GET",
      crossDomain: true,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      cache: false,    
      headers: {
          
       "Authorization" :"Bearer " + localStorage.getItem("token")
          
      }
    }).done(function(data) {
      var obj = JSON.parse(JSON.stringify(data));
      

      $("#Question").append(obj[0].ques);
      quesno = obj[0].no;
      localStorage.setItem("hintis",obj[0].hint);
        
    });

      
    //---------Submit and Check------------

    $("#submitbuttoncall").on("click", function() {
      document.getElementById("Question").innerHTML = "";
      document.getElementById("statustext").innerHTML = "";
      $.ajax({
        url: "https://mananxunbao.herokuapp.com/api/submission/",
        type: "POST",
        crossDomain: true,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        headers: {
            "Authorization" :"Bearer " + localStorage.getItem("token")
        },
        data: JSON.stringify({
          fid: localStorage.getItem("facebookid"),
          answer: $("#AnswerField").val(),
          ques: localStorage.getItem("quesurl")
        }),
        complete: function(data) {
          

          var statusis = data.responseJSON;
          
          //------------Right Answer------------------

          if (statusis&&statusis.response!=="Wrong") { 
            $("#statustext").append("Well Done! Correct");
              
            
          } else {
            //------------Wrong Answer Abuses------------------
              
              
              
             var abusesarr = ["Are you always this stupid, or are you making a special effort today?", "Somewhere out there is a tree working hard to replace the oxygen you wasted, now go apologize to it.", "Stupidity is not a crime, if it is, you’ll end up in jail.","Error 404 brain not found aaya Tumse na ho paayega"
             ,"You are a sad strange little man, and you have my pity.","After all this time, is that what you came up with? ",
            "You must have been born on a highway because that's where most accidents happen.","Am I a joke to you?","Yeh kya bawasir bana diye ","Only two things are infinite-- the universe and your stupidity, and I'm not so sure about the former."];
    
            var num = Math.floor(Math.random() * 10);
    
            var yourabuse =`
            <p class="wronganswertext">Wrong Answer!<br>`+abusesarr[num]+`</p>`  ; 
            
   
            $("#statustext").append(yourabuse);
            
          }
        }
      });
    });
  }}
    
  //--------------RENDER---------------------------------------
  render() {
    return (
      <div className="main-layout" className="mobilecolumn">
        <br />
        <div>
          <MobileUpper />
        </div>

        <div class="row row-space">
          <div class="col-md-2">
            <Uppericons />
          </div>
          <div class="col-md-8" className="QuestionPageContainer">
            <div>
              <div className="questionpageimg">
                <User />
              </div>
              <h1 className="QuestionHeading"> Questions </h1>
              <hr className="Questionhr" />
              <br />

              <div id="questiontext">
                <h1 className="QuestionText" id="Question">
                  {" "}
                </h1>
                <div className="col95">
                  <input
                    type="text"
                    id="AnswerField"
                    name="Answerield"
                    placeholder="Your Answer"
                  />
                </div>
                <div className="col555">
                  <Modal />
                </div>
              </div>

              <Statusmodel />
            </div>
          </div>
          <div class="col-md-2">
            <Lowericons />
          </div>
          <div class="col-md-2">
            <LowerMobile />
          </div>
        </div>
      </div>
    );
  }
}

export default Questionpage;
