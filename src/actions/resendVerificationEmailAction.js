import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = () => {
  return async (dispatch, getState) => {
    try {
      const { csrfmiddlewaretoken } = getState().auth.user;
      await resendVerificationEmail(csrfmiddlewaretoken);
    } catch (error) {
      // Handle any errors
      throw error;
    }
  };
};
