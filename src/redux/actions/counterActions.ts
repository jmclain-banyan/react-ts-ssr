import { Dispatch } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incrementCounter = () => async (dispatch: Dispatch) => {
  dispatch({ type: INCREMENT });
};

export const decrementCounter = () => async (dispatch: Dispatch) => {
  dispatch({ type: DECREMENT });
};
