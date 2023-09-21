import request from "./request";
import api from "./api"

export const getUnApprovalRequest = (payload) => {
  return request(api.url.baseUrl + api.url.data + "/unapproval", {
    method: "get",
    data: payload,
  });
};


  





export const handleApprovalRequest = (payload) => {
  return request(api.url.baseUrl + api.url.data + "/approve", {
    method: "post",
    data: payload,
  });
};