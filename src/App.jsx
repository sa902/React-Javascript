import './App.css'
import { useState } from 'react'
import  {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import ResultsBox from './Components/ResultsBox'
import Layout from './layouts/Layout'
import Form from './Components/Form'
const queryClient = new QueryClient();
export default function App() {
	let [isForm, setIsForm] = useState(true);
	let [searchData, setSearchData] = useState({});
	const search = () => {
		setIsForm(!isForm)
	}
	const handleFormClick = (data) => {
		setSearchData(data);
		console.log(`here is our form data in parent  ${JSON.stringify(data)}`)
		search()
	}
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				{isForm ? <Form search={search} handleFormClick={handleFormClick} ></Form> : <ResultsBox search={search} searchData={searchData} ></ResultsBox>}
			</Layout>
		</QueryClientProvider>
	)
}
