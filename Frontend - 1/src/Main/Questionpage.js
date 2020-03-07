import React from 'react'
import ReactDom from 'react-dom'
import Uppericons from './uppericons'
import Lowericons from './lowericons'
import MobileUpper from './UpperMobile'
import LowerMobile from './LowerMobile'
import Rules from './Rules'
const Questionpage = () => {
    return (


        <div className = "main-layout" >
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
            <h1 className="QuestionHeading">  Questions  </h1>
            <hr className="Questionhr" /> 
        <br/>
       
            <div id="questiontext">
        
           <h1 className="QuestionText">  Q-1 What is the full form of MANAN ?  </h1>
           <input type="text" id="AnswerField" name="Answerield" placeholder="Your Answer" />
        
        
           </div>
        <a href="javascript:void(0);" onClick={() => window.location.href = "./QuestionPage"}>
        <img src={require('../icons/submit.png')} className="Submit"  />
        </a>   
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

    );
}

export default Questionpage;