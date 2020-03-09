import React from 'react'
import ReactDom from 'react-dom'

import $ from 'jquery';

class User extends React.Component {
  componentDidMount() {
      
      
      
      //--------Getting token-----------------
         $.ajax({
          url: 'http://mananxunbao.herokuapp.com/api/token/',
          type: "POST",
          crossDomain : true,
          dataType: 'json',
          data: JSON.stringify( {
              username: 'sanyam',
              password: 's2ny2mmitt2l'
            }),
          contentType: "application/json",
          success: function (data) {
            
              var tokenvalue = data.access;
              console.log(tokenvalue);
              localStorage.setItem("token",tokenvalue);
             
              
          },
          error: function () {
          	alert("Token Not Received");
          localStorage.clear();
       
      }
  })
      
      //--------User Details-----------------
            
       $.ajax({

            type: "GET",
            crossDomain: true,
            dataType: 'json',
            url: "http://mananxunbao.herokuapp.com/api/userprofile/",
            headers: {
              "Authorization":"Bearer " + localStorage.getItem("token")
            }
            
           
          }).done(function (data) {

            
            var obj = JSON.parse(JSON.stringify(data));
            console.log(obj);
            $("#user_text").append(obj[0].user[0]);
            $("#user_image").attr("src", obj[0].pic);

          })
        }

      
    render() {
    return (
    
     <div className = "user" className="mobilecolumn">
        <div class="row">
        <div class="col3">
        <img src={""} alt id="user_image" />
        </div>
        <div class="col3">
        <p id="user_text" ></p>
 </div>
 </div>
     </div>
     
    );}
}


export default User;