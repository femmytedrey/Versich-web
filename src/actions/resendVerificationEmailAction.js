import * as api from "../api";
import { getCSRFToken } from "./csrftoken";

export const resendVerificationEmailAction = () => {
  return async (dispatch) => {
    try {
      const csrfToken = await getCSRFToken();
      if (!csrfToken) {
        throw new Error("CSRF token not available");
      }
      
      await api.resendVerificationEmail({ csrfmiddlewaretoken: csrfToken });
    } catch (error) {
      throw error;
    }
  };
};
