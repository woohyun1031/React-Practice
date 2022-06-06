// shared/axios.js
import axios from "axios";

const instance = axios.create({
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["X-Auth-Token"] = "1234";
    config.timeout = 3000;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
