function BreweryRow({brewery}) {
    return (
        <tr>
            <td>{brewery.business}</td>
            <td>{brewery.rating}</td>
        </tr>
    )
}

export default BreweryRow;