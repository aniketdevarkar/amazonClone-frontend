const axios = require("axios");

export const register = (email, password, firstName, lastName) => {
  return axios
    .post("http://localhost:8080/register", {
      email,
      firstName,
      lastName,
      password,
    })
    .then((res) => res.data);
};

export const login = (email, password) => {
  return axios
    .post("http://localhost:8080/login", {
      email,
      password,
    })
    .then((res) => res.data);
};
export const forgotPassword = (email) => {
  return axios
    .put("http://localhost:8080/forgotpassword", {
      email,
    })
    .then((res) => res.data);
};
export const resetPassword = (token, newPassword) => {
  return axios
    .put("http://localhost:8080/forgotpassword/resetpassword", {
      token,
      newPassword,
    })
    .then((res) => res.data);
};
