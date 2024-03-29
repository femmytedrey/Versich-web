import * as api from "../api";
import { getUser } from "./auth";

export const authenticateGoogleUser = (searchQuery) => async (dispatch) => {
    try {
        const { data } = await api.authenticateGoogleUser(searchQuery);
        if (data.status !== "success") {
            throw Error(JSON.stringify(data));
        }
        await dispatch(getUser());
        return data;
    } catch (error) {
        /**
         * error.message
         * error.status
         */
        let errorMessage;
        if (error.status === 401) {
            errorMessage = JSON.stringify({ status: 401, message: "Authentication failed: Unauthorized access" });
        } else if (error.status === 403) {
            errorMessage = JSON.stringify({ status: 403, message: "Forbidden: Access denied" });
        } else if (error.status === 404) {
            errorMessage = JSON.stringify({ status: 404, message: "Resource not found" });
        } else {
            errorMessage = JSON.stringify({ status: "server.returned.status", message: "An error occurred" });
        }
        throw Error(errorMessage);
    }
};
