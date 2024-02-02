import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
};

export const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    setSuccess(state, action) {
      state.isSuccess = action.payload;
    },
  },
});

export const { setSuccess } = driverSlice.actions;

export default driverSlice.reducer;
