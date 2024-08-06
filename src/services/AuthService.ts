import { API_BASE_URL } from "@/constants/api.constant";
import {
  SESSION_TOKEN_KEY,
  SESSION_USER_DATA_KEY,
  SESSION_USER_ROLE_KEY,
} from "@/constants/session.constants";
import { APIResponseType, LoginResponseType } from "@/constants/types";
import axios from "axios";
import AlertService from "./AlertService";

// TYPES

export type LoginProp = {
  email: string;
  password: string;
};

export default class AuthService {
  static login = (payload: LoginProp, router: any) => {
    axios
      .post(`${API_BASE_URL}/auth/login`, payload)
      .then((res) => {
        const response = res.data as APIResponseType<LoginResponseType>;
        const userRoles = response.data.user.roles.map((item) => item.name);
        sessionStorage.setItem(SESSION_TOKEN_KEY, response.data.token);
        sessionStorage.setItem(
          SESSION_USER_DATA_KEY,
          JSON.stringify(response.data.user)
        );
        sessionStorage.setItem(
          SESSION_USER_ROLE_KEY,
          JSON.stringify(userRoles)
        );
        if (userRoles.includes("ADMIN")) router.push("/admin");
      })
      .catch((error) => {
        AlertService.error("Try Again", "Wrong Credentials !");
      });
  };
}
