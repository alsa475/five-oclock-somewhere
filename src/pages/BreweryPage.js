import React from 'react';
import { Link } from 'react-router-dom';
import breweries from '../data/breweries';
import weather from '../data/weather';


function BreweryPage(){

    return (
        <div>
            <h1>Breweries</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
            
                <tr>
                    <td>{breweries[0].business}</td>
                    <td>{breweries[0].rating}</td>
                </tr>
                <tr>
                    <td>{breweries[1].business}</td>
                    <td>{breweries[1].rating}</td>
                </tr>
                <tr>
                    <td>{breweries[2].business}</td>
                    <td>{breweries[2].rating}</td>
                </tr>
                <tr>
                    <td>{breweries[3].business}</td>
                    <td>{breweries[3].rating}</td>
                </tr>
                <tr>
                    <td>{breweries[4].business}</td>
                    <td>{breweries[4].rating}</td>
                </tr>
                </tbody>
            </table>
            <br></br>

            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Current weather conditions:</th>
                    </tr>
                </thead>
                <tbody>
            
                <tr>{weather[0].conditions}</tr>
                <tr>Temperature: {weather[0].temperature} degrees</tr>
                <tr>Precipitation: {weather[0].precipitation}%</tr>
                <tr>Humidity: {weather[0].humidity}%</tr>
                <tr>Wind: {weather[0].wind} mph</tr>

                </tbody>
            </table>

            <br></br>
            <nav>
                <Link to='/'>Return Home</Link>
            </nav>
        </div>
    );  

}

export default BreweryPage;