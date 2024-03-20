import * as api from "../api";
import * as actionType from "./types";

export const signupUser = (formData) => async (dispatch) => {
  const { accountType, firstname, lastname, email, password, token } = formData;
  try {
    const { data } = await api.register({
      accountType,
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
    if (error.response && error.response.status) {
      throw new Error(error.response.data.message);
    } else {
      throw Error(error);
    }

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
    if (error.response && error.response.status) {
      throw new Error(error.response.data.message);
    } else {
      throw Error(error);
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
