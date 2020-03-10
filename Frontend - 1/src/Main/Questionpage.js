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

class Questionpage extends React.Component {
  componentDidMount() {
      var i=0;
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
          
            $("#Question").append(obj[i].ques);
            localStorage.setItem("quesurl",obj[i].url);

          })
      
      //---------Submit and Check------------
      
      $(function(){
       $('#myBTN').on("click",function() {
           
            $.ajax({
          url: 'http://mananxunbao.herokuapp.com/api/submission/',
          type: "POST",
          crossDomain : true,
          dataType: 'json',
          headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            },        
          data: JSON.stringify( {
              answer: $("#AnswerField").val()
              
            }),
          contentType: "application/json",
          success: function (data) {
            
              var statusvalue = data.status;
              console.log(statusvalue);
              
              if(statusvalue == "Correct"){
                  window.location="./QuestionPage";
                  i++;
              }
              else{
                  alert("WrongAnswer Try Again");
                  window.location="./QuestionPage";
                  i=i;
              }
              
          }
  })
        });
    }) 

      
      
    
        }
    render() {
    return (
    
    <div className = "main-layout" className="mobilecolumn">>
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
        <User />
            <h1 className="QuestionHeading">  Questions  </h1>
            <hr className="Questionhr" /> 
        <br/>
            <form class="form-signin" id="myForm" method="POST">
            <div id="questiontext">
        
           <h1 className="QuestionText" id="Question">  </h1>
           
           <input type="text" id="AnswerField" name="Answerield" placeholder="Your Answer" />
        
           </div>
        
        
        
        <div className="col3">
        <button  className="SubmitButtonCss" type="submit" id="myBTN">
        <img src={require('../icons/submit.png')} className="Submitimg"  />
        </button> 
        </div>
         </form>
         <div className="col3">
            
             
         <Modal />
         </div>
                 
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