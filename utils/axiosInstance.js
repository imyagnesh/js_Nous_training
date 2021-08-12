import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  timeoutErrorMessage: 'Time Out. Plase try again',
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: token,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosInstance;
