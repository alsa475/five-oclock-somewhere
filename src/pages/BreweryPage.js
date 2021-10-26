import React from 'react';
import { Link } from 'react-router-dom';
import BreweryTable from '../components/BreweryTable';
import WeatherTable from '../components/WeatherTable';


function BreweryPage({ breweries, weather }){

    return (
        <div>
            <h1>Breweries</h1>

            <BreweryTable breweries={breweries}></BreweryTable>
            <br></br>

            <h2>Weather</h2>

            <WeatherTable weather={weather[0]}></WeatherTable>
            <br></br>
            
            <nav>
                <Link to='/'>Return Home</Link>
            </nav>
        </div>
    );  

}

export default BreweryPage;