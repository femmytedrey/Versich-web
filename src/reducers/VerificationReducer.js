import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(sessionStorage.getItem("userVerification")) || {
  isUserVerified: false,
};

const VerifyEmailAction = createSlice({
  name: "userVerification",
  initialState,
  reducers: {
    setVerified: (state) => {
      state.isUserVerified = true;
    },
  },
});

export const { setVerified } = VerifyEmailAction.actions;

export default VerifyEmailAction.reducer;
