import axios from "axios";

const todoAppUrl = "http://localhost:3000";

export const customApirequestHandler = axios.create({
  baseURL: todoAppUrl,
  withCredentials: true,
});
