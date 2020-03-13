import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from './uppericons'
import Lowericons from './lowericons'
import MobileUpper from './UpperMobile'
import LowerMobile from './LowerMobile'
import Rules from './Rules'
import User from './user'
import $ from 'jquery';
import Modal from './modal'
import Statusmodel from './Statusmodel'

class Questionpage extends React.Component {
  componentDidMount() {
       var number =0;    
     //--------Calling of Question-------------
      $.ajax({

            type: "GET",
            crossDomain: true,
            dataType: 'json',
            url: "http://mananxunbao.herokuapp.com/api/question",
            headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            }
          }).done(function (data) {

            var obj = JSON.parse(JSON.stringify(data));
            console.log(obj);
          
            $("#Question").append(obj[number].ques);
            localStorage.setItem("quesurl",obj[number].url);
            localStorage.setItem("questionnumber",obj[number].no);

          })
      
      
      
      
      
      
      //---------Submit and Check------------
     

       
      $('#submitbuttoncall').on("click",function() {
      document.getElementById("Question").innerHTML = "";
      document.getElementById("statustext").innerHTML = "";
      $.ajax({
          url: 'https://mananxunbao.herokuapp.com/api/submission/',
          type: "POST",
          crossDomain : true,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          cache: false,
          headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            },
          data: JSON.stringify({
              fid : localStorage.getItem("facebookid"),
              answer : $("#AnswerField").val(),
              ques : localStorage.getItem("quesurl")
              
              
            }),
          complete: function (data) {
          console.log(data.response);
              
              
              var statusis = data.response;
              
              $("#statustext").append("Correct");
              
              //------------Right Answer------------------
              
              
              if(statusis == undefined){
                number++;  
               $.ajax({

            type: "GET",
            crossDomain: true,
            dataType: 'json',
            url: "http://mananxunbao.herokuapp.com/api/question",
            headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            }
          }).done(function (data) {
            
            var obj = JSON.parse(JSON.stringify(data));
            console.log(obj);
            
            $("#Question").append(obj[number].ques);
            localStorage.setItem("quesurl",obj[number].url);
            localStorage.setItem("questionnumber",obj[number].no);

          })
                 
            
              
              }
              else{
                  
                  
                  //------------Wrong Answer------------------
                  
                  number = number;
                  
                  
                  $.ajax({

            type: "GET",
            crossDomain: true,
            dataType: 'json',
            url: "http://mananxunbao.herokuapp.com/api/question",
            headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            }
          }).done(function (data) {

            var obj = JSON.parse(JSON.stringify(data));
            console.log(obj);
            
            $("#Question").append(obj[number].ques);
            localStorage.setItem("quesurl",obj[number].url);
            localStorage.setItem("questionnumber",obj[number].no);

          })
                 
            
                  
                  
                  
              }
    }
  });
    });
      
}
    //--------------RENDER--------------------------------------- 
    render() {
    return (
    
    <div className = "main-layout" className="mobilecolumn">
        <br />
        <div>
           < MobileUpper />
        </div>
        
        <div class = "row row-space" >
        <div class = "col-md-2" >
        <Uppericons / >
        </div>
        <div class="col-md-8" className="QuestionPageContainer">
       
        <div >
        <div className="questionpageimg">
        <User />
        </div>
            <h1 className="QuestionHeading">  Questions  </h1>
            <hr className="Questionhr" /> 
        <br/>
            
            <div id="questiontext">
           
           <h1 className="QuestionText" id="Question"> </h1>
       <div className="col95">
           <input type="text" id="AnswerField" name="Answerield" placeholder="Your Answer" />
         </div>
        <div className="col555">
        <Modal />
        </div>    
           
           </div>
        
        
        
          <Statusmodel/>
        

         
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
    
    
    
    )
    }
}
      
export default Questionpage;