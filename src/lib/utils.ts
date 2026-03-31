import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (price >= 10000) {
    const eok = Math.floor(price / 10000);
    const man = price % 10000;
    if (man === 0) return `${eok}억`;
    return `${eok}억 ${man.toLocaleString()}만`;
  }
  return `${price.toLocaleString()}만`;
}

export function formatArea(pyeong: number): string {
  const sqm = (pyeong * 3.305785).toFixed(2);
  return `${sqm}㎡ (${pyeong}평)`;
}
