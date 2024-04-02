import { setVerified } from "../reducers/VerificationReducer";

export const updateVerificationStatus = () => (dispatch, getState) => {
  dispatch(setVerified());
  
  sessionStorage.setItem("userVerification", JSON.stringify(getState().userVerification));
};
