import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageNumbers = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  font-family:"Patrick Hand";
  font-size: 20px;
`;

const PageNumber = styled.li`
  margin: 0 5px;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0 5px;
  outline: none;
`;

const Image = styled.img`
max-width : 50px;
`


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    const maxPages = 10;
    const halfMax = Math.floor(maxPages / 2);
    let startPage = currentPage - halfMax;
    let endPage = currentPage + halfMax;

    if (startPage < 1) {
      startPage = 1;
      endPage = maxPages;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PageNumber>
      );
    }

    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <ArrowButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image src="Left.png" />
      </ArrowButton>
      <PageNumbers>{renderPageNumbers()}</PageNumbers>
      <ArrowButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image src="Right.png" />
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;
