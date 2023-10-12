import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import VisualCard from "../Components/VisualCard";
import styled from "styled-components";
import Pagination from "../Components/Pagination";
import Button from "../Components/Button";

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(251px, 1fr));
  max-width: 1050px; /* set a max width */
  margin: 0 auto; /* centre the div */
`;

const NewSearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 2em;
  margin: 1em;
  padding: 1em;
`;

const fetchDataFromServer = (currentPage, searchData) => {
  const params = { currentPage, ...searchData };
  return axios.get(`https://sebhcug5f9.execute-api.eu-west-2.amazonaws.com/dev/Houses/GetAll`, {
    params,
    paramsSerializer: (params) => "reqParams=" + encodeURIComponent(JSON.stringify(params)),
  });
};

export default function ResultsBox({ search, searchData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data, isFetching } = useQuery(["get-houses", currentPage], () =>
    fetchDataFromServer(currentPage, searchData),{ enabled: true, refetchOnWindowFocus: false }
  );
  const totalPage = data?.data?.pagination?.lastPage;
  const onPageChange = (i) => {
    setCurrentPage(i);
  };

  if (isLoading || isFetching) {
    return <h2>Loading ... </h2>;
  }

  return (
    <div>
      <NewSearchButtonContainer>
        <Button clickFn={search} text={"Start New Search"} />
      </NewSearchButtonContainer>
      <Container>
        {data?.data?.data.map((house) => (
          <VisualCard key={house.id} house={house} />
        ))}
      </Container>
      <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={onPageChange} />
    </div>
  );
}
