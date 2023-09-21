import axios from "axios";

const url = {
  // baseUrl: "http://103.157.218.115/DogsPark/hs",
  baseUrl: "http://localhost:6969",
  data: "/data",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default api;
