import { Extra } from './Extras';
import { ContactField } from './Option';
import { Pricing } from './Pricing';
import { Question } from './Question';

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
  accompaniedBy: string[];
}

export interface Unit extends UnitContent, UnitPricing, UnitQuestions, UnitExtras {
  id: string;
  internalName: string;
  reference: string;
  type: UnitType;
  restrictions: Restrictions;
  requiredContactFields: ContactField[];
  visibleContactFields: ContactField[];
}

export interface UnitContent {
  title?: string;
  titlePlural?: string;
  subtitle?: Nullable<string>;
}

export interface UnitPricing {
  pricingFrom?: Pricing[];
  pricing?: Pricing[];
}

export interface UnitQuestions {
  questions?: Question[];
}

export interface UnitExtras {
  extras?: Extra[];
}
