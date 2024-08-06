import { API_BASE_URL } from "@/constants/api.constant";
import { APIResponseType, ShopType } from "@/constants/types";
import axios from "axios";
import AlertService from "./AlertService";
import ApiService from "./ApiService";

export default class ShopService {
  private apiService: ApiService;
  constructor() {
    this.apiService = new ApiService();
  }
  async createShop(payload: ShopType) {
    try {
      const { data } = await this.apiService.post(`/shop`, payload);
      const es = data as APIResponseType<ShopType>;
      AlertService.success(es.message);
      return es.data;
    } catch (error: any) {
      console.log(error);
      AlertService.error(error?.response?.data?.message);
    }
  }

  static getInstance() {
    return new ShopService();
  }
}
