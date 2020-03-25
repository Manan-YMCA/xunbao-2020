import React from 'react';
import LoginPage from './Login/LoginPage';
import MainLayout from './MainLayout/MainLayout';
import Developers from './Developers/Developers'
import Leaderboard from './Leaderboard/Leaderboard'
import Rules from './Rules/Rules'
import StartGame from './StartGame/StartGame'
import Questionpage from './QuestionPage/Questionpage'


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function AppRouter() {
  return ( 
      <Router>
      <Switch>
      <div className = "AppRouter" >
           <Route exact path="/" component={LoginPage} />
           <Route path="/MainLayout" component={MainLayout} />
           <Route path="/Developers" component={Developers}/>
           <Route path="/Leaderboard" component={Leaderboard}/>
           <Route path="/Rules" component={Rules}/>
           <Route path="/StartGame" component={StartGame}/>
           <Route path="/Questionpage" component={Questionpage}/>
      </div>
      </Switch>
      </Router>
  );
}

export default AppRouter;
