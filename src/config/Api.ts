import axios from "axios";

const PATH =  process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://thomparfum.com";
//TODO: fix url
export const axiosClient = axios.create({
  // withCredentials: true,
  baseURL: PATH,
  // headers: {
  //   "Access-Control-Allow-Origin": "https://thomparfum.vn, https://www.thomparfum.com",
  // }
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.message)
);

export default axiosClient;
