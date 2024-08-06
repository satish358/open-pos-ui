export interface APIResponseType<T> {
  message: string;
  error: boolean;
  data: T;
}

export interface LoginResponseType {
  token: string;
  user: UserType;
}

export interface UserType {
  id: number;
  email: string;
  name: string;
  age: number;
  verified: boolean;
  active: boolean;
  roles: RoleType[];
}

export interface RoleType {
  id: number;
  name: string;
}

export interface ShopType {
  id?: number;
  name: string;
  address: string;
  logoUrl: string;
  email: string;
  contact: string;
  createdAt?: string;
}
