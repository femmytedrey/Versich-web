import * as api from "../api"
import { getUser } from "./auth"

export const authenticateGoogleUser = (searchQuery) => async (dispatch) => {
    try {
        const { data } = await api.authenticateGoogleUser(searchQuery)
        if (data.status !== "success") {
            throw Error(JSON.stringify(data))
        }
        await dispatch(getUser())
        return data
    }
    catch (error) {
        /**
         * error.message
         * error.status
         */ 
        console.error(error)
        const _err = JSON.stringify({ status: "server.returned.status", message: "Error message" })
        throw Error(_err)
    }
}