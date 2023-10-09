import VisualCard from './VisualCard'
import styled from 'styled-components';

const Container = styled.div`
display:grid;
		grid-gap: 16px;
	@media (min-width: 768px){
		grid-template-columns: repeat(2, 1fr);
	}
		@media (min-width: 960px){
		grid-template-columns: repeat(3, 1fr);
	}
		@media (min-width: 1200px){
		grid-template-columns: repeat(3, 1fr);
	}
`
const Item = styled.div`
		align-self:center;
		align-content: center; 
		justify-content: center;
`

export default function ResultsBox() {
	return (
		<Container >
			<Item>
				<VisualCard />
			</Item>
			<Item>
				<VisualCard />
			</Item>
			<Item>
				<VisualCard />
			</Item>
			<Item>
				<VisualCard />
			</Item>
			<Item>
				<VisualCard />
			</Item>
			<Item>
				<VisualCard />
			</Item>
		</Container>
	)
}
