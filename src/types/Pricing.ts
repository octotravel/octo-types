import { OfferDiscount } from './Offer';
import { Tax } from './Tax';
import { UnitType } from './Unit';

export enum PricingPer {
  UNIT = 'UNIT',
  BOOKING = 'BOOKING',
}
export interface Pricing extends PricingOffer, PricingExtras {
  original: number;
  retail: number;
  net: Nullable<number>;
  currency: string;
  currencyPrecision: number;
  includedTaxes: Tax[];
}

export interface PricingUnit extends Pricing, PricingUnitExtras {
  unitId: string;
  unitType: UnitType;
}

export interface PricingOffer {
  offerDiscount?: OfferDiscount;
}

export interface PricingExtras {
  extraId?: string;
}

export interface PricingUnitExtras {
  extraPricing?: Pricing[];
}
