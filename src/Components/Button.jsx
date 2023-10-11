import styled from 'styled-components'
const StyledButton = styled.button`
    // width: 100px;
    min-height: 45px;
	// 	@media (min-width: 960px){
	// 	width:60%;
	// }
	// 	@media (min-width: 1200px){
    //     width: 20%;
	// }
    // height:100%;
    display: block;
    padding: 5px 15px;
    border-radius: 5px;
    border: 2px solid #000;
    position: relative;
    background-color: #fff;
    float: left;
    font: normal 22px/25px "Patrick Hand", sans-serif;
    text-transform: uppercase;
    padding-bottom: 3px;
    transition: padding 0.1s, box-shadow 0.1s, top 0.1s;
    &:hover {
      box-shadow: 0 2px 0px 2px #000;
    }
    &:active {
      top: 4px;
      padding-bottom: 0px;
      box-shadow: 0 1px 0 #000;
    }
`

export default function Button({text,clickFn}){
    return (
        <StyledButton onClick={clickFn}>
            {text}
        </StyledButton>
    )
}