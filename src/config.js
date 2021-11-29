import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://kalyanblog.herokuapp.com/api/",
});
