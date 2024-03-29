// actions/emailVerificationActions.js

import { verifyEmail } from "../api"; // Import the API function

export const VerifyEmailAction = (token) => {
  return async (dispatch) => {
    try {
      await verifyEmail(token);
      return true;
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        throw new Error("Not authenticated");
      } else if (error.response && error.response.status === 409) {
        throw new Error("Email already verified");
      } else if (error.response && error.response.status === 404) {
        throw new Error("Verification link not associated with this account");
      } else {
        throw error;
      }
    }
  };
};
