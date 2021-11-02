import React from 'react';
import { Link } from 'react-router-dom';
import BreweryTable from '../components/BreweryTable';
import WeatherTable from '../components/WeatherTable';
import { searchResults } from '../components/SaveResults';


function BreweryPage( { breweries, weather }){

    console.log("brew page", searchResults);
    return (
        <div>
            <h1>Breweries</h1>
            
            <BreweryTable results={searchResults}></BreweryTable>
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