import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery';

class Statusmodel extends React.Component {
  componentDidMount() {
      
       $('#closebutton').on("click",function() {
      
           
           window.location="./Questionapage/QuestionPage";
           
      
       })
 
       
      
  }
    
    //--------------RENDER--------------------------------------- 
    
    
    render() {
    return (
    <div>
        <button  data-toggle="modal" data-target="#exampleModal" type="button"  id="submitbuttoncall">
      
        </button>   
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        
      </div>
      <div class="modal-body" id="statustext">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="closebutton">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
               
    );
        
    }
}

export default Statusmodel;