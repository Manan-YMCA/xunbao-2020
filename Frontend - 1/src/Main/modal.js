import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery';

class Modal extends React.Component {
  componentDidMount() {
      
       //--------Hint Button--------------------------------------------
      
      $('#myBtn').on("click",function() {
  
      
      $.ajax({
          url: 'https://mananxunbao.herokuapp.com/api/hint/',
          type: "POST",
          crossDomain : true,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          cache: false,
          headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            },
          data: JSON.stringify({
             
              hintviewed:'true',
              ques: localStorage.getItem("quesurl"),
              user: 'http://mananxunbao.herokuapp.com/api/userprofile/2/'
              
            }),
          complete: function (data) {
          console.log("Success");
    }
  });
    });
      
      
      //--------api call--------------------------------------------
      
       $.ajax({

            type: "GET",
            crossDomain: true,
            dataType: 'json',
            url: "http://mananxunbao.herokuapp.com/api/question",
            headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            }
          }).done(function (data) {

            
            //----------------details----------------------

            var obj = JSON.parse(JSON.stringify(data));
            console.log(obj);

           

            $("#hint_para").append(obj[0].hint);
           

          })
      
      
      
      
      
      
      //modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
      
  }
    
    render() {
    return (
    <div>
        
        <button id="myBtn" className="hint_button"  >
        <img src={require('../icons/hint.png')} className="hint_img"  />
        </button>


<div id="myModal" className="modal">
<div className="modal-content">
    <div className="modal-header">
      <span className="close">&times;</span>
      
    </div>
    <div className="modal-body">
      <p id="hint_para">HINT : </p>
      
    </div>
    
  </div>

</div>
    </div>
    
    
    
    
    );
        
    }
}

export default Modal;