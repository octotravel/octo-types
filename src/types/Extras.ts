import { Pricing } from "./Pricing";

export interface Extra {
  id: string;
  internalName: string | null;
  title: string | null;
  description: string | null;
  reference: string | null;
  restrictions: Restrictions;
  pricingFrom?: Pricing[];
  pricing?: Pricing[];
  shortDescription: string | null;
}

interface Restrictions {
  required: boolean;
  minQuantity: number;
  maxQuantity: number | null;
}

export interface ExtraItem {
  id: string;
  extraId: string;
  extra: Extra;
  pricing: Pricing;
}
