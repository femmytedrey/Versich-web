import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth";
import progressReducer from "./reducers/ProgressSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    progress: progressReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
