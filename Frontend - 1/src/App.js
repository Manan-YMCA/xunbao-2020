import React from 'react';
import AppRouter from './Main/AppRouter'
import './loader.js'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return ( 
      
      <div className = "App" >
           <AppRouter />
      </div>
      
  );
}

export default App;
