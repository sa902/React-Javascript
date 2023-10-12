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
{/* 
<motion.main>


			<motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={open}
        >
          Launch modal
        </motion.div>
</motion.main>
      <AnimatePresence
    initial={false}
	mode={'wait'}
  >
  {modalOpen && (
          <Modal modalOpen={modalOpen} text={"TEST TEXT"}  handleClose={close} />
        )}
  </AnimatePresence> */}
				{isForm ? <Form search={search} handleFormClick={handleFormClick} ></Form> : <ResultsBox search={search} searchData={searchData} ></ResultsBox>}
			</Layout>
		</QueryClientProvider>
	)
}
