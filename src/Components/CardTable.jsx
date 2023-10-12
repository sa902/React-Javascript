import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  margin: 0.5em 0;
  font-family: "Patrick hand", sans-serif;
  text-align: start;
  width: 60%;
  tr {
    display: flex;
    justify-content: space-between;
  }
  th,
  td {
    font-weight: bold;
    font-size: 18px;
  }
`;

const CardTable = ({ price, bedrooms, bathrooms }) => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th>Price</th>
          <th>${price} p/wk</th>
        </tr>
        <tr>
          <td>Bedroom</td>
          <td>{bedrooms}</td>
        </tr>
        <tr>
          <td>Bathroom</td>
          <td>{bathrooms}</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default CardTable;
