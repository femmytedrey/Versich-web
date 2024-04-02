import { verifyEmail } from "../api";

export const VerifyEmailAction = (token) => {
  return async (dispatch) => {
    try {
      await verifyEmail(token);
      return true;
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        throw Error(JSON.stringify({ status: "not_authenticated", message: "User not authenticated" }));
      } else if (error.response && error.response.status === 409) {
        throw Error(JSON.stringify({ status: "invalidtokey_or_alreadyverified_or_differentuser", message: "Email already verified" }));
      } else if (error.response && error.response.status === 404) {
        throw Error(JSON.stringify({ status: "expired_token", message: "Email verification link expired" }));
      } else {
        throw Error(JSON.stringify({ status: "unknown_error", message: "Failed to verify email" }));
      }
    }
  };
};
