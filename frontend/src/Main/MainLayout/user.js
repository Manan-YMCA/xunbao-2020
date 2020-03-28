import React from 'react'
import ReactDom from 'react-dom'

import $ from 'jquery';

class User extends React.Component {
  componentDidMount() {
     
      
      
      //--------User Details-----------------
      
            $("#user_text").append(localStorage.getItem("fullname"));
            $("#user_image").attr("src", localStorage.getItem("userimg"));

        }

      
    render() {
    return (
    
     <div className = "user" >
        
        <img src={""} alt id="user_image" />
        </div>
        
 
   
     
    );}
}


export default User;