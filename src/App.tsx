import React from "react";
// import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  background: #666;
`;

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    </Container>
  );
}

export default App;
