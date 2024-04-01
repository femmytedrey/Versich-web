import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = (data, token) => {
  return async (dispatch) => {
    try {
      await resendVerificationEmail(data, token);
    } catch (error) {
      throw error;
    }
  };
};
