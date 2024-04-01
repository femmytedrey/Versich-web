import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = () => {
  return async (dispatch) => {
    try {
      await resendVerificationEmail();

    } catch (error) {
      throw error;
    }
  };
};
