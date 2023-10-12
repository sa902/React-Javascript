import './App.css'
import { useState } from 'react'
import  {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import ResultsBox from './Components/ResultsBox'
import Layout from './layouts/Layout'
import Form from './Components/Form'
import { AnimatePresence, motion } from "framer-motion";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";
import GlobalStyle from './globalStyle';
const queryClient = new QueryClient();
export default function App() {
	const { modalOpen, close, open } = useModal();
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
      <GlobalStyle />
			<Layout>
				{isForm ? <Form search={search} handleFormClick={handleFormClick} ></Form> : <ResultsBox search={search} searchData={searchData} ></ResultsBox>}
			</Layout>
		</QueryClientProvider>
	)
}
