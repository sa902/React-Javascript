import styled from "styled-components";
import { useState } from "react";
import Button from "../Components/Button";
const Container = styled.div`
  font-family: "inter";
  display: grid;
  grid-gap: 25px;
  margin: 1em;
  padding: 1em;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    div:nth-of-type(even) {
      justify-self: start;
    }
    div:nth-of-type(odd) {
      justify-self: end;
    }
    div:nth-last-of-type(1) {
      justify-self: center;
    }
  }
  div {
    justify-self: center;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-direction: column;
  @media (min-width: 960px) {
    width: 170px;
  }
`;
const Label = styled.label`
  padding: 5px;
  font-family: "Patrick Hand";
  font-size: 18px;
`;
const ButtonContainer = styled.div`
  padding: 1em;
  grid-column: 1/-1;
  display: flex;
  justify-content: center !important;
  align-items: center;
`;

const Select = styled.select`
  background: transparent;
  outline: none;
  border: 2.5px solid;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  padding: 0.2rem 0.4rem;
  font-size:16px;
`;

const priceRange = Array.from({ length: 11 }, (_, index) =>
index === 0 ? "" : (index * 100).toString(),
);
//TODO API to get max bathrooms and bed rooms, constants for now
const maxBathroom = 4;
const maxBedroom = 6;
const bedRoomRange = Array.from({ length: maxBedroom + 1 }, (_, index) =>
index === 0 ? "" : index.toString());
const bathroomRange = Array.from({ length: maxBathroom + 1 }, (_, index) =>
index === 0 ? "" : index.toString());

export default function Form({ search, handleFormClick }) {
  const [formData, setFormData] = useState({
    minBedroom: "",
    maxBedroom: "",
    minBathroom: "",
    maxBathroom: "",
    minPrice: "",
    maxPrice: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormClick(formData);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Container>
        <Item>
          <Label>Bedroom Minimum:</Label>
          <Select
            name="minBedroom"
            value={formData.minBedroom}
            onChange={handleInputChange}
          >
            {bedRoomRange.map((i) => {
              if (i === "") {
                return <option value={i}>Select</option>;
              }
              return <option value={i}>{i}</option>;
            })}
          </Select>
        </Item>
        <Item>
          <Label>Bedroom Maximum:</Label>
          <Select
            name="maxBedroom"
            value={formData.maxBedroom}
            onChange={handleInputChange}
          >
            {bedRoomRange.map((i) => {
              if (i === "") {
                return <option value={i}>Select</option>;
              }
              return <option value={i}>{i}</option>;
            })}
          </Select>
        </Item>
        <Item>
          <Label>Bathroom Minimum:</Label>
          <Select
            name="minBathroom"
            value={formData.minBathroom}
            onChange={handleInputChange}
          >
            {bathroomRange.map((i) => {
              if (i === "") {
                return <option value={i}>Select</option>;
              }
              return <option value={i}>{i}</option>;
            })}
          </Select>
        </Item>
        <Item>
          <Label>Bathroom Maximum:</Label>
          <Select
            name="maxBathroom"
            value={formData.maxBathroom}
            onChange={handleInputChange}
          >
            {bathroomRange.map((i) => {
              if (i === "") {
                return <option value={i}>Select</option>;
              }
              return <option value={i}>{i}</option>;
            })}
          </Select>
        </Item>
        <Item>
          <Label>Price Minimum:</Label>
          <Select
            name="minPrice"
            value={formData.minPrice}
            onChange={handleInputChange}
          >
            {priceRange.map((i) => {
              if (i === "") {
                return <option value={i}>Select</option>;
              }
              return <option value={i}>${i}</option>;
            })}
          </Select>
        </Item>
        <Item>
          <Label>Price Maximum:</Label>
          <Select
            name="maxPrice"
            value={formData.maxPrice}
            onChange={handleInputChange}
          >
            {priceRange.map((i) => {
              if (i === "") {
                return <option value={i}>Select</option>;
              }
              return <option value={i}>${i}</option>;
            })}
          </Select>
        </Item>
        <ButtonContainer>
          <Button clickFn={handleSubmit} text={"submit"} />
        </ButtonContainer>
      </Container>
    </div>
  );
}
