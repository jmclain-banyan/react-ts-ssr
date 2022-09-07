import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const generateReduxSsrStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getMiddleware) => getMiddleware().concat(thunk),
      });
      return store;
}