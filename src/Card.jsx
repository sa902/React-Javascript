// Card.js
import React from 'react';
import styled from 'styled-components';

// Define a styled component for the card
const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  background-color: white;
`;

// Create the Card component
function Card({ title, content }) {
  return (
    <CardContainer>
      <h2>{title}</h2>
      <p>{content}</p>
    </CardContainer>
  );
}

export default Card;
