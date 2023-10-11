import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import VisualCard from './VisualCard'
import styled from 'styled-components';
import Pagination from "../Components/Pagination"

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
const NewSearchButton = styled.button``

const  fetchDataFromServer = (currentPage) => {
	const params = {currentPage: currentPage};
	return axios.get(`https://sebhcug5f9.execute-api.eu-west-2.amazonaws.com/dev/Houses/GetAll`,{
		params,
		paramsSerializer: (params) => {return "reqParams="+ encodeURIComponent(JSON.stringify(params))}
	})
}
export default function ResultsBox({search,searchData}) {
	let [currentPage, setCurrentPage] = useState(1);
	const {isLoading, data} = useQuery(['get-houses'],() => fetchDataFromServer(currentPage))

	const onPageChange = (i) => {
		setCurrentPage(i)
		console.log('page, ',i)
	}

	if (isLoading){
		return <h2>Loading ... </h2>
	}
	 
	return (
		<div>
		<NewSearchButtonContainer>
			<NewSearchButton onClick={search}>
				Start New Search
			</NewSearchButton>
		</NewSearchButtonContainer>	
		<Container >
			{
				data?.data?.data.map(house => {
					return (
							<Item>
								<VisualCard 
								title={house.title}
								image={house.image_ids[0]}
								tableData={{
									bathroom:house.bathrooms,
									bedroom: house.bedrooms,
									price:house.price,
								}}/>
							</Item>
					)
				})
			}
		</Container>
		<Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange}  ></Pagination>
		</div>

	)
}
