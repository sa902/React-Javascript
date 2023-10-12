import styled from "styled-components";

// const ModalButton = ({ onClick, label }) => (
//   <motion.button
//     className=""
//     type="button"
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.95 }}
//     onClick={onClick}
//   >
//     {label}
//   </motion.button>
// );

const StyledButton = styled.button`
  min-height: 45px;
  padding: 5px 15px;
  border-radius: 5px;
  border: 2px solid #000;
  position: relative;
  background-color: #fff;
  font:
    normal 22px/25px "Patrick Hand",
    sans-serif;
  text-transform: uppercase;
  transition:
    padding 0.1s,
    box-shadow 0.1s,
    top 0.1s;
  &:hover {
    box-shadow: 0 2px 0px 2px #000;
  }
  &:active {
    top: 4px;
    box-shadow: 0 1px 0 #000;
  }
`;

export default function Button({ text, clickFn }) {
  return <StyledButton onClick={clickFn}>{text}</StyledButton>;
}
