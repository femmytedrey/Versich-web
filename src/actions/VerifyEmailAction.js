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
        throw Error(JSON.stringify({ status: "not-authenticated", message: "User not authenticated" }));
    } else if (error.response && error.response.status === 409) {
        throw Error(JSON.stringify({ status: "email-already-verified", message: "Email already verified" }));
    } else if (error.response && error.response.status === 404) {
        throw Error(JSON.stringify({ status: "invalid-token", message: "Invalid or expired token" }));
    } else {
        throw error;
    }
    }
  };
};
