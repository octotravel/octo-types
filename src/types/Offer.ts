import { Booking } from "./Booking";
import { Pricing } from "./Pricing";
import { Product } from "./Product";
import { Tax } from "./Tax";

export enum NetDiscount {
  NONE = "NONE",
  FULL = "FULL",
  SPLIT = "SPLIT",
  PRORATED = "PRORATED",
}

export interface Offer {
  title: string;
  code: string;
  description: Nullable<string>;
  netDiscount: Nullable<NetDiscount>;
  restrictions: OfferRestrictions;
}

export interface OfferRestrictions {
  minUnits: Nullable<number>;
  maxUnits: Nullable<number>;
  minTotal: Nullable<number>;
  maxTotal: Nullable<number>;
  unitIds: string[];
}

export interface OfferComparison {
  productId: string;
  optionId: string;
  pricing: Pricing;
  product: Product;
  shortDescription: Nullable<string>;
  units: Array<Unit>;
}

export interface OfferCombination {
  productId: string;
  optionId: string;
  offerCode: string;
  offerTitle: string;
  pricing: Pricing;
  shortDescription: Nullable<string>;
  units: Array<Unit>;
  booking: Nullable<Booking>;
}

export interface OfferDiscount {
  original: number;
  retail: number;
  includedTaxes: Array<Tax>;
}

interface Unit {
  unitId: string;
  quantity: number;
}
