import type { PricingInfo, PaymentSchedule } from "@/types";

export const pricingData: PricingInfo[] = [
  {
    typeId: "A",
    typeName: "A타입",
    supplyArea: 43.0,
    priceRange: { min: 0, max: 0 },
  },
  {
    typeId: "B",
    typeName: "B타입",
    supplyArea: 43.32,
    priceRange: { min: 0, max: 0 },
  },
  {
    typeId: "C",
    typeName: "C타입",
    supplyArea: 44.96,
    priceRange: { min: 0, max: 0 },
  },
  {
    typeId: "C1",
    typeName: "C1타입",
    supplyArea: 44.37,
    priceRange: { min: 0, max: 0 },
  },
  {
    typeId: "D",
    typeName: "D타입",
    supplyArea: 47.88,
    priceRange: { min: 0, max: 0 },
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
    date: "추후 공지",
    description: "분양가의 10%",
  },
  {
    stage: "2차 중도금",
    percentage: 10,
    date: "추후 공지",
    description: "분양가의 10%",
  },
  {
    stage: "3차 중도금",
    percentage: 10,
    date: "추후 공지",
    description: "분양가의 10%",
  },
  {
    stage: "4차 중도금",
    percentage: 10,
    date: "추후 공지",
    description: "분양가의 10%",
  },
  {
    stage: "5차 중도금",
    percentage: 10,
    date: "추후 공지",
    description: "분양가의 10%",
  },
  {
    stage: "잔금",
    percentage: 40,
    date: "입주 시",
    description: "분양가의 40%",
  },
];
