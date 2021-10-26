import BreweryRow from '../components/BreweryRow';


function BreweryTable({breweries}) {

    return (
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
            </thead>

            <tbody>
                {breweries.map((brewery, i) => <BreweryRow brewery={brewery} key={i}/>)}
            </tbody>
                
        </table>
    );
}


export default BreweryTable;