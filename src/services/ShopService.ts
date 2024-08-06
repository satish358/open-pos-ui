import { API_BASE_URL } from "@/constants/api.constant";
import { APIResponseType, ShopType } from "@/constants/types";
import axios from "axios";
import AlertService from "./AlertService";

export default class ShopService {
  static async createShop(payload: ShopType) {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/shop`, payload);
      const es = data as APIResponseType<ShopType>;
      AlertService.success(es.message);
      return es.data;
    } catch {
      AlertService.error("Something went wrong  !");
    }
  }
}
