import { ReactNode } from "react";

export interface CustomErrorEvent extends CustomEvent {
  detail: CustomError;
  error: CustomError;
}

export interface ErrorState {
  hasError: boolean;
  error: CustomError;
}

export interface ErrorProps {
  children: ReactNode;
}

export interface ErrorListener {
  name: string;
  type: string;
}

interface CustomError extends Error {
  message: string;
  name: string;
  stack?: string;
  user_message?: string;
}