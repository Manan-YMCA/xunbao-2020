import React from 'react';
import LoginPage from './Login/LoginPage';
import MainLayout from './MainLayout/MainLayout';
import Developers from './Developers/Developers'
import Leaderboard from './Leaderboard/Leaderboard'
import Rules from './Rules/Rules'
import StartGame from './StartGame/StartGame'
import Questionpage from './QuestionPage/Questionpage'
import Winners from './Winners/Winners'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function AppRouter() {
  return ( 
      <Router>
      <Switch>
      <div className = "AppRouter" >
           <Route exact path="/" component={LoginPage} />
           <Route path="/home" component={MainLayout} />
           <Route path="/developers" component={Developers}/>
           <Route path="/leaderboard" component={Leaderboard}/>
           <Route path="/rules" component={Rules}/>
           <Route path="/game" component={StartGame}/>
           <Route path="/question" component={Questionpage}/>
           <Route path="/winner" component={Winners}/>
      </div>
      </Switch>
      </Router>
  );
}

export default AppRouter;
