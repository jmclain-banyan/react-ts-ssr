import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home";
import OtherPage from "./components/pages/Other";
import App from "./App";

const ClientRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/other" element={<OtherPage />} />
      <Route path="/app" element={<App />} />
    </Routes>
  );
};

export default ClientRoutes;
