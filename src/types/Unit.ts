import { Pricing } from "./Pricing";

export enum UnitType {
  ADULT = 'ADULT',
  YOUTH = 'YOUTH',
  CHILD = 'CHILD',
  INFANT = 'INFANT',
  FAMILY = 'FAMILY',
  SENIOR = 'SENIOR',
  STUDENT = 'STUDENT',
  MILITARY = 'MILITARY',
  OTHER = 'OTHER',
}
export interface Restrictions {
  minAge: number;
  maxAge: number;
  idRequired: boolean;
  minQuantity: Nullable<number>;
  maxQuantity: Nullable<number>;
  paxCount: number;
  accompaniedBy: number[];
}

export interface Unit extends UnitContent, UnitPricing {
  id: string;
  internalName: string;
  reference: string;
  type: UnitType;
  restrictions: Restrictions;
  requiredContactFields: string[];
}

interface UnitContent {
  title?: string;
  titlePlural?: string;
  subtitle?: string;
}

interface UnitPricing {
  pricingFrom?: Array<Pricing>;
  pricing?: Array<Pricing>;
}
