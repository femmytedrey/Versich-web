import * as api from "../api";

export const getCSRFToken = async () => {
  try {
    const { data } = await api.csrfToken();
    return data?.csrftoken;
  } catch (error) {
    return null;
  }
};
