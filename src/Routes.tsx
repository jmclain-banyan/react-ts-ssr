import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import OtherPage from "./components/pages/Other";
import App from "./App";

const Routes: React.FC = () => {
    return (
        <div>
          <Route path="/" element={<HomePage />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/app" element={<App />} />
        </div>
      );
}

export default Routes;
