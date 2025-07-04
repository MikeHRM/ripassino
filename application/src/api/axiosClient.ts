import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
});

// axiosClient.interceptors.request.use((config) => {
//   console.log("request interceptor", config);
//   return config;
// });

// axiosClient.interceptors.response.use((response) => {
//   console.log("response interceptor", response);
//   return response;
// });

export default axiosClient;
