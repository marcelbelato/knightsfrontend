import axios from "axios";

const API = axios.create({
  baseURL: process.env.KNIGHTS_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    },
});

// Add a request interceptor
API.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log("Request sent to API", config);
    return config;
  },
  function (error) {
    // Do something with request error
    // console.log("Error sending request to API", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
API.interceptors.response.use(
  function (response) {
    // Do something with response data
    // console.log("Response from API", response);
    return response;
  },
  function (error) {
    // Do something with response error
    // console.log("Error from API", error);
    return Promise.reject(error);
  }
);

export default API;