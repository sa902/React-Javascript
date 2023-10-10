import CardTable from './CardTable'
export default function VisualCard() {
	return (
		<div style={{display: 'flex', justifyContent:'center'}}>
			<img style={{ width: 325, height: 450, position: 'absolute' }} src="./CardBG.png" ></img>

			<div style={{ width: 325, height: 450, position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>

				<div style={{ color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingBottom: '0.5em' }}>Test Tile</div>

				<div style={{ width: 192, height: 233, background: '#D9D9D9', borderRadius: 5, marginRight: '1em' }} />
				<CardTable></CardTable>
				{/* <div style={{ width: 166, height: 79, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Price<br />Bedroom<br />Bathroom</div> */}
			</div>
		</div>
	)
}
