function WineryRow({winery}) {
    return (
        <tr>
            <td>{winery.business}</td>
            <td>{winery.rating}</td>
        </tr>
    )
}

export default WineryRow;