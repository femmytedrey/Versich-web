import { resendVerificationEmail } from '../api'; // Import the API functions

export const resendVerificationEmailAction = () => {
  return async (dispatch) => {
    try {
      await resendVerificationEmail(); 
    } catch (error) {
      throw error; 
    }
  };
};
