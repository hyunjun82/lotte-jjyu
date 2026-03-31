import type { PricingInfo, PaymentSchedule } from "@/types";

export const pricingData: PricingInfo[] = [
  {
    typeId: "59A",
    typeName: "59A타입",
    supplyArea: 85.1,
    priceRange: { min: 85000, max: 120000 },
  },
  {
    typeId: "59B",
    typeName: "59B타입",
    supplyArea: 84.8,
    priceRange: { min: 83000, max: 118000 },
  },
  {
    typeId: "84A",
    typeName: "84A타입",
    supplyArea: 120.2,
    priceRange: { min: 120000, max: 165000 },
  },
  {
    typeId: "84B",
    typeName: "84B타입",
    supplyArea: 120.0,
    priceRange: { min: 118000, max: 160000 },
  },
];

export const paymentSchedule: PaymentSchedule[] = [
  {
    stage: "계약금",
    percentage: 10,
    date: "계약 시",
    description: "분양가의 10%",
  },
  {
    stage: "1차 중도금",
    percentage: 10,
    date: "계약 후 2개월",
    description: "분양가의 10%",
  },
  {
    stage: "2차 중도금",
    percentage: 10,
    date: "계약 후 6개월",
    description: "분양가의 10%",
  },
  {
    stage: "3차 중도금",
    percentage: 10,
    date: "계약 후 12개월",
    description: "분양가의 10%",
  },
  {
    stage: "4차 중도금",
    percentage: 10,
    date: "계약 후 18개월",
    description: "분양가의 10%",
  },
  {
    stage: "5차 중도금",
    percentage: 10,
    date: "계약 후 24개월",
    description: "분양가의 10%",
  },
  {
    stage: "잔금",
    percentage: 40,
    date: "입주 시",
    description: "분양가의 40%",
  },
];
