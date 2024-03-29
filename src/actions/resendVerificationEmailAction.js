import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = () => {
  return async (dispatch) => {
    try {
      await resendVerificationEmail(email);
    } catch (error) {
      // Handle any errors
      throw error;
    }
  };
};
