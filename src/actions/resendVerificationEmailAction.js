import { csrfToken, resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await csrfToken();
      await resendVerificationEmail({
        csrfmiddlewaretoken: data.csrf_token  
      });
    } catch (error) {
        throw error;
    }
  }
}



