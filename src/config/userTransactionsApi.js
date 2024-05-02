import axios from "axios";

export const userTransactionsApi = axios.create({
  baseURL: "https://wallet.b.goit.study",
});

export const setToken = (token) => {
  userTransactionsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  userTransactionsApi.defaults.headers.common.Authorization = ``;
};
