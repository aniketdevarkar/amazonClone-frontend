const axios = require("axios");
const base_url = "https://amazon-clone-back.herokuapp.com";
// const base_url = "http://localhost:8080";

export const register = (email, password, firstName, lastName, role) => {
  return axios
    .post(`${base_url}/register`, {
      email,
      firstName,
      lastName,
      password,
      role,
    })
    .then((res) => res.data);
};

export const login = (email, password) => {
  return axios
    .post(`${base_url}/login`, {
      email,
      password,
    })
    .then((res) => res.data);
};
export const forgotPassword = (email) => {
  return axios
    .put(`${base_url}/forgotpassword`, {
      email,
    })
    .then((res) => res.data);
};
export const resetPassword = (token, newPassword) => {
  return axios
    .put(`${base_url}/forgotpassword/resetpassword`, {
      token,
      newPassword,
    })
    .then((res) => res.data);
};

export async function addProduct({
  image,
  description,
  productName,
  productPrice,
  token,
}) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", description);
  formData.append("productName", productName);
  formData.append("productPrice", productPrice);
  const result = await axios.post(`${base_url}/addProduct`, formData, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return result.data;
}

export const getAllProducts = () => {
  return axios.get(`${base_url}/all-products`).then((res) => res.data);
};

export const getProduct = (productName) => {
  return axios
    .get(`${base_url}/product/${productName}`)
    .then((res) => res.data);
};

export const confirmation = (token) => {
  return axios
    .get(`${base_url}/register/confirmation/${token}`)
    .then((res) => res.data);
};
