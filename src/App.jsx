import './App.css'
import ResultsBox from './Components/ResultsBox'
import Layout from './layouts/Layout'
import Form from './Components/Form'
import { useState } from 'react'
export default function App() {
	let [isForm, setIsForm] = useState(true);
	const search = () => {
		setIsForm(!isForm)
	}
	return (
		<Layout>
			{isForm ? <Form search={search}></Form> : <ResultsBox search={search}></ResultsBox>}
		</Layout>
	)
}
