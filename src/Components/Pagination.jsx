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

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
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
        &#8592; {/* Left arrow */}
      </ArrowButton>
      <PageNumbers>{renderPageNumbers()}</PageNumbers>
      <ArrowButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &#8594; {/* Right arrow */}
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;
