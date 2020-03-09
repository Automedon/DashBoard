import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";

const Wrapper = styled.section`
  min-width: 100%;
  background-color: #f3f3f3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <DashBoard />
    </Wrapper>
  );
}

export default App;
