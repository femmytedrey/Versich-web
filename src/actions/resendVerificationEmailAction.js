// actions/resendVerificationEmailAction.js

import { resendVerificationEmail } from "../api";

export const resendVerificationEmailAction = (token) => {
  return async (dispatch) => {
    try {
      await resendVerificationEmail({ csrfmiddlewaretoken: token });
    } catch (error) {
      throw error;
    }
  };
};
