import React from 'react';
import { Link } from 'react-router-dom';
import WineryTable from '../components/WineryTable';
import WeatherTable from '../components/WeatherTable';


function WineryPage({ wineries, weather }){

    return (
        <div>
            <h1>Wineries</h1>

            <WineryTable wineries={wineries}></WineryTable>
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

export default WineryPage;