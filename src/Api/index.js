import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/" });
export const registerUser = (registerUser) =>
  API.post(`/api/v1//signup`, registerUser);
export const loginUser = (loginData) => API.post("api/v1/login", loginData);
export const registerComplaint = (data) => API.post("api/v1/complaint", data)
export const registeredComplaint  = () => API.get("api/v1/complaint")
export const writeComplaint = (newpost) => API.post("/post", newpost)
export const deleteComplaint = (id) => API.delete(`/post/${id}`)
export const updateComplaint = (id, data) => API.post(`/post/${id}`, data)
export const complaintStatus  = () => API.get("api/v1/status")