import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/style.css';
import { SaveResults } from '../components/SaveResults';
import { SaveWeather } from '../components/SaveWeather';


function HomePage(){

    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    let history = useHistory();

    async function handleSubmit(location, category) {

        let results = [];
        let w = [];
        
        let city = location;
        city = city.slice(0, -4);
        let weatherUrl = 'http://127.0.0.1:5050/getWeather?city=' + city;
        let businessUrl = 'http://127.0.0.1:5000/results?location=' + location + '&term=' + category;

        // Call Weather service to get current conditions
        await fetch(weatherUrl)
            .then(response => response.json())
            .then(data => w.push(data))
            .catch(error => console.error(error));
        
        SaveWeather(w);

        // Call business service to get array of business objects
        await fetch(businessUrl)
            .then(response => response.json())
            .then(data => {
                for (let i=0; i <= 4; i++) {
                    results.push(data[i])
                };
            })
            .catch(error => console.error(error));
        
        SaveResults(results);

        if (category === "breweries"){
            history.push("/breweries")   
        };
        if (category === "wineries"){
            history.push("/wineries")
        };
        if (category === "distilleries"){
            history.push("/distilleries")
        };
    }


    return (
        <div>
            <h1>Five O'Clock Somewhere</h1>
            
            <form>
                <fieldset required="required">
        
                <label>Where to?  
                    <input type="text" value={location} size="30" maxlength="100" 
                    placeholder="City, State (e.g. Colorado Springs, CO)" required="required"
                    onChange={e => setLocation(e.target.value)}/>
                </label>
      
                <section>
            
                <p>What would you like to find? (select one)</p>
                    <input type="image" name="beer" value="breweries"
                        src="images/beer.jpg" 
                        alt="Flight of beer"
                        height="300"
                        onClick={e => {setCategory(e.target.value);
                            e.preventDefault();
                        }}
                        />

                    <input type="image" name="wine" value="wineries" 
                        src="images/wine.jpg" 
                        alt="Grapes and glasses of wine"
                        height="300"
                        onClick={e => {setCategory(e.target.value);
                            e.preventDefault();
                        }}/>

                    <input type="image" name="whiskey" value="distilleries" 
                        src="images/whiskey.jpg" 
                        alt="Bottles of whiskey"
                        height="300"
                        onClick={e => {setCategory(e.target.value);
                            e.preventDefault();
                        }}/>

                    

                    <label class="selection">Breweries 
                        <input type="radio" value="breweries"
                        onClick={e => {setCategory(e.target.value);
                        }}/>
                    </label>
                    <label class="selection">Wineries 
                        <input type="radio" value="wineries"
                        onClick={e => {setCategory(e.target.value);
                        }}/>
                    </label>
                    <label class="selection">Distilleries
                        <input type="radio" value="distilleries"
                        onClick={e => {setCategory(e.target.value);
                        }}/>
                    </label>


                    </section>
                </fieldset>

                <br></br>
                <button onClick={e => {e.preventDefault();
                    handleSubmit(location, category);}}>Submit</button>
            </form> 

            <br></br>
            <a href="https://pixabay.com/">Images from pixabay</a>
        </div>
    );  
}


export default HomePage;