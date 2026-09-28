import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskAccountNumber(num?: string | null): string {
  if (!num) return "None";
  const clean = num.replace(/\D/g, "");
  if (clean.length <= 4) return clean;
  return `••••${clean.slice(-4)}`;
}

