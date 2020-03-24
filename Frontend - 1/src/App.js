import React from 'react';
import AppRouter from './Main/AppRouter'
import './loader.js'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return ( 
      
      <div className = "App" >
           <AppRouter />
      </div>
      
  );
}

export default App;
