export default function CardTable({tableData}) {
	return (
		<table style={{ marginTop: "0.5em", marginBottom: "1em" }}>
			<tbody>
				<tr>
					<th>Price</th>
					<th>{tableData?.price}</th>
				</tr>
				<tr>
					<td>Bedroom</td>
					<td>{tableData?.bedroom}</td>
				</tr>
				<tr>
					<td>Bathroom </td>
					<td>{tableData?.bathroom}</td>
				</tr>
			</tbody>
		</table>
	)
}