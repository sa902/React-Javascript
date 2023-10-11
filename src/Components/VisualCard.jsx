import CardTable from './CardTable'
export default function VisualCard({title, tableData,image}) {
	return (
		<div style={{display: 'flex', justifyContent:'center'}}>
			<img style={{ width: 325, height: 450, position: 'absolute' }} src="./CardBG.png" ></img>
			
			<div style={{ width: 325, height: 425, position: 'relative', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', display: 'inline-flex' }}>

				<div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', margin:15,padding:15, fontWeight: '400', wordWrap: 'break-word', paddingBottom: '0.5em' }}>{title}</div>

				<div style={{ maxWidth: 192, maxHeight: 233, background: '', borderRadius: 5, marginRight: '1em' }} >
					<img src={`https://trademe.tmcdn.co.nz/photoserver/med/${image}.jpg`}  ></img>
				</div>
				<CardTable tableData={tableData}></CardTable>
			</div>
		</div>
	)
}
