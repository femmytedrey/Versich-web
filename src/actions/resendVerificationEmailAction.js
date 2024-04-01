import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = (token) => {
  return async (dispatch, getState) => {
    const csrfToken = getState().auth.csrfToken;
    try {
      await resendVerificationEmail({
        csrfmiddlewaretoken: csrfToken  
      });
    } catch (error) {
      throw error;
    }
  };
};
