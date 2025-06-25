import type { Tax } from './Tax';

export interface OfferDiscount {
  original: number;
  retail: number;
  includedTaxes: Tax[];
}
