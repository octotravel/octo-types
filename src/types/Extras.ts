import { Pricing } from "./Pricing";

export interface Extra {
  id: string;
  internalName: Nullable<string>;
  title: Nullable<string>;
  description: Nullable<string>;
  reference: Nullable<string>;
  restrictions: Restrictions;
  pricingFrom?: Pricing[];
  pricing?: Pricing[];
  shortDescription: Nullable<string>;
}

interface Restrictions {
  required: boolean;
  minQuantity: number;
  maxQuantity: Nullable<number>;
}

export interface ExtraItem {
  id: string;
  extraId: string;
  extra: Extra;
  pricing: Pricing;
}

export interface AvailabilityExtraUnit {
  id: string;
  quantity: number;
}
