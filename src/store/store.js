import { configureStore } from "@reduxjs/toolkit";
import driverReducer from "./driver-slice";

export const store = configureStore({
  reducer: { driver: driverReducer },
});
