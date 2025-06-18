import type { Booking } from './Booking';
import type { Pricing } from './Pricing';
import type { Product } from './Product';
import type { Tax } from './Tax';

export enum NetDiscount {
  NONE = 'NONE',
  FULL = 'FULL',
  SPLIT = 'SPLIT',
  PRORATED = 'PRORATED',
}

export interface Offer {
  title: string;
  code: string;
  description: Nullable<string>;
  netDiscount: Nullable<NetDiscount>;
  restrictions: OfferRestrictions;
  usable: boolean;
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
  units: Unit[];
}

export interface OfferCombination {
  productId: string;
  optionId: string;
  offerCode: string;
  offerTitle: string;
  pricing: Pricing;
  shortDescription: Nullable<string>;
  units: Unit[];
  booking: Nullable<Booking>;
}

export interface OfferDiscount {
  original: number;
  retail: number;
  includedTaxes: Tax[];
}

interface Unit {
  unitId: string;
  quantity: number;
}
