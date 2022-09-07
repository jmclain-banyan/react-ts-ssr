import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const generateReduxSsrStore = () => {
    const store = configureStore({
        reducer: {},
        middleware: (getMiddleware) => getMiddleware().concat(thunk),
      });
      return store;
}