import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = (data) => {
  return async (dispatch) => {
    try {
      await resendVerificationEmail(data);
    } catch (error) {
      throw error; 
    }
  };
};
