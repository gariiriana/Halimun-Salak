export type KavlingStatus = "available" | "booked" | "sold";
export type KavlingType = "diamond" | "gold" | "silver";

export interface Kavling {
  id: string;
  number: string;
  block: string;
  type: KavlingType;
  size: number;
  dimensions: string;
  price: number;
  priceNormal: number;
  status: KavlingStatus;
}

export interface Lead {
  id?: string;
  name: string;
  phone: string;
  kavlingId: string;
  createdAt: Date | { seconds: number; nanoseconds: number };
}

export interface KavlingSVGData {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  block: string;
}
