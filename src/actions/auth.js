import * as api from "../api";
import * as actionType from "./types";

export const signupUser =
  (firstname, lastname, email, password, token) => async (dispatch) => {
    try {
      const { data } = await api.register({
        firstname,
        lastname,
        email,
        password,
        csrfmiddlewaretoken: token,
      });
      if (data.status !== "success") {
        throw Error(JSON.stringify(data));
      }
      await dispatch(getUser());
      return data;
    } catch (error) {
      console.log(error);
      /**
       * Handle the server returned error obj
       * throw a new error object with structured json
       * sample => `Error({"status": "server.returned.status", "message": "Error message"})
       * You are free to use your own error handling from here, if you that easy for you.
       */
      if (error.message) {
        const errorObj = JSON.parse(error.message);

        if (
          errorObj.status === "403" &&
          error.response &&
          error.response.data
        ) {
          throw new Error(
            `Error({"status": "invalid_or_no_csrftoken", "message": "Invalid or missing CSRF token."})`
          );
        } else if (
          errorObj.status === "409" &&
          error.response &&
          error.response.data
        ) {
          throw new Error(
            `Error({"status": "user_exists", "message": "This email is already registered. Please log in or use a different email."})`
          );
        }

        throw new Error(`Error(${JSON.stringify(errorObj)})`);
      } else {
        throw new Error(
          `Error({"status": "unexpected_error", "message": "An unexpected error occurred during signup. Please try again."})`
        );
      }
    }
  };

export const loginUser = (email, password, token) => async (dispatch) => {
  try {
    const { data } = await api.login({
      email,
      password,
      csrfmiddlewaretoken: token,
    });
    if (data.status !== "success") {
      throw Error(JSON.stringify(data));
    }

    dispatch({
      type: actionType.AUTH,
      data: { user: data.user, token: data.token },
    });

    await dispatch(getUser());

    return data;
  } catch (error) {
    console.log(error);
    if (error.message) {
      const errorObj = JSON.parse(error.message);

      if (errorObj.status === "403" && error.response && error.response.data) {
        throw new Error(
          `Error({"status": "invalid_or_no_csrftoken", "message": "Invalid or missing CSRF token."})`
        );
      }

      throw new Error(`Error(${JSON.stringify(errorObj)})`);
    } else {
      throw new Error(
        `Error({"status": "unexpected_error", "message": "An unexpected error occurred during login. Please try again."})`
      );
    }
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    if (data.status !== "success") {
      throw Error(JSON.stringify(data));
    }
    dispatch({ type: actionType.AUTH, data });
  } catch (error) {
    throw Error();
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    if (data.status !== "success") {
      throw Error(JSON.stringify(data));
    }
    dispatch({ type: actionType.AUTH, data });
  } catch (error) {
    return null;
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const { data } = await api.logout();
    if (data.status !== "success") {
      throw Error(JSON.stringify(data));
    }
    dispatch({ type: actionType.LOGOUT });
  } catch (error) {
    return null;
  }
};
