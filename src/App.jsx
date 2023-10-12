import "./App.css";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Layout from "./Layouts/Layout";
import ResultsBox from "./Pages/ResultsBox";
import Form from "./Pages/Form";
import GlobalStyle from "./globalStyle";
const queryClient = new QueryClient();
export default function App() {
  let [isForm, setIsForm] = useState(true);
  let [searchData, setSearchData] = useState({});
  const search = () => {
    setIsForm(!isForm);
  };
  const handleFormClick = (data) => {
    setSearchData(data);
    console.log(`here is our form data in parent  ${JSON.stringify(data)}`);
    search();
  };
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Layout>
        {isForm ? (
          <Form search={search} handleFormClick={handleFormClick}></Form>
        ) : (
          <ResultsBox search={search} searchData={searchData}></ResultsBox>
        )}
      </Layout>
    </QueryClientProvider>
  );
}
