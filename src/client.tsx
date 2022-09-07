// import React from 'react';
import ReactDOM from "react-dom";
// import App from './App';
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
