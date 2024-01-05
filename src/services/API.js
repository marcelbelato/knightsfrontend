import axios from "axios";

const api = axios.create({
  baseURL: process.env.KNIGHTS_API_BASE_URL || "http://localhost:32770",
});

// Add a request interceptor
api.interceptors.request.use(
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
api.interceptors.response.use(
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

export default api;