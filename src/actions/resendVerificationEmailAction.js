import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = (token) => {
  return async (dispatch) => {
    try {
      await resendVerificationEmail(token);
    } catch (error) {
      throw error;
    }
  };
};
