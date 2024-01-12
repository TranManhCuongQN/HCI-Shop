import { LoginPayload } from "../types/auth";
import axiosClient from "./axios-client";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/login", payload);
  },
  logout() {
    return axiosClient.post("/logout");
  },
  getProfile() {
    return axiosClient.get("/profile");
  },
};
