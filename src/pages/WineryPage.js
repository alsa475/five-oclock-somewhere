import React from 'react';
import { Link } from 'react-router-dom';
import WineryTable from '../components/WineryTable';
import WeatherTable from '../components/WeatherTable';
import { searchResults } from '../components/SaveResults';
import { weatherConditions } from '../components/SaveWeather';


function WineryPage(){

    return (
        <div>
            <h1>Wineries</h1>

            <WineryTable wineries={searchResults}></WineryTable>
            <br></br>
            
            <h2>Weather</h2>
            
            <WeatherTable weather={weatherConditions[0]}></WeatherTable>
            <br></br>
            
            <nav>
                <Link to='/'>Return Home</Link>
            </nav>
        </div>
    );  

}

export default WineryPage;
