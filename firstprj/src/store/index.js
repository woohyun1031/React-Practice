import { configureStore } from "@reduxjs/toolkit";
import tilReducer from "./til";

export const store = configureStore({
  reducer: {
    til: tilReducer,
  },
});
