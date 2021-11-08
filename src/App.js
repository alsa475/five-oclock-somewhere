//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BreweryPage from './pages/BreweryPage';
import WineryPage from './pages/WineryPage';
import DistilleryPage from './pages/DistilleryPage';
import weather from './data/weather';


function App() {
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
          
          <Route path="/" exact>
            <HomePage />
          </Route>
          
          <Route path="/breweries">
            <BreweryPage weather={weather}/>
          </Route>
          
          <Route path="/wineries">
            <WineryPage weather={weather}/>
          </Route>
        
          <Route path="/distilleries">
            <DistilleryPage weather={weather}/>
          </Route>

        </header>
      </Router>
    
    </div>
  );
}

export default App;
