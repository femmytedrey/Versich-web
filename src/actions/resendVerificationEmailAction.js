import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = (email, csrfmiddlewaretoken) => {
  return async (dispatch) => {
    try {
      const data = { email, csrfmiddlewaretoken };
      
      await resendVerificationEmail(data);
      
    } catch (error) {
      // Handle any errors
      throw error;
    }
  };
};
