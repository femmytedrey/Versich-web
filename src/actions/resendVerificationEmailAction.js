import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = (token) => {
  return async (dispatch, getState) => {
    const token = getState().auth.user?.token; 
    try {
      await resendVerificationEmail(token);
    } catch (error) {
      throw error;
    }
  };
};
