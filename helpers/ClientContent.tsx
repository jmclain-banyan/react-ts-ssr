import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Routes from "../src/Routes";
import { Request } from "express";
import { EnhancedStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const ClientContent = (request: Request, store: EnhancedStore): string => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={request.url}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return content;
};

export default ClientContent;
