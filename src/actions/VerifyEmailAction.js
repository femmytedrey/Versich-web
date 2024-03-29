// actions/emailVerificationActions.js

import { verifyEmail } from "../api"; // Import the API function

export const VerifyEmailAction = (token) => {
  return async (dispatch) => {
    try {
      throw new Error("Intentional error occurred");
      await verifyEmail(token);
      return true;
    } catch (error) {
      console.error(error);
      throw error; // Throw error if verification fails
    }
  };
};
