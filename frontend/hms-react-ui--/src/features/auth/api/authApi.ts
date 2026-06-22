// src/features/auth/api/authApi.ts
import { apiClient } from "../../../services/apiClient";
import type {
  LoginRequest,
  LoginResponse,
} from "../types/auth.types";

export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>("/api/auth/login", data);
  return response.data;
}