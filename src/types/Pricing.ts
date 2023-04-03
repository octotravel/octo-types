import { OfferDiscount } from './Offer';
import { Tax } from './Tax';

export enum PricingPer {
  UNIT = "UNIT",
  BOOKING = "BOOKING",
}
export interface Pricing extends PricingOffer {
  original: number;
  retail: number;
  net: Nullable<number>;
  currency: string;
  currencyPrecision: number;
  includedTaxes: Array<Tax>;
}

export interface PricingUnit extends Pricing {
  unitId: string;
}

export interface PricingOffer {
  offerDiscount?: OfferDiscount
}