import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery';
import {Link} from 'react-router-dom'
import Facebook from './facebook'

class LoginPage extends React.Component {
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
          	
          localStorage.clear();
       
      }
  }) 
      
  }

      
    render() {
    return (
    
    
    
    
        <div className = "login page" className="mobilecolumn">
        <br />
        <div class="row">
        
        <div className="logincolumn">
        <img src = {
            require('../icons/xunbao text.png')}className = "xunbaoIcon" / >
        
        <img src = {
            require('../icons/underline.png')}className = "underlineIcon" / >
        
         <img src = {
            require('../icons/on_li_tr_hnt.png')}className = "xunbaoText" / >
         
         <Facebook />  
      </div>
        </div>
</div>

     );}
}


export default LoginPage;