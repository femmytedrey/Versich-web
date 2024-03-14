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
      console.log(error)
      if (error.response && error.response.status === 409) {
        throw Error(JSON.stringify(error.response.data?.message));
      }
      throw Error(error.message);
    //  return error

      /**
       * Handle the server returned error obj
       * throw a new error object with structured json
       * sample => `Error({"status": "server.returned.status", "message": "Error message"})
       * You are free to use your own error handling from here, if you that easy for you.
       */
      
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
    try {
      const errorObj = error.message;

      if (errorObj.status === 403 && error.response && error.response.data) {
        const errorMessage = "Invalid or missing CSRF token.";
        throw new Error(
          JSON.stringify({
            status: "invalid_or_no_csrftoken",
            message: errorMessage,
          })
        );
      } else if (error.response && error.response.status === 401) {
        const errorMessage = "Incorrect email or password. Please try again.";
        throw new Error(
          JSON.stringify({
            status: "invalid_credentials",
            message: errorMessage,
          })
        );
      }

      throw new Error(`Error(${JSON.stringify(errorObj)})`);
    } catch (parseError) {
      const errorMessage =
        "An unexpected error occurred during signup. Please try again.";
      throw new Error(
        JSON.stringify({ status: "unexpected_error", message: errorMessage })
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
