import React from 'react'
import ReactDom from 'react-dom'


class Winners extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
    
    
    
        <div className = "login page" className="mobilecolumn">
        <br />
        
        
        <div className="logincolumn">
        <img src = {
            require('../icons/xunbao text.png')} className = "xunbaoIconwinner" / >
        
        
         <img src = {
            require('../icons/on_li_tr_hnt.png')} className = "xunbaoTextwinner" / >
          <img src = {
            require('../icons/winner.png')} className = "xunbaowinnerpage" / >
          <div className="row">            
         <div className="col-sm-6">
                      <img src={require('../icons/kartik.jpg')} className="WinnerImage"/>
        <p class="WinnerText">1st<br />Kartik Bhatia</p>
              
              </div>
          
                       <div className="col-sm-6">
                                   <img src={require('../icons/shivam.jpg')} className="WinnerImage"/>
        <p class="WinnerText">2nd<br />Shivam Mehla</p>
              </div>
      </div></div>
        
</div>

     );}
}


export default Winners;