import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = (csrfToken) => {
  return async (dispatch) => {
    try {
      await resendVerificationEmail(csrfToken);
    } catch (error) {
      throw error;
    }
  };
};
