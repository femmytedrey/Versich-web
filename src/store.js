import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./reducers/auth"
import authVerifyReducer from "./reducers/authverify"
import progressReducer from "./reducers/ProgressSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        authVerify: authVerifyReducer,
        progress: progressReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
})
export default store
