import { AnyAction } from "redux";
import { INCREMENT, DECREMENT } from "../actions/counterActions";

type StateType = {
  currentCount: number;
};

const initState: StateType = {
  currentCount: 0,
};

const counterReducer = (state = initState, { type }: AnyAction): StateType => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        currentCount: (state.currentCount += 1),
      };
    case DECREMENT:
      return {
        ...state,
        currentCount: (state.currentCount -= 1),
      };
    default:
      return state;
  }
};

export default counterReducer;
