import React from 'react';
import { Link } from 'react-router-dom';
import wineries from '../data/wineries';
import weather from '../data/weather';


function WineryPage(){

    return (
        <div>
            <h1>Wineries</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
            
                <tr>
                    <td>{wineries[0].business}</td>
                    <td>{wineries[0].rating}</td>
                </tr>
                <tr>
                    <td>{wineries[1].business}</td>
                    <td>{wineries[1].rating}</td>
                </tr>
                <tr>
                    <td>{wineries[2].business}</td>
                    <td>{wineries[2].rating}</td>
                </tr>
                <tr>
                    <td>{wineries[3].business}</td>
                    <td>{wineries[3].rating}</td>
                </tr>
                <tr>
                    <td>{wineries[4].business}</td>
                    <td>{wineries[4].rating}</td>
                </tr>
                </tbody>
            </table>

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

export default WineryPage;