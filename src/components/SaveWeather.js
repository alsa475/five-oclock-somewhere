let weatherConditions = [];


function SaveWeather(props) {

    weatherConditions = props;
    //console.log("inside function", searchResults['0']);

    return weatherConditions;

}

export { weatherConditions, SaveWeather };
