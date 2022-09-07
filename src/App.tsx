import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
// import styled from "styled-components";

// const Container = styled.div`
//   background: #666;
// `;

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount((prevState) => prevState+=1)
  const decrement = () => setCount((prevState) => prevState-=1)
  return (
    // <Container>
      <div className="App">
        <header className="App-header">
          <button onClick={increment}>+</button>
          <span>the count is{count}</span>
          <button onClick={decrement}>-</button>
        </header>
      </div>
    // </Container>
  );
}

export default App;
