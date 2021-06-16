import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";

export default configureStore({
  reducer: {
    example: exampleReducer,
  },
});
