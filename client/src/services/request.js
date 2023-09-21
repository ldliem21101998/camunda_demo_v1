import axios from "axios";

const request = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    // "Accept": "/*"
  },
});

const handlerError = (error) => {
  const { reponse = {} } = error;
  const { data, status, statusText } = reponse;
  return { data, status, statusText };
};
request.interceptors.request.use((config) => {
  // const token = sessionStorage.getItem("token");
  // config.headers.Authorization = "Basic " + btoa("LuongDL:123456");
  return config;
});

request.interceptors.response.use((reponse) => {
  return reponse;
}, handlerError);

export default request;
