import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000/api/v1"
    : "/api/v1";

// Axios instance for api's call

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
