import { configureStore } from "@reduxjs/toolkit"
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync"

import authReducer from "./reducers/auth"
import authVerifyReducer from "./reducers/authverify"
import progressReducer from "./reducers/ProgressSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        authVerify: authVerifyReducer,
        progress: progressReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(createStateSyncMiddleware({}))
    },
    devTools: process.env.NODE_ENV !== "production",
})
initMessageListener(store)
export default store
