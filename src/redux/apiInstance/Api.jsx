import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const jsonApi = axios.create({
  baseURL: "http://localhost:3005/",
});
