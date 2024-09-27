import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./context/store";

import "./main.css";

import PageRouter from "./utils/PageRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PageRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
