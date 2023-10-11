import styled from "styled-components"
import {useState} from 'react';
import Button from "./Button";
const Container = styled.div`
    font-family:"inter";
    display:grid;
    grid-gap: 25px;
    margin: 1em;
    padding: 1em;
	@media (min-width: 768px){
		grid-template-columns: repeat(2, 1fr);
	}
		@media (min-width: 960px){
		grid-template-columns: repeat(2, 1fr);
	}
		@media (min-width: 1200px){
		grid-template-columns: repeat(2, 1fr);
	}
  @media (min-width: 768px){
    div:nth-of-type(even){
      justify-self: start;
    }
    
    div:nth-of-type(odd){
      justify-self: end;
    }
    div:nth-last-of-type(1){
      justify-self: center;
    }
  }
  div{
    justify-self:center;
  }
 
`
const Item = styled.div`
        display:flex; 
        // margin-left:1em;
        // margin-right: 1em;
		justify-content: space-between;
        width:90%;
        flex-direction:column;
        @media (min-width: 960px){
          grid-template-columns: repeat(2, 1fr);
          width: 170px;
        }
`
const Label = styled.label`
    padding: 5px;
    font-family:"Patrick Hand";
    font-size:18px;
`
const ButtonContainer = styled.div`
    padding:1em;
    grid-column: 1/-1;
    display:flex;
    justify-content: center !important;
    align-items: center;
`



const Select = styled.select`
// width:140px;

background: transparent;
// -ms-flex-item-align: center;
    // align-self: center;
outline: none;
border: 2.5px solid;
border-top-left-radius: 255px 15px;
border-top-right-radius: 15px 225px;
border-bottom-right-radius: 225px 15px;
border-bottom-left-radius:15px 255px;
font-family: 'Patrick Hand';
/*     font-family: 'Shadows Into Light', cursive; */
/*     font-family: 'Covered By Your Grace', cursive; */
padding: .2rem .4rem;
// color: #717171;

`


export default function Form({search,handleFormClick}){
    const [formData, setFormData] = useState({
        minBedroom: '',
        maxBedroom: '',
        minBathroom: '',
        maxBathroom: '',
        minPrice: '',
        maxPrice: '',
      });
      const priceRange = Array.from({ length: 11 }, (_, index) => (index === 0 ? "" : (index * 100).toString()));
      //TODO API to get max bathrooms and bed rooms, constants for now 
      const maxBathroom = 4
      const maxBedroom = 6
      const bedRoomRange = Array.from({ length: maxBedroom +1 }, (_, index) => (index === 0 ? "" : index.toString()));
      const bathroomRange = Array.from({ length: maxBathroom+1 }, (_, index) => (index === 0 ? "" : index.toString()));
      console.log(priceRange);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleFormClick(formData)
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const getInitialState = () => {
        const value = "Orange";
        return value;
      };
      const [value, setValue] = useState(getInitialState);
      const handleChange = (e) => {
        setValue(e.target.value);
      };
    return (
<div>
<Container>
                <Item>   
                {/* {Array(10).fill(1).map((el, i) =>
     <option key={i} value={i} >{i}</option>
  )} */}
          <Label>Bedroom Minimum:</Label>
          <Select
            name="minBedroom"
            value={formData.minBedroom}
            onChange={handleInputChange}
          >
            {   
              bedRoomRange.map(i => {
                if (i === "") {return <option value={i}>Select</option>}
                return <option value={i}>{i}</option>
              })
            }
          </Select>
 
                </Item>
                <Item>
                <Label>Bedroom Maximum:</Label>
          <Select
            name="maxBedroom"
            value={formData.maxBedroom}
            onChange={handleInputChange}
          >
        {   
              bedRoomRange.map(i => {
                if (i === "") {return <option value={i}>Select</option>}
                return <option value={i}>{i}</option>
              })
            }
          </Select>      
                </Item>
                <Item>      
                <Label>Bathroom Minimum:</Label>
          <Select
            name="minBathroom"
            value={formData.minBathroom}
            onChange={handleInputChange}
          >
            {   
              bathroomRange.map(i => {
                if (i === "") {return <option value={i}>Select</option>}
                return <option value={i}>{i}</option>
              })
            }
          </Select>
                </Item>
                <Item>
                <Label>Bathroom Maximum:</Label>
          <Select
            name="maxBathroom"
            value={formData.maxBathroom}
            onChange={handleInputChange}
          >
            {
              bathroomRange.map(i => {
                if (i === "") {return <option value={i}>Select</option>}
                return <option value={i}>{i}</option>
              })
            }
          </Select>
                </Item>
                <Item>
                <Label>Price Minimum:</Label>
          <Select
            name="minPrice"
            value={formData.minPrice}
            onChange={handleInputChange}
          >
          {
              priceRange.map(i => {
                if (i === "") {return <option value={i}>Select</option>}
                return <option value={i}>${i}</option>
              })
            }
          </Select>
                </Item>
                <Item>
                <Label>Price Maximum:</Label>
          <Select
            name="maxPrice"
            value={formData.maxPrice}
            onChange={handleInputChange}
          >
            {
              priceRange.map(i => {
                if (i === "") {return <option value={i}>Select</option>}
                return <option value={i}>${i}</option>
              })
            }
          </Select>
                </Item>
                <ButtonContainer> 
                    <Button clickFn={handleSubmit} text={"submit"} /> 
                </ButtonContainer>
</Container>
</div>

    )
}

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const StyledForm = styled.form`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 10px;

//   /* Apply different justify-content styles to odd and even rows */
//   div:nth-child(odd) {
//     justify-content: flex-end;
//   }

//   div:nth-child(even) {
//     justify-content: flex-start;
//   }
// `;

