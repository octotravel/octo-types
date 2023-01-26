import { Pricing } from "./Pricing";

export interface Offer {
    title: string;
    code: string;
    description: Nullable<string>;
    netDiscount: Nullable<string>;
    restrictions: OfferRestrictions;
  }
  
interface OfferRestrictions {
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
}

export interface OfferCombination {
  productId: string;
  optionId: string;
  offerCode: string;
  offerTitle: string;
  pricing: Pricing;
}