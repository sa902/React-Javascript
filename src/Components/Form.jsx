import styled from "styled-components"
import {useState} from 'react';
const Container = styled.div`
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
        // width: 80%;
        flex-direction:column;
`
const Label = styled.label`
    padding: 5px;
`
const ButtonContainer = styled.div`
    padding:1em;
    grid-column: 1/-1;
    display:flex;
    justify-content: center !important;
    align-items: center;
`
const Button = styled.button`
    width: 100px;
    height: 35px;
	// 	@media (min-width: 960px){
	// 	width:60%;
	// }
	// 	@media (min-width: 1200px){
    //     width: 20%;
	// }
    // height:100%;
`
const Select = styled.select`
width:140px;
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
          <label>Bedroom Minimum:</label>
          <Select
            name="minBedroom"
            value={formData.minBedroom}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </Select>
 
                </Item>
                <Item>
                <label>Bedroom Maximum:</label>
          <Select
            name="maxBedroom"
            value={formData.maxBedroom}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </Select>      
                </Item>
                <Item>      
                <label>Bathroom Minimum:</label>
          <Select
            name="minBathroom"
            value={formData.minBathroom}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </Select>
                </Item>
                <Item>
                <label>Bathroom Maximum:</label>
          <Select
            name="maxBathroom"
            value={formData.maxBathroom}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </Select>
                </Item>
                <Item>
                <label>Price Minimum:</label>
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
            {/* Add more options as needed */}
          </Select>
                </Item>
                <Item>
                <label>Price Maximum:</label>
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
            {/* <option value="">Select</option>
            <option value="100000">$100,000</option>
            <option value="200000">$200,000</option>
            <option value="300000">$300,000</option> */}
            {/* Add more options as needed */}
          </Select>
                </Item>
                <ButtonContainer> 
                    <Button onClick={handleSubmit}>Submit</Button> 
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
//           <label>Bedroom Minimum:</label>
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


