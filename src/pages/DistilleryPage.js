import React from 'react';
import { Link } from 'react-router-dom';
import distilleries from '../data/distilleries';
import weather from '../data/weather';


function DistilleryPage(){

    return (
        <div>
            <h1>Distilleries</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
            
                <tr>
                    <td>{distilleries[0].business}</td>
                    <td>{distilleries[0].rating}</td>
                </tr>
                <tr>
                    <td>{distilleries[1].business}</td>
                    <td>{distilleries[1].rating}</td>
                </tr>
                <tr>
                    <td>{distilleries[2].business}</td>
                    <td>{distilleries[2].rating}</td>
                </tr>
                <tr>
                    <td>{distilleries[3].business}</td>
                    <td>{distilleries[3].rating}</td>
                </tr>
                <tr>
                    <td>{distilleries[4].business}</td>
                    <td>{distilleries[4].rating}</td>
                </tr>
                </tbody>
            </table>

            <h2>Weather</h2>
            
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

export default DistilleryPage;