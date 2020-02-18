import React from 'react';
import MainLayout from './Main/MainLayout';
import Developers from './Main/Developers'
import Leaderboard from './Main/Leaderboard'
import Rules from './Main/Rules'
import Winners from './Main/Winners'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return ( 
      <Router>
      <Switch>
      <div className = "App" >
           <Route exact path="/" component={MainLayout} />
           <Route path="/Developers" component={Developers}/>
           <Route path="/Leaderboard" component={Leaderboard}/>
           <Route path="/Rules" component={Rules}/>
           <Route path="/Winners" component={Winners}/>
      </div>
      </Switch>
      </Router>
  );
}

export default App;
