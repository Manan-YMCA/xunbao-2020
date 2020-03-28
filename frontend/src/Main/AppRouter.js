import React from "react";
import LoginPage from "./Login/LoginPage";
import MainLayout from "./MainLayout/MainLayout";
import Developers from "./Developers/Developers";
import Leaderboard from "./Leaderboard/Leaderboard";
import Rules from "./Rules/Rules";
import StartGame from "./StartGame/StartGame";
import Questionpage from "./QuestionPage/Questionpage";
import Winners from "./Winners/Winners";
import comingsoon from "./comingsoon/comingsoon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  const [isLogin, setLogin] = React.useState(!!localStorage.getItem("token"));
  return isLogin ? (
    <Router>
      <Switch>
        <div className="AppRouter">
          <Route path="/" exact exact component={comingsoon} />
          <Route path="/MainLayout" exact exact component={MainLayout} />
          <Route path="/developers" exact component={Developers} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/rules" exact component={Rules} />
          <Route path="/game" exact component={StartGame} />
          <Route path="/question" exact component={Questionpage} />
          <Route path="/winner" exact component={Winners} />
        </div>
      </Switch>
    </Router>
  ) : (
    <LoginPage setLogin={setLogin} />
  );
}

export default AppRouter;