// const StyledGridItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// function Form() {
//   const [formData, setFormData] = useState({
//     bedroomMin: '',
//     bedroomMax: '',
//     bathroomMin: '',
//     bathroomMax: '',
//     priceMin: '',
//     priceMax: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform actions with the form data here, such as sending it to a server
//     console.log(formData);
//   };

//   return (
//     <div>
//       <StyledForm onSubmit={handleSubmit}>
//         <StyledGridItem>
//           <Label>Bedroom Minimum:</Label>
//           <select
//             name="bedroomMin"
//             value={formData.bedroomMin}
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             {/* Add more options as needed */}
//           </select>
//         </StyledGridItem>
//         <StyledGridItem>
//           <label>Bedroom Maximum:</label>
//           <select
//             name="bedroomMax"
//             value={formData.bedroomMax}
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             {/* Add more options as needed */}
//           </select>
//         </StyledGridItem>
//         <StyledGridItem>
//           <label>Bathroom Minimum:</label>
//           <select
//             name="bathroomMin"
//             value={formData.bathroomMin}
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             {/* Add more options as needed */}
//           </select>
//         </StyledGridItem>
//         <StyledGridItem>
//           <label>Bathroom Maximum:</label>
//           <select
//             name="bathroomMax"
//             value={formData.bathroomMax}
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             {/* Add more options as needed */}
//           </select>
//         </StyledGridItem>
//         <StyledGridItem>
//           <label>Price Minimum:</label>
//           <select
//             name="priceMin"
//             value={formData.priceMin}
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             <option value="100000">$100,000</option>
//             <option value="200000">$200,000</option>
//             <option value="300000">$300,000</option>
//             {/* Add more options as needed */}
//           </select>
//         </StyledGridItem>
//         <StyledGridItem>
//           <label>Price Maximum:</label>
//           <select
//             name="priceMax"
//             value={formData.priceMax}
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             <option value="100000">$100,000</option>
//             <option value="200000">$200,000</option>
//             <option value="300000">$300,000</option>
//             {/* Add more options as needed */}
//           </select>
//         </StyledGridItem>
//         <button type="submit">Submit</button>
//       </StyledForm>
//     </div>
//   );
// }

// export default Form;


