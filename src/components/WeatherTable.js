function WeatherTable({weather}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Current weather conditions:</th>
                </tr>
            </thead>

            <tbody>            
                <tr>{weather.conditions}</tr>
                <tr>Temperature: {weather.temperature} degrees</tr>
                <tr>Precipitation: {weather.precipitation}%</tr>
                <tr>Humidity: {weather.humidity}%</tr>
                <tr>Wind: {weather.wind} mph</tr>

            </tbody>
        </table>
    );
}


export default WeatherTable;