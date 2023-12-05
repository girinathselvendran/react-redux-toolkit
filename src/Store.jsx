import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import customerReducer from "./slices/customerSlice";

export const Store = configureStore({
  devTools: true,
  reducer: {
    customers: customerReducer,
  },
});
