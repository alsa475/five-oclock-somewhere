function BreweryRow({ result }) {
    return (
        <tr>
            <td>{result.business}</td>
            <td>{result.rating}</td>
        </tr>
    )
}

export default BreweryRow;