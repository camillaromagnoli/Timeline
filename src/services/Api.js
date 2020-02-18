import axios from "axios";

export const Api = axios.create({
  baseURL: "https://storage.googleapis.com/dito-questions/",
  headers: {
   Accept: "application/json",
  }
});