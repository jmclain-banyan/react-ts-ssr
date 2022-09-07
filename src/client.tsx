import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { generateReduxSsrStore } from "./redux/store";
import { Provider } from "react-redux";

import Routes from "./Routes";
import "./index.css";

const store = generateReduxSsrStore();

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
