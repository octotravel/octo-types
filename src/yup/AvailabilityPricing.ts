import { array, object } from 'yup';
import type { SchemaOf } from 'yup';
import type { AvailabilityPricing } from '../models/AvailabilityPricing';
import { pricingYupSchema } from './Pricing';
import { pricingUnitYupSchema } from './PricingUnit';

export const availabilityPricingYupSchema = object().shape({
  unitPricing: array().of(pricingUnitYupSchema).notRequired(),
  pricing: pricingYupSchema.notRequired(),
}) as SchemaOf<AvailabilityPricing>;
