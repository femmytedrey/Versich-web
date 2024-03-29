// actions/emailVerificationActions.js

import { verifyEmail } from '../api'; // Import the API function

export const VerifyEmailAction = (token) => {
  return async (dispatch) => {
    try {
      await verifyEmail(token); 
      return true;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
};
