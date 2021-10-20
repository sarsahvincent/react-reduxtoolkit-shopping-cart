import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, { productSFetch } from "./features/productsSlice";

const store = configureStore({
  reducer: {
   products: productsReducer,
  },
});

store.dispatch(productSFetch())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
