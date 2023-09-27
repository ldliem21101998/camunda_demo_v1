import request from "./request";
import api from "./api";

export const loginRequest = (payload) => {
  return request("http://103.157.218.115/Cali/hs/Fitness/auth", {
    method: "post",
    data: payload,
  });
};