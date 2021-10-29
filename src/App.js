//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BreweryPage from './pages/BreweryPage';
import WineryPage from './pages/WineryPage';
import DistilleryPage from './pages/DistilleryPage';
import breweries from './data/breweries';
import wineries from './data/wineries';
import distilleries from './data/distilleries';
import weather from './data/weather';
import results from './data/results';


function App() {
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
          
          <Route path="/" exact>
            <HomePage />
          </Route>
          
          <Route path="/breweries">
            <BreweryPage results={results} weather={weather}/>
          </Route>
          
          <Route path="/wineries">
            <WineryPage wineries={wineries} weather={weather}/>
          </Route>
        
          <Route path="/distilleries">
            <DistilleryPage distilleries={distilleries} weather={weather}/>
          </Route>

        </header>
      </Router>
    
    </div>
  );
}

export default App;
