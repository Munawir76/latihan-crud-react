import axios from "axios";
import { appConfig } from "../config/app";

const url = {
  login: () => "/auth/login",
  register: () => "/auth/register",
};

const hooks = {};

const api = {
  async login(data) {
    return axios
      .post(`${appConfig.baseUrl + url.login()}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
      });
  },
  async register(data) {
    return axios.post(`${appConfig.baseUrl + url.register()}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export const authRepository = {
  url,
  hooks,
  api,
};
