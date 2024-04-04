import * as api from "../api"
import { getUser } from "./auth"

export const verifyEmail = (token) => async (dispatch) => {
    try {
        const { data } = await api.verifyEmail(token)
        if (data.status !== "success") {
            throw Error(JSON.stringify(data))
        }
        await dispatch(getUser())
        return data
    }
    catch (error) {
        throw error
    }
}

export const resendEmailVerificationLink = (csrfToken) => async () => {
    try {
        const { data } = await api.resendVerificationEmail({ csrfmiddlewaretoken: csrfToken })
        if (data.status !== "success") {
            throw Error(JSON.stringify(data))
        }
        return data
    }
    catch (error) {
        throw error
    }
}