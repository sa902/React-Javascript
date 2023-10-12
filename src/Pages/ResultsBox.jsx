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
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Item = styled.div`
  align-self: center;
  align-content: center;
  justify-content: center;
`;
const NewSearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 2em;
  margin: 1em;
  padding: 1em;
`;

const fetchDataFromServer = (currentPage, searchData) => {
  console.log(
    `inside fetch data from server and current page here is ${currentPage}`,
  );
  const params = { ...{ currentPage: currentPage }, ...searchData };
  return axios.get(
    `https://sebhcug5f9.execute-api.eu-west-2.amazonaws.com/dev/Houses/GetAll`,
    {
      params,
      paramsSerializer: (params) => {
        return "reqParams=" + encodeURIComponent(JSON.stringify(params));
      },
    },
  );
};
export default function ResultsBox({ search, searchData }) {
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  let { isLoading, data, isFetching } = useQuery(
    ["get-houses", currentPage],
    () => fetchDataFromServer(currentPage, searchData),
    { enabled: true, refetchOnWindowFocus: false },
  );
  const setTotalPagesOnFirstSearch = () => {
    data?.data?.pagination?.lastPage
      ? setTotalPages(data?.data?.pagination?.lastPage)
      : null;
    console.log(
      "inside  setTotalPagesOnFirstSearch",
      data?.data?.pagination?.lastPage,
    );
  };
  useEffect(setTotalPagesOnFirstSearch, [data]);
  const onPageChange = (i) => {
    setCurrentPage(i);
    console.log("Changing page, ", i);
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
        {data?.data?.data.map((house) => {
          return (
            <Item key={house.id}>
              <VisualCard
                key={house.id}
                house={house}
              />
            </Item>
          );
        })}
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      ></Pagination>
    </div>
  );
}
