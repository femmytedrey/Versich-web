import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});
const getReqConfig = (data) => {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-csrftoken": data.csrfmiddlewaretoken,
    },
  };
};

export const csrfToken = () => API.get("/csrf/");

// Auth
export const register = (data) =>
  API.post("/auth/register/", data, getReqConfig(data));
export const login = (data) =>
  API.post("/auth/login/", data, getReqConfig(data));
export const getUser = () => API.get("/auth/me/");
export const logout = () => API.get("/auth/logout/");

// Social Auth
export const authenticateGoogleUser = (searchQuery) =>
  API.get(`/auth/social-accounts/google/callback/${searchQuery}`);

export const verifyEmail = (token) => {
  return API.get(`/auth/verify/account/${token}/email`);
};

export const resendVerificationEmail = (data) => {
  return API.post('/auth/verify/account/resend/email/', data, getReqConfig(data));
};
