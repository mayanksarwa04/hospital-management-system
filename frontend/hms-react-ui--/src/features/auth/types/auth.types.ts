// src/features/auth/types/auth.types.ts

export type UserRole =
  | "ADMIN"
  | "DOCTOR"
  | "NURSE"
  | "PHARMACIST"
  | "RECEPTIONIST"
  | "PATIENT";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  userId: number;
  username: string;
  fullName: string;
  role: UserRole;
}