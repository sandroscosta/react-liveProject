import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { sales, subscriptions} from "./mocks";

import { Server } from "miragejs";

new Server({
  routes() {
    this.namespace = "api";

    this.get("/sales", () => {
      return sales;
    })

    this.get("/subscriptions", () => {
      return subscriptions;
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
