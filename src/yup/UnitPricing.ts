import { array, object } from 'yup';
import type { SchemaOf } from 'yup';
import type { UnitPricing } from '../models/UnitPricing';
import { pricingYupSchema } from './Pricing';

export const unitPricingYupSchema = object().shape({
  pricingFrom: array().of(pricingYupSchema).notRequired(),
  pricing: array().of(pricingYupSchema).notRequired(),
}) as SchemaOf<UnitPricing>;
