import { API_BASE_URL } from "@/constants/api.constant";
import { SESSION_TOKEN_KEY } from "@/constants/session.constants";
import axios, { AxiosInstance } from "axios";

export default class ApiService {
  private axiosInst: AxiosInstance;
  constructor() {
    this.axiosInst = axios.create({
      baseURL: API_BASE_URL,
      headers: { Authorization: `Bearer ${this.getToken()}` },
    });
  }

  getToken(): string | null {
    return sessionStorage.getItem(SESSION_TOKEN_KEY);
  }

  static postWithouthAuth(uri: string, payload: any) {
    return axios.post(`${API_BASE_URL}${uri}`, payload);
  }

  post(uri: string, payload: any) {
    return this.axiosInst.post(uri, payload);
  }

  get(uri: string) {
    return this.axiosInst.get(uri);
  }

  put(uri: string, payload: any) {
    return this.axiosInst.put(uri, payload);
  }
  patch(uri: string, payload: any) {
    return this.axiosInst.patch(uri, payload);
  }

  delete(uri: string) {
    return this.axiosInst.delete(uri);
  }
}
