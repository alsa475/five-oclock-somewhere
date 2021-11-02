import React from 'react';
import { Link } from 'react-router-dom';
import DistilleryTable from '../components/DistilleryTable';
import WeatherTable from '../components/WeatherTable';
import { searchResults } from '../components/SaveResults';


function DistilleryPage({ distilleries, weather }){

    return (
        <div>
            <h1>Distilleries</h1>

            <DistilleryTable distilleries={searchResults}></DistilleryTable>
            <br></br>

            <h2>Weather</h2>
            
            <WeatherTable weather={weather[0]}></WeatherTable>
            <br></br>

            <br></br>
            <nav>
                <Link to='/'>Return Home</Link>
            </nav>
        </div>
    );  

}

export default DistilleryPage;