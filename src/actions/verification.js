import * as api from "../api"

export const verifyEmail = (token) => async () => {
    try {
        const { data } = await api.verifyEmail(token)
        if (data.status !== "success") {
            throw Error(JSON.stringify(data))
        }
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