import VisualCard from './VisualCard'
import styled from 'styled-components';
import Pagination from "../Components/Pagination"
import { useState } from 'react';
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
const NewSearchButtonContainer = styled.div`
display:flex;
justify-content: center;
height:2em;
margin:1em;
padding:1em;
`
const NewSearchButton = styled.button`

`

export default function ResultsBox({search}) {
	let [currentPage, setCurrentPage] = useState(1);
	const onPageChange = (i) => {
		setCurrentPage(i)
		console.log('page, ',i)
	}
	return (
		<div>
		<NewSearchButtonContainer>
			<NewSearchButton onClick={search}>
				Start New Search
			</NewSearchButton>
		</NewSearchButtonContainer>	
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
		<Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange}  ></Pagination>
		</div>

	)
}
