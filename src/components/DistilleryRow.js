function DistilleryRow({distillery}) {
    return (
        <tr>
            <td>{distillery.business}</td>
            <td>{distillery.rating}</td>
        </tr>
    )
}

export default DistilleryRow;