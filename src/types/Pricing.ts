import { OfferDiscount } from "./Offer";
import { Tax } from "./Tax";

export enum PricingPer {
  UNIT = "UNIT",
  BOOKING = "BOOKING",
}
export interface Pricing extends PricingOffer, PricingExtras {
  original: number;
  retail: number;
  net: Nullable<number>;
  currency: string;
  currencyPrecision: number;
  includedTaxes: Array<Tax>;
}

export interface PricingUnit extends Pricing, PricingUnitExtras {
  unitId: string;
}

export interface PricingOffer {
  offerDiscount?: OfferDiscount;
}

export interface PricingExtras {
  extraId?: string;
}

export interface PricingUnitExtras {
  extraPricing?: Array<PricingExtras>;
}
