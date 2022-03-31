import './App.css';
import Page from "./components/Page";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #5b5bf6;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
       <Page/>
    </Wrapper>
  );
}

export default App;
