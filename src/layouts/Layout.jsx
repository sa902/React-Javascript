import styled from 'styled-components';

const Main = styled.div`
margin: auto;
@media (min-width: 960px) {
  width: 70%;
`

const Logo = styled.img`
width: 300px;
margin: auto;
`
const Slogan = styled.h1`
font-family: "Glass Antiqua";
@media (min-width: 960px){
  font-size: 250%;
}
`
export default function Layout({ children }) {
  return (
    <Main>
      <Logo className="centre" src="./finderlogo.png" />
      <Slogan className="centre">
        Find your perfect flatmates
      </Slogan>
      {children}
    </Main>
  );
}
